import React from "react";
import "./pop-up.css";

function PopUp({ blog }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{blog.source}</p>
      </div>
    </div>
  );
}

export default PopUp;
