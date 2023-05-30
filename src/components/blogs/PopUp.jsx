import React from "react";
import "./pop-up.css";


function PopUp({isOpen, blog}) {
  return (
    <div  className={ isOpen ? "ModalOpen " : "Modal is-hidden is-visuallyHidden"}>
    <div className="Modal-content">
      <p>{blog.source}</p>
    </div>
  </div>
  
  );
}

export default PopUp;
