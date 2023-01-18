import React, { useState } from "react";
import "./about-me.css";
import AboutItem from "./about-contents/AboutItem";
import profile from "../../images/my-pictures/profile.jpeg";
import background from "../../images/my-pictures/chocho.JPG";

function AboutMe({ shadow, play, hover }) {
  const [pageCount, setPageCount] = useState(0);
  const [isPreviewOn, setIsPreviewOn] = useState(false);

  const onPreviewClick = () => {
    play();
    setIsPreviewOn(!isPreviewOn);
  };

  const pages = [
    <AboutItem
      title="Profile"
      desc="I am a highly motivated and results-driven software developer with a 
      strong background in IT and a passion for creating innovative
      solutions. I have recently graduated with a Bachelor's
      degree in IT and completed a software engineering bootcamp.
      I have proven ability to quickly learn and 
      master new technologies, and a track record of delivering
      high-quality web applications on time."
      desc2="I have strong problem-solving skills and ability
      to work well in a team environment.
      I am seeking a challenging software developer role 
      where I can utilize my skills and continue to grow
      as a professional."
      image={profile}
      isPreviewOn={isPreviewOn}
      onPreviewClick={onPreviewClick}
      hover={hover}
    />,
    <AboutItem
      title="Professional Evolution"
      desc="During my bachelor's,
      I started working as a kitchen hand in a super busy Japanese restaurant
      to support my tuition. 
      My hard work, ability to get noticed & become a positive presence 
      in the workplace & ability to learn quickly, identify & solve problems 
      led me to get promoted as a 'Cook' in just six months. 
      That is where I gained experience working in a high-speed or fast-paced environment."
      desc2="I quit the job at the end of '2022' and started working in a pharmacy retail as a 
      'Retail Assistant' to enhance my communication and customer service skill."
      quote="“I have gone from slicing sashimis to slicing arrays”"
      image={background}
      isPreviewOn={isPreviewOn}
      onPreviewClick={onPreviewClick}
      hover={hover}
    />,
    <AboutItem 
    title=""
    />
  ];

  const onNextClick = () => {
    play();
    setPageCount(pageCount + 1);
    setIsPreviewOn(false);
  };

  const onPrevClick = () => {
    play();
    setPageCount(pageCount - 1);
    setIsPreviewOn(false);
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
