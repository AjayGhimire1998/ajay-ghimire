import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./intro.css";
import cover from "../../images/cover.png";
import pin from "../../images/my-pictures/pin.png";
import ppvideo from "../../videos/PortfolioVideo.mp4";
import RotatingBorder from "./RotatingBorder";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function Intro() {
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
          playing={true}
          controls={true}
        />
      ) : (
        <div
          className="avatar"
          // style={
          //   {
              // backgroundImage: `url(${cover})`,
              // backgroundSize: "100% 100%",
          //   }
          // }
        >
          <LazyLoadImage
            src={cover}
            effect="blur"
            alt="From Slicing Sashimis to Slicing Arrays."
            className="avatar-back"
          />
          <div
            className="avatar-image"
            onMouseEnter={() => setProfileHover(true)}
          >
            <RotatingBorder />
          </div>
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
            <img src={pin} alt="location" />
            Sydney, Australia.
          </i>
        </span>
      </div>
    </div>
  );
}

export default Intro;
