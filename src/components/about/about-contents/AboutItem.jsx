import React, { useState } from "react";
import "./about-item.css";

function Profile({ title, desc, image }) {
  const [isPreviewOn, setIsPreviewOn] = useState(false);

  const onPreviewClick = () => {
    setIsPreviewOn(!isPreviewOn);
  };

  return (
    <>
      {isPreviewOn ? (
        <div className="about-item-container">
          <div className="about-item">
            <img src={image} className="preview-image" alt="ajay" />
          </div>
          <button className="preview-reverse" onClick={onPreviewClick}>
            <span> &lt;</span>
          </button>
        </div>
      ) : (
        <div className="about-item-container">
          <button className="preview" onClick={onPreviewClick}>
            <span> &gt;</span>{" "}
          </button>
          <div className="about-item">
            <h3>
              <span>{title}</span>
            </h3>
            <p>{desc}</p>
            {/* <img
          src={image}
          style={{
            imageRendering: " crisp-edges",
            height: "200px",
            width: "300px",
          }}
          alt="ajay"
        /> */}
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
