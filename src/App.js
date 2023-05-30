import { useEffect, useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import useSound from "use-sound";
import click from "./sounds/click.wav";
import hover from "./sounds/hover.mp3";
// import logo1 from "./images/logo.png";
import logo from "./images/logo2.png";
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
  const [play] = useSound(click, { volume: 0.1 });
  const [onHover] = useSound(hover, { volume: 0.1 });

  return (
    <>
      <div className="space"></div>
      <div className="main">
        <Logo logo={logo} play={play} />

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
          <Route path="/blogs" element={<Blog hover={onHover} play={play} />} />
          <Route
            path="/resume"
            element={<Resume play={play} hover={onHover} />}
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <br />
        <Navbar play={play} hover={onHover} />
        <br />

        <div className="footer">
          <CheerPlayer />
          <br />
          <Contact play={play} />
          <footer>
            <p className="shadow">© 2023 Ajay Ghimire</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
