import youtubeLogo from "../assets/logo.jpeg"

export function Header() {
    return (
        <header>
            <nav className="container">
                <div className="logo">
                    <span className="material-icons-outlined">density_medium</span>
                    <img src={youtubeLogo} alt="Logo"/>
                </div>
                <div className="search-box"></div>
                <div className="infor-user"></div>
            </nav>
        </header>
    )
}