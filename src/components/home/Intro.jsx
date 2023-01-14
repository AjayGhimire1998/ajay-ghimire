import React from "react";
import "./intro.css";
function Intro({shadow}) {
  return (
    <div className="intro-container" style={{boxShadow: `5px -5px 8px ${shadow}`}}>
      <br/>
      <div style={{filter: `drop-shadow(2px 2px 2px ${shadow})` }}>
        <p >I am</p>
      </div>
      <br />
      <br/>
      <div style={{filter: `drop-shadow(2px 2px 2px ${shadow})` }}>
        <strong>Ajay Ghimire</strong>
      </div>
      <br />
      <br/>
      <div style={{filter: `drop-shadow(2px 2px 2px ${shadow})` }}>
        <p>a </p>
      </div>
      <br/>
      <div style={{filter: `drop-shadow(2px 2px 2px ${shadow})` }}>
        <span>Full Stack Software Developer </span>
      </div>
      <br />
      <div style={{filter: `drop-shadow(2px 2px 2px ${shadow})` }}>
        <p> from </p>
      </div>
      <br/>
      <div style={{filter: `drop-shadow(2px 2px 2px ${shadow})` }}>
        <span>
          <i> Sydney, Australia.</i>
        </span>
      </div>
      <br />
    </div>
  );
}

export default Intro;
