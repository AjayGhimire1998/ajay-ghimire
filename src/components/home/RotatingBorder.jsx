import React from "react";
import "./rotating-border.css";
import ajay from "../../images/my-pictures/profile_pic.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function RotatingBorder() {
  return (
    <div className="rainbow">
      <LazyLoadImage
        src={ajay}
        alt="LinkedIn Profile Picture"
        className="roat"
        effect="blur"
      />
    </div>
  );
}

export default RotatingBorder;
