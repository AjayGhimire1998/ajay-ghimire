import React, { useState } from "react";
import "./blog-item.css";
import PopUp from "./PopUp";

function BlogItem({ blog, hover, play }) {
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isOpenClick = () => {
    setIsOpen(true);
    setIsHover(false);
  };
  return (
    <>
      <div
        className="blog-item-container"
        // onClick={() => window.open(`${blog.url}`, "_blank")}
        onClick={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="imgDiv">
          <img src={blog.profile} alt="pp" />
          <div className="desc">
            <p>Ajay Ghimire</p>
            <span> {blog.readTime + " " + "·" + " " + blog.datePossted} </span>
          </div>
        </div>

        <div className="tag">
          <span>{blog.tag}</span>
        </div>
        <br />
        <br />

        <h4>{blog.title}</h4>
        {isOpen ? (
          <PopUp blog={blog} play={play} hover={hover}/>
        ) : (
          <p>
            {blog.desc}
            <span
              // href={blog.url}
              // target="_blank"
              // rel="noreferrer"
              style={
                isHover
                  ? { color: "#39ff14", fontSize: "large" }
                  : { animation: "changeText 8s linear infinite" }
              }
              onMouseOver={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={isOpenClick}
            >
              Read More
            </span>
          </p>
        )}
      </div>
    </>
  );
}

export default BlogItem;
