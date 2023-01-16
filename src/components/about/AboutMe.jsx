import React, { useState } from "react";
import "./about-me.css";
import Profile from "./about-contents/Profile";
import Quote from "./about-contents/Quote";

function AboutMe({ shadow, play, hover }) {
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
        className="about-container"
        style={{ boxShadow: `5px -5px 8px ${shadow}` }}
      >
        {pages[pageCount]}
        <div className="about-buttons">
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
    </>
  );
}

export default AboutMe;
