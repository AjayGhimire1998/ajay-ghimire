import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import click from "../../sounds/click.wav";
import "./navbar.css";
function Navbar() {
  const [play] = useSound(click);
  const [currentPage, setCurrentPage] = useState("");
  const [pages, setPages] = useState([
    "About",
    "Projects",
    "Blogs",
    "Resume",
  ]);

  const playSound = () => {
    play();
  };
  const onLinkClick = (page) => {
    setCurrentPage(page);
    localStorage.setItem("current_page", JSON.stringify(page));
  };

  useEffect(() => {
    setCurrentPage(JSON.parse(localStorage.getItem("current_page")))
    if (currentPage === "") {
      setPages(["About", "Projects", "Blogs", "Resume"]);
    }
    if (currentPage === "About") {
      setPages(["Home", "Projects", "Blogs", "Resume"]);
    }
    if (currentPage === "Projects") {
      setPages(["Home", "About", "Blogs", "Resume"]);
    }
    if (currentPage === "Blogs") {
      setPages(["Home", "About", "Projects", "Resume"]);
    }
    if (currentPage === "Resume") {
      setPages(["Home", "About", "Projects", "Blogs"]);
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
              // onMouseOver={play}
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
