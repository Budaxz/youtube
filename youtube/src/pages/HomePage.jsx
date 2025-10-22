import { Menu } from "../components/Menu";
import { Filters } from "../components/Filter";
import { Videos } from "../components/Videos/Videos";

import "../components/Shorts/Short.css"
import "../components/Videos/Videos.css"

export function HomePage() {
    return(
        <main>
            <Menu/>
            <div className="main">
                <Filters/>
                <Videos/>
            </div>
        </main>
    )
}