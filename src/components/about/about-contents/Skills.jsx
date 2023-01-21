import React from "react";
import "./skills.css";
import { IconContext } from "react-icons";
import { DiHtml5 } from "react-icons/di";

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
        <br/>
        <DiHtml5 style={{fontSize: "50px"}}/>
      </div>
    </div>
  );
}

export default Skills;
