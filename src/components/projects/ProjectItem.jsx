import "./project-item.css";
import ReactPlayer from "react-player";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projectNameHypen } from "./EachProjectItem";

function ProjectItem({ project, play }) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="project-item-card">
      <div className="video-player">
        <ReactPlayer
          url={project.url}
          playing={isPlaying}
          loop={true}
          muted={true}
          height="200px"
          width="380px"
          config={{
            youtube: {
              playerVars: {
                disablekb: 1,
                controls: 0,

                modestbranding: 1,
                fs: 0,
                showsearch: 0,
                rel: 0,
                iv_load_policy: 3,
                end: 10,
                playlist: project.videoId,
                loop: 1,
                origin: 'https://ajayghimire.com'
              },
            },
          }}
          onMouseEnter={() => setIsPlaying(true)}
          onMouseLeave={() => setIsPlaying(false)}
          alt={`Video player for project: ${project.name}`}
        />
      </div>
      <Link to={`/projects/${projectNameHypen(project.name)}`} style={{ textDecoration: "none" }}>
        <div className="card-contents" onClick={play}>
          <h2
            style={{
              textDecoration: "underline",
              color: `${isPlaying ? "#39ff14" : ""}`,
            }}
          >
            {project.name}
          </h2>
          <p>{project.desc}</p>
          <br />
        </div>
      </Link>
    </div>
  );
}

export default ProjectItem;
