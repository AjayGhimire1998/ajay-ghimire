import React from "react";
import "./intro.css";
function Intro({ shadow }) {
  return (
    <div
      className="intro-container"
      // style={{ boxShadow: `5px -5px 7px ${shadow}` }}
    >
      <br />
      <div
      // style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}
      >
        <p>I am</p>
      </div>
      <br />
      <div style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}>
        <strong>Ajay Ghimire</strong>
      </div>
      <br />
      <div
      // style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}
      >
        <p>a </p>
      </div>
      <br />
      <div
      // style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}
      >
        <span>Full Stack Software Developer </span>
      </div>
      <br />
      <div
      // style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}
      >
        <p> from </p>
      </div>
      <br />
      <div
      // style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}
      >
        <span>
          <i> Sydney, Australia.</i>
        </span>
      </div>
      <br />
    </div>
  );
}

export default Intro;
