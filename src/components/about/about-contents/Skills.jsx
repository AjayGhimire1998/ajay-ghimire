import React from "react";
import "./skills.css";
import { DiHtml5, DiCss3, DiJavascript1, DiJava, DiReact, DiNodejs, DiRubyRough, DiGrails, DiRuby, DiWordpress } from "react-icons/di";
import {CSSSvg, HTMLSvg, JAVASvg, JSSvg, MONGOSvg, MYSQLSvg, NODESvg, POSTGRESSvg, RAILSSvg, REACTSvg, RUBYSvg} from "./devIcons.js";

function Skills({ shadow }) {
  return (
    <div className="skills-container">
      <h3 style={{ textAlign: "center" }}>
        <span style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}>
          Technical Skills
        </span>
      </h3>
      <br />
      <div className="languages">
        <h5 >Languages, I can code on:</h5>
        <br />
        <div className="icons-container">
          <HTMLSvg />
          <CSSSvg />
          <JSSvg />
          <RUBYSvg/>
          <JAVASvg/>
          
        </div>
      </div>
      <br/>
      <br/>
      <div className="languages">
        <h5>Frameworks, I am familiar with:</h5>
        <br />
        <div className="icons-container">
          <REACTSvg />
          <NODESvg />
          <RAILSSvg />
        </div>
      </div>
      <br/>
      <br/>
      <div className="languages">
        <h5>Database, I use:</h5>
        <br />
        <div className="icons-container">
          <MYSQLSvg/>
          <MONGOSvg />
          <POSTGRESSvg />
        </div>
      </div>
    </div>
  );
}

export default Skills;
