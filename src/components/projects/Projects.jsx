import "./projects.css";
import { videoLinks } from "./projects-data";
import ProjectItem from "./ProjectItem";

function Projects({ play }) {
  const projects = videoLinks.map((project, index) => {
    return <ProjectItem project={project} play={play} key={index} />;
  });
  return (
    <div className="projects-container">
      <div className="page-title">
        <h3>
          <span>Personal Projects</span>
        </h3>
      </div>
      <div className="projects">{projects}</div>
    </div>
  );
}

export default Projects;
