import React from "react";
import "./each-project.css";
import EachProjectItem from "../../components/projects/EachProjectItem";

function EachProject({ play, hover }) {
  return (
    <section className="each-project">
      <EachProjectItem play={play} hover={hover} />
    </section>
  );
}

export default EachProject;
