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
        handlePlay,
        handlePause,
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
                            <div className="content-channel-info">
                                <img src={short.channel.thumbnail} alt="image channel" />
                                <span>@{short.channel.nameChannel}</span>
                                <button className="subscriber">Inscrever-se</button>
                                <button className="member">Seja Membro</button>
                            </div>
                            <div className="channel-video">
                                <h3>{short.title}</h3>
                                <p>{short.musicName}</p>
                            </div>
                        </div>
                        <div className="content-short-video">
                            <div className="short-video">
                                <video 
                                    onClick={isPlaying ? handlePause : handlePlay}
                                    src={short.url}
                                    type="video/mp4"
                                    muted={isMuted}
                                    ref={VideoRef}
                                ></video>
                                <div className="short-progress">
                                    <div className="progress">
                                        <div className="porcent-progress" style={{width: `${progress}`}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="short-buttons-controls">
                                <div className="short-volume">
                                    {
                                        isMuted ? (
                                            <span className="material-icons-outlined">thump_up</span>
                                        ) : (
                                            <span className="material-icons-outlined">volume_off</span>
                                        )
                                    }
                                </div>
                                <div className="short-likes">
                                    <span className="material-icons-outlined">thumb_up</span>
                                    <span className="short-text">14 mil</span>
                                </div>
                                <div className="short-unLikes">
                                    <span className="material-icons-outlined">thumb_down</span>
                                    <span className="short-text">1 mil</span>
                                </div>  
                                <div className="short-comment">
                                    <span className="material-icons-outlined">comment</span>
                                    <span className="short-text">756</span>
                                </div>
                                <div className="short-share">
                                    <span className="material-icons-outlined">reply</span>
                                    <span className="short-text">Compartilhar</span>
                                </div>
                                <div className="short-remixes">
                                    <span className="material-icons-outlined">restart_alt</span>
                                    <span className="short-text">126</span>
                                </div>
                            </div>
                        </div>
                        <div className="content-short-comments">
                            <div className="comment-header">
                                <div className="comment-title">
                                    <h3>Comentários</h3>
                                    <span>20</span>
                                </div>
                                <div className="comment-buttons">
                                    <span className="material-icons-outlined">sort</span>
                                    <span className="material-icons-outlined">close</span>
                                </div>
                            </div>
                            <div className="content-comments">
                                <div className="comment">
                                    <div className="user-image">
                                        <img src="/images/channels_profile.jpg" alt="user image" />
                                    </div>
                                    <div className="user-comment">
                                        <h5>@userid</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat quas, reprehenderit aspernatur eum consectetur nobis eius magnam molestias vero pariatur, ut libero incidunt dicta porro voluptatibus iusto eligendi tempora!</p>
                                        <div className="comment-likes">
                                            <span className="material-icons-outlined">thump_up</span>
                                            <span>14 mil</span>
                                            <span className="material-icons-outlined">thump_down</span>
                                            <span>1</span>
                                            <div className="respond">
                                                <span>Responder</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}