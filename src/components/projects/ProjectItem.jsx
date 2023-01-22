import "./project-item.css"
import ReactPlayer from 'react-player';
import AboutItem from "../about/about-contents/AboutItem"
import { DiReact } from "react-icons/di"

function ProjectItem({ name, link, desc, desc2, tools, shadow }) {

  return (
    <div className='project-item-container'>
      <h3 style={{ textAlign: "center" }}>
        <span style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}>
          {name}
        </span>
      </h3>
      <br />
      <div className="project-video">
        <ReactPlayer url={link} className="video" playing={true} muted={true} controls={true} />
      </div>
      <div className="project-desc">
        <AboutItem desc={desc} desc2={desc2} />
      </div>
      <div className='languages-used'>
        <h5 style={{ textAlign: "left" }}>Tools Used:</h5>
        {tools.map((lan) => lan)}
      </div>
    </div>
  )
}

export default ProjectItem