import { useVideos } from "../../hooks/useVideos"
import { Short } from "./Short";
import { Video } from "./Video"

export function Videos() {
    const {videos} = useVideos()
    const newVideos = videos.filter(v => v.shorts === false)
    const shorts = videos.filter(v => v.shorts === true)

    return (
        <div className="videos">
            {
                newVideos.map((video, index) => {
                    return (
                    <Video key={index} video={video} />
                    )
                })
            }
            <div className="shorts">
                {
                    shorts.map((video, index) => {
                        return (
                            <Short key={index} short={video}/>
                        )
                    })
                }
            </div>
        </div>
    )   
}