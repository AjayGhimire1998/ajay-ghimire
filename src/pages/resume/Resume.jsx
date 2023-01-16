import React from "react";
import MyResume from "../../components/resume/MyResume";
import "./resume.css"

function Resume({shadow, play, hover}) {
  return (
    <div className="resume">
        <MyResume shadow={shadow} play={play} hover={hover}/>
    </div>
  );
}

export default Resume;
