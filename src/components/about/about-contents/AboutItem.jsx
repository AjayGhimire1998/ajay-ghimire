import React from "react";
import "./about-item.css";
import { HiArrowCircleDown, HiArrowCircleUp } from "react-icons/hi";

function Profile({
  title,
  desc,
  desc2,
  quote,
  image,
  isPreviewOn,
  onPreviewClick,
  play,
  hover,
}) {
  return (
    <>
      {isPreviewOn ? (
        <div className="about-item-container">
          <div className="about-item preview-image-container">
            <img src={image} className="preview-image" alt="ajay" />
          </div>
          <div className="preview-reverse-container">
          <HiArrowCircleUp
              size="30px"
              className="preview-button"
              onClick={onPreviewClick}
              onMouseOver={hover}
            />
          </div>
        </div>
      ) : (
        <div className="about-item-container">
          <div className="preview-button-container">
            <HiArrowCircleDown
              size="30px"
              className="preview-button"
              onClick={onPreviewClick}
              onMouseOver={hover}
            />
          </div>
          <div className="about-item">
            <h3>
              <span>{title}</span>
            </h3>
            <p>
              <i>{quote}</i>
            </p>
            <p>{desc}</p>
            <p>{desc2}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
