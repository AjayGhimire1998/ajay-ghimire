import React from "react";
import "./myresume.css";
import myResume from "../../images/Resume_Ajay_Ghimire.pdf";
import useSound from "use-sound";
import click from "../../sounds/click.wav";

function MyResume({ shadow }) {
  const [play] = useSound(click);

  return (
    <>
      <div
        className="resume-container"
        style={{ boxShadow: `5px -5px 8px ${shadow}` }}
      >
        <iframe
          src={myResume + "#toolbar=0"}
          title="Ajay_Ghimire_Resume"
          className="my-resume"
        />
      </div>
      <br />
      
      <a
        href={myResume}
        className="nav-button"
        onClick={play}
        download="Resume_Ajay_Ghimire.pdf"
      >
        Download
      </a>
    </>
  );
}

export default MyResume;
