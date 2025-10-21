import { Link } from "react-router-dom"
import { useVideos  } from "../../hooks/useVideos"; 

export function Video({video}) { 
    // const { video } = parens; o mesmo que pares.video
    const { handleMouseEnter, handleMouseLeave } = useVideos();

    return (
        <Link to={`/video/${video.id}`}>
            <div key={video.id} className="thumbnail-video-box">
                <img className="thumbnail-image" src={video.thumbnail} alt="thumbnail image" />
                <video 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    src={video.url} 
                    type="video/mp4"
                ></video>
                <div className="chanel-infos">
                    <div className="thumbnail-channel">
                        <img src={video.channel.thumbnail} alt="thumbnail channel image" />
                    </div>
                    <div className="thumbnail-text">
                        <h4>{video.title}</h4>
                        <p className="channel">{video.channel.nameChannel}</p>
                        <p className="views">{video.views}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}