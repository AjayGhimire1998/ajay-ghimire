import React from "react";
import "./skills.css";
import { DiHtml5, DiCss3, DiJavascript1, DiJava, DiReact, DiNodejs, DiRubyRough, DiGrails, DiRuby, DiWordpress } from "react-icons/di";

function Skills({ shadow }) {
  return (
    <div className="skills-container">
      <h3 style={{ textAlign: "center" }}>
        <span style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}>
          Technical Skills
        </span>
      </h3>
      <br />
      <div className="languages">
        <h5>Languages:</h5>
        <br />
        <div className="icons-container">
          <DiHtml5 style={{ fontSize: "50px" }} />
          <DiCss3 style={{ fontSize: "50px" }} />
          <DiJavascript1 style={{ fontSize: "50px" }} />
          <DiRuby style={{ fontSize: "50px" }} />
          <DiJava style={{ fontSize: "50px" }} />
          
        </div>
      </div>
      <br/>
      <div className="languages">
        <h5>Frameworks:</h5>
        <br />
        <div className="icons-container">
          <DiReact style={{ fontSize: "50px" }} />
          <DiNodejs style={{ fontSize: "50px" }} />
          <DiRubyRough style={{ fontSize: "50px" }} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
