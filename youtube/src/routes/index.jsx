import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../components/Header"
import { HomePage } from "../pages/HomePage"
import { VideoPage } from "../pages/VideoPage"

export function RouterApp(){
    return (
        <BrowserRouter>
            <Header></Header> {/* Header é fixa em todas as páginas */}
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/video/:id' element={<VideoPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}