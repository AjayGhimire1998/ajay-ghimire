import React from "react";
import "./pop-up.css";

function PopUp({ blog, hover, play, closeModal, isOpen }) {
  const onProceedClick = () => {
    play();
    window.open(`${blog.url}`, "_blank");
  };

  const onCancelClick = () => {
    play();
    closeModal(false);
  };

  if (!isOpen) {
    return null; // Don't render the component if it's not open
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="message">
          <p>You are about to visit {blog.source}.</p>
        </div>
        <div className="choices">
          <button
            className="nav-button proceed"
            onMouseOver={hover}
            onClick={onProceedClick}
            aria-label={`Proceed to ${blog.source}`}
          >
            Proceed
          </button>
          <button
            className="nav-button cancel"
            onMouseOver={hover}
            onClick={onCancelClick}
            aria-label="Cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
