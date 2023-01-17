import React, { useState } from "react";
import "./about-me.css";
import AboutItem from "./about-contents/AboutItem";
import Quote from "./about-contents/Quote";
import ajay1 from "../../images/my-pictures/ajay1.jpeg";

function AboutMe({ shadow, play, hover }) {
  const [pageCount, setPageCount] = useState(0);
  const pages = [
    <AboutItem
      title="Profile"
      desc="I am a highly motivated and results-driven software developer with a 
      strong background in IT and a passion for creating innovative
      solutions. I have recently graduated with a Bachelor's
      degree in IT and completed a software engineering bootcamp.
      I have proven ability to quickly learn and 
      master new technologies, and a track record of delivering
      high-quality web applications on time.
      I have strong problem-solving skills and ability
      to work well in a team environment.
      I am seeking a challenging software developer role 
      where I can utilize my skills and continue to grow
      as a professional."
      image={ajay1}
    />,
    <Quote />,
  ];

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
