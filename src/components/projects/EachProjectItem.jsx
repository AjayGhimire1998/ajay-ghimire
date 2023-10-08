import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./each-project-item.css";
import ReactPlayer from "react-player";
import AboutItem from "../about/about-contents/AboutItem";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import { videoLinks } from "./projects-data";
import { Tooltip } from "react-tooltip";

export const projectNameHypen = (projectName) => {
  let result = "";
  for (let i = 0; i <= projectName.length - 1; i++) {
    if (projectName.charCodeAt(i) < 97) {
      result += "-" + projectName.charAt(i);
    } else {
      result = result + projectName.charAt(i);
    }
  }
  // console.log(result.slice(1));
  return result.slice(1).toLowerCase();
};
function EachProjectItem({ hover, play }) {
  const navigate = useNavigate();
  const { name } = useParams();
  const [project, setProject] = useState(
    videoLinks.find((vid) => projectNameHypen(vid.name) === name)
  );
  const [indexOfProject, setIndexOfProject] = useState(
    videoLinks.indexOf(project)
  );

  const onLinkClick = (link) => {
    play();
    window.open(link, "_blank");
  };

  const onPrevClick = () => {
    play();
    setIndexOfProject(indexOfProject - 1);
    navigate(`/projects/${projectNameHypen(videoLinks[indexOfProject - 1].name)}`);
  };

  const onNextClick = () => {
    play();
    setIndexOfProject(indexOfProject + 1);
    navigate(`/projects/${projectNameHypen(videoLinks[indexOfProject + 1].name)}`);
  };

  useEffect(() => {
    setProject(
      videoLinks.find((vid) => projectNameHypen(vid.name) === name)
    );
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [name]);

  const toolTipStyle = {
    height: "10px",
    width: "auto",
    fontSize: "12px",
  };

  return (
    <div className="project-item-container">
      <br />
      <h1 style={{ textAlign: "center" }}>{project.name}</h1>
      <div className="project-video">
        <ReactPlayer
          url={project.url}
          className="video"
          playing={true}
          muted={true}
          controls={true}
        />
      </div>
      <br />
      <div className="links">
        {project.links.live && (
          <div className="live link-button">
            <AiOutlineLink
              size={45}
              onClick={() => {
                onLinkClick(project.links.live);
              }}
              //   className="link-button"
            />
            <small>
              <span
                style={{ textDecoration: "underline" }}
                onClick={() => {
                  onLinkClick(project.links.live);
                }}
              >
                Demo
              </span>
            </small>
          </div>
        )}
        <div className="git link-button">
          <a
            href={project.links.git}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onLinkClick(project.links.git)}
          >
            <AiOutlineGithub size={45} />
            <span style={{ textDecoration: "underline" }}>Source</span>
          </a>
        </div>
      </div>
      <div className="project-desc">
        <AboutItem desc={project.desc} desc2={project.desc2} />
      </div>
      <br />
      <h4 style={{ textAlign: "center" }}>Tools Used:</h4>
      <div className="tools-used">
        {project.tools.map((lan, index) => (
          <span key={index}>{lan}</span>
        ))}
      </div>
      <br />
      <div className="about-buttons" style={{ width: "100%" }}>
        <button
          className="nav-button previous"
          id="prevProject"
          data-tooltip-content={videoLinks[indexOfProject - 1]?.name}
          data-tooltip-place="bottom"
          onMouseOver={hover}
          onClick={onPrevClick}
          disabled={indexOfProject === 0}
          aria-label="Previous Project"
        >
          Previous
        </button>
        <Tooltip anchorId="prevProject" style={toolTipStyle} />
        <button
          className="nav-button next"
          id="nextProject"
          data-tooltip-content={videoLinks[indexOfProject + 1]?.name}
          data-tooltip-place="bottom"
          onMouseOver={hover}
          onClick={onNextClick}
          disabled={indexOfProject === videoLinks.length - 1}
          aria-label="Next Project"
        >
          Next
        </button>
        <Tooltip anchorId="nextProject" style={toolTipStyle} />
      </div>
      <br />
    </div>
  );
}

export default EachProjectItem;
