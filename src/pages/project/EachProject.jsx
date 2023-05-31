import React from "react";
import "./each-project.css";
import EachProjectItem from "../../components/projects/EachProjectItem";

function EachProject({ play, hover }) {
  return (
    <div className="each-project">
      <EachProjectItem play={play} hover={hover} />
    </div>
  );
}

export default EachProject;
