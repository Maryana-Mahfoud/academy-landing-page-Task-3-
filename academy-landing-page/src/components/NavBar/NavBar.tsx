import { useState } from "react"; 

import "./NavBar.css";
import { NavLink } from "react-router-dom";
interface NavItem {
    label: string; 
    path: string;  
}

interface NavBarProps {
    logo: string;
    items: NavItem[];
}
const NavBar = ({logo,items}:NavBarProps) => {
    const[open,setIsOpen]=useState(false);
    return (
        <nav className="navBar-container">
            <div className="nav-Logo">
                <img src={logo} alt="navBarLogo" />
            </div>
            
            <div className="menu-icon" onClick={()=>{setIsOpen(!open)}}>
                <img src="/assets/Images/menu.png" alt="menu-icon" />
            </div>
            
            <div className={`navItem ${open? "active" :""}`}>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item.path}>{item.label}</NavLink>
                    </li>
                ))}
            </ul>
            </div>
        </nav>
    )
}

export default NavBar



