import type { ReactNode } from "react"
import "./Header.css"

interface HeaderPops{
    topBanner:string,
    children:ReactNode
}

const Header = ({topBanner,children}:HeaderPops) => {
    return (
        <header className="main-header">
            <div className="TopBanner">
                <img src={topBanner} alt="TopBannerHeader" />
            </div>
            {children}
        </header>
    )
}

export default Header
