import React from "react";
import "./about-item.css";

function Profile({ title, desc, image, isPreviewOn, onPreviewClick }) {
  return (
    <>
      {isPreviewOn ? (
        <div className="about-item-container">
          <div className="about-item preview-image-container">
            <img src={image} className="preview-image" alt="ajay" />
          </div>
          <div className="preview-reverse-container">
            <button className="preview-button reverse" onClick={onPreviewClick}>
              <span> &lt;</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="about-item-container">
          <div className="preview-button-container">
            <button className="preview-button" onClick={onPreviewClick}>
              <span> &gt;</span>{" "}
            </button>
          </div>
          <div className="about-item">
            <h3>
              <span>{title}</span>
            </h3>
            <p>{desc}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
