import React from "react";
import "./pop-up.css";

function PopUp({ blog, hover, play }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="message">
          <p>You are about to visit {blog.source}.</p>
        </div>
        <div className="choices">
          <button className="nav-button proceed" onMouseOver={hover}>Proceed</button>
          <button className="nav-button cancel" onMouseOver={hover}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
