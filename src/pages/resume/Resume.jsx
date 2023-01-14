import React from "react";
import MyResume from "../../components/resume/MyResume";
import "./resume.css"

function Resume({shadow}) {
  return (
    <div className="resume">
        <MyResume shadow={shadow}/>
    </div>
  );
}

export default Resume;
