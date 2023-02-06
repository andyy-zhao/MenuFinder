import { Navbar, Nav, Form, FormControl, Button  } from "react-bootstrap";
import './Navbar.css';
import navbarIcon from '../../assets/icons/navbarIcon.svg';
import { SideBarMenu } from "../sidebar/SideBarMenu";
import { useState } from 'react';
import { MainSideNav } from "../sidenav/MainSideNav";

export const NavBar = () => {
    const [sidebar, setSidebar] = useState(false);

    const handleClick = () => {
        setSidebar(!sidebar);
    }

    return (
        <> 
            <Navbar expand="lg" className="navbar-light text-white navbar1">
                {/* <button className="sidebar-btn" onClick={handleClick}>
                    <img src={navbarIcon} alt="ICON"/>
                </button> */}
                <div className="app-name">
                Menu Finder
                </div>
            </Navbar>
            
        </>
    )
}