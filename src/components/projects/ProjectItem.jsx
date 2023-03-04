import "./project-item.css";
import ReactPlayer from "react-player";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProjectItem({ project, hover, play }) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="project-item-card">
      <ReactPlayer
        url={project.url}
        className="video-player"
        playing={isPlaying}
        loop={true}
        muted={true}
        height="200px"
        width="300px"
        config={{
          youtube: {
            playerVars: {
              disablekb: 1,
              controls: 0,
              rel: 0,
              modestbranding: 1,
              fs: 0,
              showsearch: 0,
              rel: 0,
              iv_load_policy: 3,
              end: 10,
              playlist: project.videoId,
              loop: 1,
            },
          },
        }}
        onMouseEnter={() => setIsPlaying(true)}
        onMouseLeave={() => setIsPlaying(false)}
      />
      <Link to={`/projects/${project.name}`} style={{ textDecoration: "none" }}>
        <div className="card-contents" onMouseOver={hover} onClick={play}>
          <h4
            style={{
              textDecoration: "underline",
              color: `${isPlaying ? "#39ff14" : "white"}`,
            }}
          >
            {project.name}
          </h4>
          <span>{project.desc}</span>
          <br />
        </div>
      </Link>
    </div>
  );
}

export default ProjectItem;
