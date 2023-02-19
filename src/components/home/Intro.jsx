import React from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import "./intro.css";
import ajay from "../../images/my-pictures/profile_pic.png";
import cover from "../../images/cover.png";
import pin from "../../images/my-pictures/pin.png";
import ppvideo from "../../videos/PortfolioVideo.mp4"

function Intro({ play }) {
  const navigate = useNavigate();
//   const [profileHover, set]
  function goToAbout() {
    play();
    navigate("/about");
  }

  function playProfileVideo() {
    return (
      <ReactPlayer
        // url="../../videos/PortfolioVideo.mp4"
        width="100%"
        height="100%"
        controls={true}
      />
    );
  }

  return (
    <div className="intro-container">
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
          onClick={goToAbout}
    
        />
      </div>
	  <ReactPlayer
        url={ppvideo}
        width="100%"
        height="100%"
        controls={true}
      />
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
