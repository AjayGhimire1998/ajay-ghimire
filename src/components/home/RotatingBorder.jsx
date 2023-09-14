import React from "react";
import "./rotating-border.css";
import ajay from "../../images/my-pictures/profile_pic.png";
import ajay_lite from "../../images/my-pictures/profile_pic_lite.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function RotatingBorder() {
  return (
    <section className="rainbow">
      <LazyLoadImage
        src={ajay}
        placeholderSrc={ajay_lite}
        alt="Ajay Ghimire - Software Developer Profile Picture for LinkedIn"
        className="roat"
        effect="blur"
      />
    </section>
  );
}

export default RotatingBorder;
