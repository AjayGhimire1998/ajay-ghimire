import React from "react";
import "./pop-up.css";

function PopUp({ blog }) {
  return (
    <div className="Modal">
      <div className="Modal-content">
        <p>{blog.source}</p>
      </div>
    </div>
  );
}

export default PopUp;
