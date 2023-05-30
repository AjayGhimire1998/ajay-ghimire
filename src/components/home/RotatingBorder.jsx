import React from "react";
import "./rotating-border.css"
import ajay from "../../images/my-pictures/ajay2.png";

function RotatingBorder() {
  return <div className="rainbow">
    <img src= {ajay} alt="wjhatevr" className="roat"/>
  </div>;
}

export default RotatingBorder;
