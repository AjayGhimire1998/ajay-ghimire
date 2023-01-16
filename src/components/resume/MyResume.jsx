import React from "react";
import myResume from "../../images/Resume_Ajay_Ghimire.pdf";
import "./my-resume.css";

function MyResume({ shadow, play, hover }) {
  return (
    <div
      className="resume-container"
      style={{ boxShadow: `5px -5px 8px ${shadow}` }}
    >
      <iframe
        src={myResume + "#toolbar=0"}
        title="Resume_Ajay_Ghimire"
        className="my-resume"
      />

      <div className="download-button-container">
        <a
          href={myResume}
          className="nav-button download"
          onClick={play}
          onMouseOver={hover}
          download="Resume_Ajay_Ghimire.pdf"
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default MyResume;
