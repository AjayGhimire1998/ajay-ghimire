import React, { useState } from "react";
import "./myresume.css";
import myResume from "../../images/Resume_Ajay_Ghimire.pdf";
import Profile from "./resume-contents/Profile";
import Quote from "./resume-contents/Quote";

function MyResume({ shadow, play, hover }) {
  const [isDisabled, SetIsDisabled] = useState(false);

  return (
    <>
      <div
        className="resume-container"
        style={{ boxShadow: `5px -5px 8px ${shadow}` }}
      >
 
        {/* <Quote/> */}
        <Profile />
        {/* <iframe
          src={myResume + "#toolbar=0"}
          title="Ajay_Ghimire_Resume"
          className="my-resume"
        /> */}
        <div className="resume-buttons">
          <button className="nav-button" onMouseOver={hover}>
            Previous
          </button>
          <button className="nav-button" onMouseOver={hover}>
            Next
          </button>
        </div>
      </div>
      <br />
      <a
        href={myResume}
        className="nav-button"
        onClick={play}
        onMouseOver={hover}
        download="Resume_Ajay_Ghimire.pdf"
      >
        Download
      </a>
    </>
  );
}

export default MyResume;
