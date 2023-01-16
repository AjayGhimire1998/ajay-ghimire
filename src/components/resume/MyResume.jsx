import React, { useState } from "react";
import "./myresume.css";
import myResume from "../../images/Resume_Ajay_Ghimire.pdf";
import Profile from "./resume-contents/Profile";
import Quote from "./resume-contents/Quote";

function MyResume({ shadow, play, hover }) {
  const [pageCount, setPageCount] = useState(0);
  const pages = [<Quote />, <Profile />];

  const onNextClick = () => {
    play();
    setPageCount(pageCount + 1);
  };

  const onPrevClick = () => {
    play();
    setPageCount(pageCount - 1);
  };

  return (
    <>
      <div
        className="resume-container"
        style={{ boxShadow: `5px -5px 8px ${shadow}` }}
      >
        {pages[pageCount]}
        <div className="resume-buttons">
          <button
            className="nav-button previous"
            onMouseOver={hover}
            onClick={onPrevClick}
            disabled={pageCount === 0}
          >
            Previous
          </button>
          <button
            className="nav-button next"
            onMouseOver={hover}
            onClick={onNextClick}
            disabled={pageCount === pages.length - 1}
          >
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
