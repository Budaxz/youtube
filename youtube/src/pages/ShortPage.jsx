import {Menu} from '../components/Menu'
import { ShortContent } from '../components/Shorts/ShortContent'    

import "../components/Shorts/Short.css"
import "../components/Videos/Videos.css"

export function ShortPage(){
    return(
        <main>
            <Menu/>
            <div className="main">
                <ShortContent/>
            </div>
        </main>
    )
}