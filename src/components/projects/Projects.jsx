import { useState } from "react";
import "./projects.css";
import { videoLinks } from "./projects-videos";
import ProjectItem from "./ProjectItem";

function Projects({ shadow }) {
  const [pageCount, setPageCount] = useState(0);
  const projects = [
    <ProjectItem shadow={shadow} name={videoLinks[0].name} url={videoLinks[0].url} desc={videoLinks[0].desc} desc2={videoLinks[0].desc2} links={videoLinks[0].links} tools={videoLinks[0].tools} />,
  ]
  return (
    <div className="projects-container">
      {projects[0]}
      <br/>
      <br/>
      <div className="about-buttons">
        <button
          className="nav-button previous"
        // onMouseOver={hover}
        // onClick={onPrevClick}
        // disabled={pageCount === 0}
        >
          Previous
        </button>
        <button
          className="nav-button next"
        // onMouseOver={hover}
        // onClick={onNextClick}
        // disabled={pageCount === pages.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Projects