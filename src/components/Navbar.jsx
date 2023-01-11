import React from "react";
import logo from "../images/logo.png";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <img src={logo} alt="logo" className="logo" />
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
