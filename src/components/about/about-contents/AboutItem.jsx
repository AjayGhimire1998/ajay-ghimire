import React from "react";
import "./about-item.css";
import ajay1 from "../../../images/my-pictures/ajay1.jpeg";

function Profile({title, desc}) {
  return (
    <div className="about-item">
      <h3>
        <span>{title}</span>
      </h3>
      <p>
       {desc}
      </p>
      <img
        src={ajay1}
        style={{ imageRendering: "pixelated", height: "200px", width: "300px" }}
        alt="ajay"
      />
    </div>
  );
}

export default Profile;
