import youtubeLogo from "../assets/logo.jpeg"
import profileImg from "../assets/AMG-GT63s.jpeg"

export function Header() {
    return (
        <header>
            <nav className="container">
                <div className="logo">
                    <span id="menu-icon" className="material-icons-outlined">density_medium</span>
                    <img src={youtubeLogo} alt="Logo"/>
                </div>
                <div className="search-box">
                    <div className="search-input">
                        <input type="text" placeholder="Pesquisar"/>
                        <img 
                            id="keyboard"
                            src="https://www.gstatic.com/inputtools/images/tia.png" 
                            alt="keyboard"
                        />
                    </div>
                    <div className="search-buttom">
                        <span className="material-icons-outlined">search</span>
                    </div>
                    <span id="mic" className="material-icons-outlined">mic</span>
                </div>
                <div className="info-user">
                    <div className="create">
                        <span className="material-icons-outlined">add</span>
                        <span className="bold">Criar</span>
                    </div>
                    <span id="notifications" className="material-icons-outlined">notifications</span>
                    <div className="profile">
                        <img src={profileImg} alt="profile" />
                    </div>
                </div>
            </nav>
        </header>
    )
}