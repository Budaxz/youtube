import { useEffect, useRef, useState } from "react"

export function VideoContent() {
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const VideoRef = useRef(null);

    useEffect(() => {
        const video = VideoRef.current;
        if(!video) return;

        function updateProgress() {
            if(!video.duration) return;

            const percent = (video.currentTime / video.duration) * 100;
            setProgress(Math.min(percent, 100));
            setCurrentTime(video.currentTime);
        }

        function onloaded() {
            setDuration(video.duration);
        }

        video.addEventListener("timeupdate", updateProgress)
        video.addEventListener("loadedmetadata", onloaded)

        return () => {
        video.addEventListener("timeupdate", updateProgress)
        video.addEventListener("loadedmetadata", onloaded)
        }

    },[]);

    function formatTime(time) {
        if (isNaN(time)) return "00:00";

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    }

    function handlePlay() {
        const v = VideoRef.current;
        if(!v) return;
        v.play();
        setIsPlaying(true);
    }

    function handlePause() {
        const v = VideoRef.current;
        if(!v) return;
        v.pause();
        setIsPlaying(false);
    }

    function handleMutad() {
        setIsMuted(!isMuted);
    }

    function handleProgressClick(e) {
        const bar = e.target;
        const rect = bar.getBoundingClientRect();
        const clickX = e.clickX - rect.left;
        const width = rect.width;
        const newTime = (clickX / width) * VideoRef.current.duration;
        VideoRef.current.currentTime = newTime;
    }

    return (
        <div className="content-video">
            <video  
                muted={isMuted}
                ref={VideoRef}
                src="/videos/taPegandoFogoBicho.mp4" 
                type="video/mp4"
            ></video>
            <div className="video-controls">
                <div className="progress" onClick={handleProgressClick}>
                    <div className="porcent-progress" style={{width: `${progress}%`}}></div>
                </div>
                <div className="buttons">
                    <div className="buttons-control">
                        {
                            isPlaying ? (
                                <span onClick={handlePause} className="material-icons-outlined">pause</span>
                            ) : (
                                <span onClick={handlePlay} className="material-icons-outlined">play_arrow</span>
                            )
                        }
                        {
                            isMuted ? (
                                <span onClick={handleMutad} className="material-icons-outlined">volume_up</span>
                            ) : (
                                <span onClick={handleMutad} className="material-icons-outlined">volume_off</span>
                            )
                        }
                        <div className="video-duration">
                            <span>{formatTime(currentTime)}</span>
                            <span>/</span>
                            <span>{formatTime(duration)}</span>
                        </div>
                    </div>
                    <div className="button-settings">
                         <span className="material-icons-outlined">subtitles</span>
                         <span className="material-icons-outlined">settings</span>
                         <span className="material-icons-outlined">code</span>
                         <span className="material-icons-outlined">open_in_full</span>
                    </div>
                </div>
            </div>
        </div>
    )
}