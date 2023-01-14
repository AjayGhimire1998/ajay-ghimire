import React from "react";
import "./myresume.css";
import myResume from "../../images/Resume_Ajay_Ghimire.pdf";

function MyResume({ shadow }) {
  return (
    <>
    <div
      className="resume-container"
      style={{ boxShadow: `5px -5px 8px ${shadow}` }}
    >
        <iframe src={myResume + "#toolbar=0"} title="Ajay_Ghimire_Resume" className="my-resume"/>
    </div>
    <button className="nav-button">Download</button>
    </>
  );
}

export default MyResume;
