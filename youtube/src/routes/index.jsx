import { BrowserRouter, Routes, Route } from "react-router-dom"
import { VideoContent } from "../pages/Video.Content"

export function RouterApp(children){
    return (
        <BrowserRouter>
            {children}
            <Routes>
                <Route path='/'/>
                <Route path='/video' element={VideoContent}/>
            </Routes>
        </BrowserRouter>
    )
}