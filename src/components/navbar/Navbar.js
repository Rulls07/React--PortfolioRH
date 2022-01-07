import "./navbar.css";
import { ThemeContext } from "../../context";
import { useContext } from "react";
import {NavLink} from "react-router-dom";


const Navbar = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  
    return ( 
        <div className="navbar">
            <ul className="navbar-menu">
            <li><NavLink to="/" className="navbar-item" style={{color: darkMode && "white",}} >home</NavLink></li>
            <li><NavLink to="/aboutme" className="navbar-item" style={{color: darkMode && "white",}} >about me</NavLink></li>
            <li><NavLink to="/portfolio" className="navbar-item" style={{color: darkMode && "white",}} >portfolio</NavLink></li>
            <li><NavLink to="/" className="navbar-item" style={{color: darkMode && "white",}} >resume</NavLink></li>
            <li><NavLink to="/contact" className="navbar-item" style={{color: darkMode && "white",}} >contact</NavLink></li>  
            </ul>
        </div>
     );
}

export default Navbar