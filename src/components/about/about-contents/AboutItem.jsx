import React from "react";
import "./about-item.css";

function Profile({ title, desc, desc2, quote, image, isPreviewOn, onPreviewClick }) {
  return (
    <>
      {isPreviewOn ? (
        <div className="about-item-container">
          <div className="about-item preview-image-container">
            <img src={image} className="preview-image" alt="ajay" />
          </div>
          <div className="preview-reverse-container">
            <button className="preview-button reverse" onClick={onPreviewClick}>
              <span> &#8679;</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="about-item-container">
          <div className="preview-button-container">
            <button className="preview-button" onClick={onPreviewClick}>
              <span> &#8681; </span>
            </button>
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
