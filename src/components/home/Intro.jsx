import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./intro.css";
import ajay from "../../images/my-pictures/profile_pic.png";
import cover from "../../images/cover.png";
import pin from "../../images/my-pictures/pin.png";
import ppvideo from "../../videos/PortfolioVideo.mp4";

function Intro({ shadow }) {
  const [profileHover, setProfileHover] = useState(false);

  return (
    <div
      className="intro-container"
      onMouseLeave={() => setProfileHover(false)}
    >
      {profileHover ? (
        <ReactPlayer
          url={ppvideo}
          width="100%"
          height="100%"
          controls={false}
          playing={true}
		  playsinline
        />
      ) : (
        <div
          className="avatar"
          style={{
            backgroundImage: `url(${cover})`,
            backgroundSize: "100% 100%",
          }}
        >
          <img
            src={ajay}
            alt="avatar"
            className="avatar-image"
            onMouseEnter={() => setProfileHover(true)}
			style={{ filter: `drop-shadow(0px 0px 10px ${shadow})`, border: `2px solid ${shadow}` }}
          />
        </div>
      )}
      <div className="contents">
        <p>I am</p>
        <div>
          <strong>Ajay Ghimire.</strong>
        </div>
        <br />
        <span>Full Stack Software Developer </span>
        <br />
        <br />
        <span>
          <i>
            <img src={pin} alt="pin" />
            Sydney, Australia.
          </i>
        </span>
      </div>
      <br />
    </div>
  );
}

export default Intro;
