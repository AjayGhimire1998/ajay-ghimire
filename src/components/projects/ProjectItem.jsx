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
          light={true}
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
                origin: "https://ajayghimire.com",
              },
            },
          }}
          onMouseEnter={() => setIsPlaying(true)}
          onMouseLeave={() => setIsPlaying(false)}
          alt={`Video player for project: ${project.name}`}
        />
      </div>
      <Link
        to={`/projects/${projectNameHypen(project.name)}`}
        style={{ textDecoration: "none" }}
      >
        <div className="card-contents" onClick={play}>
          <h2
            style={{
              textDecoration: "underline",
              color: `${isPlaying ? "#39ff14" : ""}`,
            }}
          >
            {project.name}
            <svg
              version="1.1"
              width="25px"
              height="25px"
              viewBox="0,0,256,256"
              className="click-link"
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                // style="mix-blend-mode: normal"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M21,2c-4.40625,0 -8,3.59375 -8,8c0,2.95313 1.60938,5.52344 4,6.90625v15.4375l-5.15625,-5.1875c-1.55469,-1.55469 -4.10156,-1.55469 -5.65625,0c-1.55469,1.55469 -1.55469,4.10156 0,5.65625l11.34375,11.375c2.4375,2.4375 5.74219,3.8125 9.1875,3.8125h7.28125c4.95703,0 9,-4.04297 9,-9v-13c0,-2.19922 -1.80078,-4 -4,-4c-0.83203,0 -1.60547,0.24609 -2.25,0.6875c-0.54687,-1.55859 -2.01172,-2.6875 -3.75,-2.6875c-0.98828,0 -1.86328,0.39844 -2.5625,1c-0.69531,-1.18359 -1.97266,-2 -3.4375,-2c-0.73437,0 -1.40625,0.21484 -2,0.5625v-2.65625c2.39063,-1.38281 4,-3.95312 4,-6.90625c0,-4.40625 -3.59375,-8 -8,-8zM21,4c3.32422,0 6,2.67578 6,6c0,1.78125 -0.76953,3.375 -2,4.46875v-4.46875c0,-2.19922 -1.80078,-4 -4,-4c-2.19922,0 -4,1.80078 -4,4v4.46875c-1.23047,-1.09375 -2,-2.68359 -2,-4.46875c0,-3.32422 2.67578,-6 6,-6zM21,8c1.11719,0 2,0.88281 2,2v6.1875c-0.01562,0.10547 -0.01562,0.20703 0,0.3125v8.5c-0.00781,0.30859 0.12891,0.60156 0.36719,0.79688c0.23438,0.19531 0.55078,0.26953 0.85156,0.20313c0.10156,-0.02734 0.19531,-0.07031 0.28125,-0.125c0.01953,-0.00781 0.04297,-0.01953 0.0625,-0.03125c0.05859,-0.04687 0.10938,-0.09766 0.15625,-0.15625c0.17969,-0.18359 0.27734,-0.42969 0.28125,-0.6875v-2c0,-1.11719 0.88281,-2 2,-2c1.11719,0 2,0.88281 2,2v2c0.00391,0.0625 0.01563,0.125 0.03125,0.1875c0.01563,0.09766 0.04688,0.19141 0.09375,0.28125c0.03906,0.08984 0.09375,0.17578 0.15625,0.25c0.04688,0.04688 0.10156,0.08984 0.15625,0.125c0.03125,0.02344 0.0625,0.04297 0.09375,0.0625c0.08984,0.04688 0.18359,0.07813 0.28125,0.09375c0.13281,0.02734 0.27344,0.02734 0.40625,0c0.10156,-0.02734 0.19531,-0.07031 0.28125,-0.125c0.01953,-0.00781 0.04297,-0.01953 0.0625,-0.03125c0.05859,-0.04687 0.10938,-0.09766 0.15625,-0.15625c0.17969,-0.18359 0.27734,-0.42969 0.28125,-0.6875v-1c0,-1.11719 0.88281,-2 2,-2c1.11719,0 2,0.88281 2,2v2c0,0.03125 0,0.0625 0,0.09375v0.90625c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-0.84375c0.00391,-0.05078 0.00391,-0.10547 0,-0.15625c0,-1.11719 0.88281,-2 2,-2c1.11719,0 2,0.88281 2,2v13c0,3.87891 -3.12109,7 -7,7h-7.28125c-2.91797,0 -5.71875,-1.15625 -7.78125,-3.21875l-11.34375,-11.375c-0.78906,-0.78906 -0.78906,-2.02344 0,-2.8125c0.78906,-0.78906 2.02344,-0.78906 2.8125,0l6.75,6.71875c0.03516,0.05469 0.07813,0.10938 0.125,0.15625c0.01953,0.02344 0.03906,0.04297 0.0625,0.0625c0.13281,0.11328 0.29688,0.1875 0.46875,0.21875c0.13281,0.02734 0.27344,0.02734 0.40625,0c0.0625,-0.01562 0.12891,-0.03516 0.1875,-0.0625c0.03125,-0.01953 0.0625,-0.03906 0.09375,-0.0625c0.28516,-0.16406 0.47266,-0.45312 0.5,-0.78125c0,-0.01172 0,-0.01953 0,-0.03125c0,-0.01953 0,-0.04297 0,-0.0625c0.00391,-0.04297 0.00391,-0.08203 0,-0.125v-18.1875c0.01563,-0.10547 0.01563,-0.20703 0,-0.3125v-6.125c0,-1.11719 0.88281,-2 2,-2z"></path>
                </g>
              </g>
            </svg>
          </h2>
          <p>{project.desc} </p>
          <br />
        </div>
      </Link>
    </div>
  );
}

export default ProjectItem;
