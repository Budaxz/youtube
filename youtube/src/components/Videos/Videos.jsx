import { videos } from "./dataVideos"
import { Video } from "./Video"

export function Videos() {
    return (
        <div className="videos">
            {
                videos.map((video, index) => {
                    return (
                    <Video key={index} video={video} />
                    )
                })
            }
        </div>
    )   
}