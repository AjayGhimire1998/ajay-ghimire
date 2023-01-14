import { useEffect, useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import logo1 from "./images/logo.png";
import logo2 from "./images/logo2.png";
import Home from "./pages/home/Home";
import Logo from "./components/home/Logo";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Resume from "./pages/resume/Resume";

function App() {
  let shadows = useMemo(() => [], []);
  shadows = [
    "#80dfff",
    "#cc6600",
    "#00ccff",
    "#cc6600",
    "#00cc00",
    "#ffff00",
    "#ff00ff",
    "#ff9900",
  ];
  let logos = useMemo(() => [], []);
  logos = [logo1, logo2];

  const [shadow, setShadow] = useState("");
  const [index, setIndex] = useState(0);
  const [logoIndex, setLogoIndex] = useState(0);
  const [logo, setLogo] = useState(logos[logoIndex]);

  useEffect(() => {
    const shadowInterval = setInterval(() => {
      setShadow(shadows[index]);
      setIndex(index + 1);
    }, 2000);

    setInterval(() => {
      setLogoIndex(logoIndex + 1);
      setLogo(logos[logoIndex]);
      if (logoIndex === 1) {
        setLogoIndex(0);
      }
    }, 2000);

    if (index === 6) {
      setIndex(0);
      return () => clearInterval(shadowInterval);
    }
  }, [index, shadows, logoIndex, logos]);

  return (
    <>
      <div className="space"></div>
      <div className="main">
        <div>
          <br/>
          <br/>
          <Logo logo={logo} shadow={shadow} />
        </div>
        <Routes>
          <Route path="/" element={<Home shadow={shadow} />} />
          <Route
            path="/about"
            element={<About shadow={shadow} />}
          />
          <Route
            path="/resume"
            element={<Resume shadow={shadow} />}
          />
        </Routes>
        <br />
        <br />
        <Navbar />
      </div>
      <footer></footer>
    </>
  );
}

export default App;
