import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom";
import { useVideos } from "../../hooks/useVideos";

export function VideoContent() {
    const { id } = useParams();
    const { 
        video,
        setVideo,
        videos,
        isPlaying,
        currentTime,
        setCurrentTime,
        duration,
        setDuration,
        handlePlay,
        handlePause,
        handleMutad,
        handleProgressClick,
        formatTime,
        isMuted,
        VideoRef
     } = useVideos();

    useEffect(() => {
        let foundVideo = videos.find(v => v.id  === Number(id))
       if(foundVideo){
        setVideo(foundVideo)
       }
    })

    
    const [progress, setProgress] = useState(0);
    

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

    return (
        <div className="content-video">
            <video  
                muted={isMuted}
                ref={VideoRef}
                src={video.url} 
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