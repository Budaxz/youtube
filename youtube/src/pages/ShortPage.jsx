import {Menu} from '../components/Menu'
import { ShortContent } from '../components/Shorts/ShortContent'    


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