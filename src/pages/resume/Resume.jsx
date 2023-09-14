import React from "react";
import MyResume from "../../components/resume/MyResume";
import "./resume.css"

function Resume({shadow, play, hover}) {
  return (
    <section className="resume">
        <MyResume shadow={shadow} play={play} hover={hover}/>
    </section>
  );
}

export default Resume;
