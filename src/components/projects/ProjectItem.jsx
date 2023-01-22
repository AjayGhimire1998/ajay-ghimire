import "./project-item.css"
import ReactPlayer from 'react-player';
import AboutItem from "../about/about-contents/AboutItem"
import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';


function ProjectItem({ name, url, desc, desc2, links, tools, shadow }) {

  return (
    <div className='project-item-container'>
      <h3 style={{ textAlign: "center" }}>
        <span style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}>
          {name}
        </span>
      </h3>
      <br />
      <div className="project-video">
        <ReactPlayer url={url} className="video"
          playing={true} muted={true}
          controls={true} />
      </div>
      <br />
      <div className="links">
        <AiOutlineLink size={40}
          // onClick={onLinkClick(links.live)}
          className="link-button" />
        <AiOutlineGithub size={40}
          // onClick={onLinkClick(links.git)}
          className="link-button" />
      </div>
      <div className="project-desc">
        <AboutItem desc={desc} desc2={desc2} />
      </div>
      <br />
      <div className='languages-used'>
        <h5 style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}>Tools Used:</h5>
        {tools.map((lan) => lan)}
      </div>
    </div>
  )
}

export default ProjectItem