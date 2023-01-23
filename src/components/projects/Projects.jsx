import { useState } from "react";
import "./projects.css";
import { videoLinks } from "./projects-videos";
import ProjectItem from "./ProjectItem";
import { useEffect } from "react";

function Projects({ shadow, hover, play }) {
  const [pageCount, setPageCount] = useState(0);

  const projects = [
    <ProjectItem shadow={shadow} name={videoLinks[0].name} url={videoLinks[0].url} desc={videoLinks[0].desc} desc2={videoLinks[0].desc2} links={videoLinks[0].links} tools={videoLinks[0].tools} play={play} hover={hover}/>,
    <ProjectItem shadow={shadow} name={videoLinks[1].name} url={videoLinks[1].url} desc={videoLinks[1].desc} desc2={videoLinks[1].desc2} links={videoLinks[1].links} tools={videoLinks[1].tools} play={play} hover={hover}/>,
    <ProjectItem shadow={shadow} name={videoLinks[2].name} url={videoLinks[2].url} desc={videoLinks[2].desc} desc2={videoLinks[2].desc2} links={videoLinks[2].links} tools={videoLinks[2].tools} play={play} hover={hover}/>,
    <ProjectItem shadow={shadow} name={videoLinks[3].name} url={videoLinks[3].url} desc={videoLinks[3].desc} desc2={videoLinks[3].desc2} links={videoLinks[3].links} tools={videoLinks[3].tools} play={play} hover={hover}/>,
    <ProjectItem shadow={shadow} name={videoLinks[4].name} url={videoLinks[4].url} desc={videoLinks[4].desc} desc2={videoLinks[4].desc2} links={videoLinks[4].links} tools={videoLinks[4].tools} play={play} hover={hover}/>,
    <ProjectItem shadow={shadow} name={videoLinks[5].name} url={videoLinks[5].url} desc={videoLinks[5].desc} desc2={videoLinks[5].desc2} links={videoLinks[5].links} tools={videoLinks[5].tools} play={play} hover={hover}/>
  ]

  const onPrevClick = () => {
    play()
    setPageCount(pageCount - 1);
    localStorage.setItem("projects_page_count", JSON.stringify(pageCount - 1))
  }

  const onNextClick = () => {
    play();
    setPageCount(pageCount + 1);
    localStorage.setItem("projects_page_count", JSON.stringify(pageCount + 1))
  }

  useEffect(() => {
    setPageCount(JSON.parse(localStorage.getItem("projects_page_count")) || 0)
  }, [])
  return (
    <div className="projects-container">
      {projects[pageCount]}
      <br />
      <br />
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
          disabled={pageCount === projects.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Projects