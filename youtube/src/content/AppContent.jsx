import { createContext, useState } from "react" 
import { videos as initialVideos } from "../components/Videos/dataVideos";

export const AppContext = createContext()

export function AppProvider({children}) {
    const [video, setVideo] = useState({});
    const [videos, setVideos] = useState(initialVideos);

    function hadleMouseEnter(event) {
        event.target.play()
    }
    function hadleMouseLeave(event) {
        event.target.pause()
        event.target.currentTime = 0 // voltar o video para o inicio
    }

    return (
        <AppContext.Provider
            value={{
                video,
                setVideo,
                videos,
                setVideos,
                hadleMouseEnter,
                hadleMouseLeave
            }}
        >
            {children}
        </AppContext.Provider>
    )
}