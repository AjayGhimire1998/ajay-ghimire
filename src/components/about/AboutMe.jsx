import React, { useEffect, useState } from "react";
import "./about-me.css";
import AboutItem from "./about-contents/AboutItem";
import profile from "../../images/my-pictures/profile.jpeg";
import background from "../../images/my-pictures/chocho.JPG";
import academyXi from "../../images/my-pictures/academyXi.png";
import FromTo from "./about-contents/FromTo";
import { edu, exp } from "./about-contents/eduExp";

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
      title="Academic Evolution"
      desc="I began my academic journey with a Bachelor of IT 
    degree, where I gained a strong foundation in computer 
    science and software development. However, I
     realized that I wanted to specialize in software 
     engineering and decided to take a bootcamp to 
     further my skills in this field. 
     The bootcamp provided me with a more hands-on and 
     practical approach to software engineering, and 
     I was able to work on real-world projects and learn 
     from experienced industry professionals."
      desc2="This experience allowed me to apply the 
     theoretical knowledge I had learned in my Bachelor's 
     degree to real-world situations and helped me to become more
     well-rounded as a software engineer. It also helped 
     me to become more confident in my abilities and 
     pursue a career in the field. I am now ready to apply the
      skills and knowledge I've gained in both 
      my Bachelor's degree and bootcamp to my future job as 
      a software engineer. This academic journey has been 
      a great opportunity for me to develop my skills
      and pursue my passion for software engineering."
      image={academyXi}
      isPreviewOn={isPreviewOn}
      onPreviewClick={onPreviewClick}
      hover={hover}
    />,
    <FromTo edu={edu} exp={exp} />,
  ];

  const onNextClick = () => {
    play();
    setPageCount(pageCount + 1);
    localStorage.setItem("about_page_count", JSON.stringify(pageCount + 1));
    setIsPreviewOn(false);
  };

  const onPrevClick = () => {
    play();
    setPageCount(pageCount - 1);
    localStorage.setItem("about_page_count", JSON.stringify(pageCount - 1));
    setIsPreviewOn(false);
  };

  useEffect(() => {
    setPageCount(JSON.parse(localStorage.getItem("about_page_count")) || 0);
  }, []);

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
