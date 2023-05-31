import React from "react";
import myResume from "../../images/ajayghimire_resume.pdf";
import "./my-resume.css";

function MyResume({ play, hover }) {
  return (
    <div className="resume-container">
      <div className="page-head">
        <h3>
          <span>Resume</span>
        </h3>
      </div>
      <div className="my-resume-container">
        <iframe
          src={myResume + "#toolbar=0"}
          title="Ajay_Ghimire_Resume"
          className="my-resume"
        />
      </div>
	  <br/>
      <div className="download-button-container">
        <a
          href={myResume}
          className="nav-button download"
          onClick={play}
          onMouseOver={hover}
          download="Ajay_Ghimire_Resume-2023.pdf"
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default MyResume;
