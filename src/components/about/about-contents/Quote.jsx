import React from "react";
import "./quote.css";
import ajay1 from "../../../images/my-pictures/ajay1.jpeg";
function Quote() {
  return (
    <div className="quote">
      <h4>
        <blockquote>
          <i>“I have gone from slicing sashimis to slicing arrays”</i>
        </blockquote>
      </h4>
      {/* <img src={ajay1} style={{ imageRendering: "pixelated", height: "200px", width: "300px" }} alt="ajay" /> */}
    </div>
  );
}

export default Quote;
