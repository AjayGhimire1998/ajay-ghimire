
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import click from "../../sounds/click.wav";
import "./navbar.css";
function Navbar() {
  const [play] = useSound(click);
  return (
    <div className="navbar">
      <Link to="/about" className="nav-button" onClick={play} value="About">
        About
      </Link>
      <Link to="/projects" className="nav-button" onClick={play}>
        Projects
      </Link>
      <Link to="/contact" className="nav-button" onClick={play}>
        Contact
      </Link>
      <Link to="/resume" className="nav-button" onClick={play}>
        Resume
      </Link>
    </div>
  );
}

export default Navbar;
