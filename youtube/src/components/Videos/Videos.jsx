import { videos } from "./dataVideos"

export function Videos() {
    return (
        <div className="videos">
            {
                videos.map((video, index) =>{
                    return (
                        <div key={index} className="thumbnail-video-box">
                            <img src={video.thumbnail} alt="thumbnail image" />
                            <video src="{video.url}"></video>
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
                    )
                })
            }
        </div>
    )
}