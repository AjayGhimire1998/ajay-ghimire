import React from "react";
import Pictures from "../../components/about/Pictures";
import "./about.css";

function About({ shadow }) {
  return (
    <div className="about">
      <Pictures shadow={shadow} />
    </div>
  );
}

export default About;
