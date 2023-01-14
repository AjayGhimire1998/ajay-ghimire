import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css";
function Navbar() {
  // const navigate = useNavigate();
  return (
    <div className="navbar">
      <Link to="/about" className="nav-button">About</Link>
      <Link to="/projects" className="nav-button">Projects</Link>
      <Link to="/contact" className="nav-button">Contact</Link>
      <Link to="/resume" className="nav-button">Resume</Link>
    </div>
  );
}

export default Navbar;
