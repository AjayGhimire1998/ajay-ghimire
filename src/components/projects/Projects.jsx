
import "./projects.css";
import ReactPlayer from 'react-player';
import { videoLinks } from "./projects-videos";
import AboutItem from "../about/about-contents/AboutItem"

function Projects({shadow}) {
  return (
    <div className="projects-container">
      <h3 style={{ textAlign: "center" }}>
        <span style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}>
          {videoLinks[0].name}
        </span>
      </h3>
      <div className="project">
        <ReactPlayer url={videoLinks[0].link} className="video" playing={true} muted={true} controls={true} />
      </div>
      <div className="project-desc">
        <AboutItem />
      </div>
    </div>
  )
  }

export default Projects