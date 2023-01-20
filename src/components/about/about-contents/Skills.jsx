import React from "react";

function Skills({ shadow }) {
  return (
    <div className="skills-container">
      <h3 style={{ textAlign: "center" }}>
        <span style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}>
          Technical Skills
        </span>
      </h3>
      <br />
      
    </div>
  );
}

export default Skills;
