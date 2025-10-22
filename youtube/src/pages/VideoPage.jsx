import { VideoContent } from "../components/Videos/Video.Content"
import { VideoInfo } from "../components/Videos/video.info"

import "../components/Videos/Videos.css"

export function VideoPage() {
    return (
        <main className="container">
            <div className="content-video-box">
                <VideoContent/>
                <VideoInfo/>
            </div>
        </main>
    )
}