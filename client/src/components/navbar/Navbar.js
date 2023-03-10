import { Navbar } from "react-bootstrap";
import './Navbar.css';

export const NavBar = () => {
    return (
        <> 
            <Navbar expand="lg" className="navbar-light text-white navbar1">
                <div className="app-name">
                Menu Finder
                </div>
            </Navbar>
            
        </>
    )
}