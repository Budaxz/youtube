import { Link } from "react-router-dom";
import { useVideos } from "../../hooks/useVideos"

export function Short({short}) {
    const { handleMouseEnter, handleMouseLeave } = useVideos();

    return (
        <>
            {
                short && (
                    <Link to={`/short/${short.id}`}>
                        <div className="thumbnail-video-box">
                        <img className="thumbnail-image" src={short.thumbnail} alt="short image" />
                        <video 
                            src={short.url}
                            type="video/mp4"
                            muted
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        ></video>
                        <div className="channel-infos">
                            <div className="thumbnail-channel">
                                <img src={short.channel.thumbnail} alt="channel image" />
                            </div>
                            <div className="thumbnail-text">
                                <h4>{short.title}</h4>
                                <div className="inscription">{short.channel.nameChannel}</div>
                                <div className="views">{short.views} de visualizações</div>
                            </div>
                        </div>
                    </div>
                    </Link>
                )
            }
        </>
    )
}