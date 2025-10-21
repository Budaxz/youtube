import { createContext, useState, useRef } from "react" 
import { videos as initialVideos } from "../components/Videos/dataVideos";

export const AppContext = createContext()

export function AppProvider({children}) {
    const [video, setVideo] = useState({});
    const [videos, setVideos] = useState(initialVideos);
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const VideoRef = useRef(null);

    function handleMouseEnter(event) {
        event.target.play()
    }
    
    function handleMouseLeave(event) {
        event.target.pause()
        event.target.currentTime = 0 // voltar o video para o inicio
    }

    function formatTime(time) {
        if (isNaN(time)) return "00:00";

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    }

    function handlePlay() {
        const v = VideoRef.current;
        if(!v) return;
        v.play();
        setIsPlaying(true);
    }

    function handlePause() {
        const v = VideoRef.current;
        if(!v) return;
        v.pause();
        setIsPlaying(false);
    }

    function handleMutad() {
        setIsMuted(!isMuted);
    }

    function handleProgressClick(e) {
        const bar = e.target;
        const rect = bar.getBoundingClientRect();
        const clickX = e.clickX - rect.left;
        const width = rect.width;
        const newTime = (clickX / width) * VideoRef.current.duration;
        VideoRef.current.currentTime = newTime;
    }

    return (
        <AppContext.Provider
            value={{
                video,
                setVideo,
                videos,
                VideoRef,
                setVideos,
                handleMouseEnter,
                handleMouseLeave,
                isPlaying,
                setIsPlaying,
                currentTime,
                setCurrentTime,
                duration,
                setDuration,
                handlePlay,
                handlePause,
                handleMutad,
                handleProgressClick,
                formatTime,
                isMuted, 
                setIsMuted
            }}
        >
            {children}
        </AppContext.Provider>
    )
}