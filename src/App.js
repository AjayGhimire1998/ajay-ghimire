import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import useSound from "use-sound";
import click from "./sounds/click.wav";
import hover from "./sounds/hover.mp3";
import logoSrc from "./images/logo.svg";
import Home from "./pages/home/Home";
import Logo from "./components/home/Logo";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Project from "./pages/project/Project";
import Resume from "./pages/resume/Resume";
import Blog from "./pages/blog/Blog";
import Contact from "./components/contact/Contact";
import CheerPlayer from "./components/cheer/CheerPlayer";
import NoMatch from "./components/NoMatch";
import EachProject from "./pages/project/EachProject";

function App() {
  const [play] = useSound(click, { volume: 0.05 });
  const [onHover] = useSound(hover, { volume: 0.05 });

  const footerRef = useRef(null);
  const navbarRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = footerRef.current;
      const navbar = navbarRef.current;

      const footerTop = footer.getBoundingClientRect().top;
      const navbarHeight = navbar.offsetHeight;
      const windowHeight = window.innerHeight;

      // Check if content height is greater than viewport height
      if (document.body.scrollHeight > windowHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      if (footerTop + navbarHeight >= windowHeight) {
        navbar.classList.add("fixed-navbar");
        navbar.classList.remove("footer-scroll");
      } else {
        navbar.classList.remove("fixed-navbar");
        navbar.classList.add("footer-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ensure navbar position is set on initial render

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">
      <div className="space"></div>
      {/* <div className="giphy"></div> */}
      <div className="main">
        <header>
          <Logo logoSrc={logoSrc} play={play} />
        </header>

        <main className="content-wrap">
          <Routes>
            <Route path="/" element={<Home play={play} />} />
            <Route
              path="/about"
              element={<About play={play} hover={onHover} />}
            />
            <Route path="/projects" element={<Project play={play} />} />
            <Route
              path="/projects/:name"
              element={<EachProject play={play} hover={onHover} />}
            />
            <Route
              path="/blogs"
              element={<Blog hover={onHover} play={play} />}
            />
            <Route
              path="/resume"
              element={<Resume play={play} hover={onHover} />}
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </main>
        <footer className="footer" ref={footerRef}>
          <div className={isSticky ? "footer-scroll" : ""} ref={navbarRef}>
            <Navbar play={play} hover={onHover} />
          </div>

          {/* <br /> */}
          <br />
          <CheerPlayer />
          {/* <br /> */}
          <Contact play={play} />
          <p className="shadow">© 2023 Ajay Ghimire</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
