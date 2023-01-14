import React from "react";
import "./intro.css";
function Intro({shadow}) {
  return (
    <div className="intro-container" style={{boxShadow: `5px -5px 8px ${shadow}`}}>
      <br/>
      <div style={{filter: `drop-shadow(2px 2px 2px #80dfff)` }}>
        <p >I am</p>
      </div>
      <br />
      <br/>
      <div style={{filter: `drop-shadow(2px 2px 2px #ff9900)`}}>
        <strong>Ajay Ghimire</strong>
      </div>
      <br />
      <br/>
      <div style={{filter: `drop-shadow(2px 2px 2px #80dfff)` }}>
        <p>a </p>
      </div>
      <br/>
      <div style={{filter: `drop-shadow(2px 2px 2px #00cc00)` }}>
        <span>Full Stack Software Developer </span>
      </div>
      <br />
      <div style={{filter: `drop-shadow(2px 2px 2px #80dfff)` }}>
        <p> from </p>
      </div>
      <br/>
      <div style={{filter: `drop-shadow(2px 2px 2px #cc6600)` }}>
        <span>
          <i> Sydney, Australia.</i>
        </span>
      </div>
      <br />
    </div>
  );
}

export default Intro;
