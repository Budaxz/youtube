import { Menu } from "../components/Menu";
import { Filters } from "../components/Filter";
import { Videos } from "../components/Videos/Videos";

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