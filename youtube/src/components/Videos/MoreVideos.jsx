import { useParams } from "react-router-dom"
import { useVideos } from "../../hooks/useVideos";
import { Short } from "../Shorts/Short"
import { Video } from "./Video"

import "./Videos.css"

export function MoreVideos() {
    const { id } = useParams();
    const {videos} = useVideos();

    const newVideos = videos.filter(v => v.shorts === false);
    const shorts = videos.filter(v => v.shorts === true).slice(0, 3);
    const remaingVideos = newVideos.filter(v => v.id != Number(id))

    return (
        <div className="more-content">
            <div className="more-shorts">
                {
                    shorts.map((short, index) => (
                        <Short key={`more-short-${index}`} short={short} />
                    ))
                }
            </div>
            <div className="more-videos">
                {
                    remaingVideos.map((video, index) => (
                        <Video key={`more-video-${index}`} video={video} />
                    ))
                }
            </div>
        </div>
    )
}