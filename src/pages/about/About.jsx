import React from "react";
import "./about.css";
import AboutMe from "../../components/about/AboutMe";

function About({ shadow, play, hover }) {
  return (
    <div className="about">
      <AboutMe shadow={shadow} play={play} hover={hover} />
    </div>
  );
}

export default About;
