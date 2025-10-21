import { useEffect, useState } from "react";
import { useVideos } from "../../hooks/useVideos";
import { useParams } from "react-router-dom";

export function ShortContent(){
    const { id } = useParams();

    const { 
        short,
        setShort,
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

    const [progress, setProgress] = useState(0);

     useEffect(() => {
        const foundShort = videos.find(v => v.id === Number(id));
        if (foundShort) {
            setShort(foundShort)
        }
    }, [id, videos, setShort]);

    useEffect(() => {
        const video = VideoRef.current;
        if(!video) return;

        function updateProgress(){
            if (!video.duration) return;
            const percentage = (video.currentTime / video.duration) * 100;
            setProgress(Math.min(percentage, 100))
        }

        video.addEventListener("timeupdate", updateProgress);

        return () => {
            video.addEventListener("timeupdate", updateProgress)
        }
    })

    return (
        <>
            {
                Object.keys(short).length !== 0 && (
                    <div className="content-short-box">
                        <div className="content-short-channel">
                            <div className="channel-info">
                                <img src={short.channel.thumbnail} alt="image channel" />
                                <span>@{short.channel.nameChannel}</span>
                                <button className="subscriber">Inscrever-se</button>
                                <button className="member">Seja Membro</button>
                            </div>
                            <div className="channel-video">
                                <h5>{short.tittle}</h5>
                                <p>{short.musicName}</p>
                            </div>
                        </div>
                        <div className="content-short-video"></div>
                        <div className="content-short-comments"></div>
                    </div>
                )
            }
        </>
    )
}