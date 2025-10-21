import { useVideos } from "../../hooks/useVideos"
import { Short } from "../Shorts/Short";
import { Video } from "./Video"

export function Videos() {
    const {videos} = useVideos()
    const newVideos = videos.filter(v => v.shorts === false)
    const shorts = videos.filter(v => v.shorts === true)

    const firstVideos = newVideos.slice(0, 3);
    const firstShorts = shorts.slice(0, 5);
    const remainigVideos = newVideos.slice(3)
    const remainigShorts = shorts.slice(5);

    return (
        <>
            <div className="videos">
                {
                    firstVideos.map((video, index) => {
                        return (
                        <Video key={index} video={video} />
                        )
                    })
                }
            </div>
            <div className="shorts">
                    {
                        firstShorts.map((video, index) => {
                            return (
                                <Short key={index} short={video}/>
                            )
                        })
                    }
            </div>
            <div className="videos">
                {
                    remainigVideos.map((video, index) => {
                        return (
                            <Video key={index} video={video}/>
                        )
                    })
                }
            </div>
            <div className="shorts">
                {
                    remainigShorts.map((video, index) => {
                        return (
                            <Short key={index} short={video}/>
                        )
                    })
                }
            </div>
        </>
    )   
}