import React from "react";
import ajay1 from "../../images/my-pictures/ajay1.jpeg";
import "./pictures.css";
function Pictures({ shadow }) {
  return (
    <div
      className="pictures-container"
      style={{ boxShadow: `5px -5px 8px ${shadow}` }}
    >
      <div
        className="my-picture-container"
      >
        <img src={ajay1} alt="ajay1" className="my-picture"/>
      </div>

    </div>
  );
}

export default Pictures;
