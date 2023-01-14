import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import click from "../../sounds/click.wav";
import "./navbar.css";
function Navbar() {
  const [play] = useSound(click);
  const [currentPage, SetCurrentPage] = useState("");
  const [pages, setPages] = useState([
    "About",
    "Projects",
    "Contact",
    "Resume",
  ]);

  const playSound = () => {
    play();
  };
  const onLinkClick = (page) => {
    SetCurrentPage(page);
    localStorage.setItem("current_page", JSON.stringify(page));
  };

  useEffect(() => {
    if (currentPage === "") {
      setPages(["About", "Projects", "Contact", "Resume"]);
    }
    if (currentPage === "About") {
      setPages(["Home", "Projects", "Contact", "Resume"]);
    }
    if (currentPage === "Projects") {
      setPages(["Home", "About", "Contact", "Resume"]);
    }
    if (currentPage === "Contact") {
      setPages(["Home", "About", "Projects", "Resume"]);
    }
    if (currentPage === "Resume") {
      setPages(["Home", "About", "Projects", "Contact"]);
    }
  }, [currentPage]);

  return (
    <div className="nav-container">
      <div className="navbar">
        {pages.map((page, index) => {
          return (
            <Link
              to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
              className="nav-button"
              onClick={() => {
                onLinkClick(page === "Home" ? "" : page);
                playSound();
              }}
              key={index}
            >
              {page}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
