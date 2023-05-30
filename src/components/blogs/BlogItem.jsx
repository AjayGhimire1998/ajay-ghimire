import React, { useEffect, useState, useCallback } from "react";
import "./blog-item.css";
import PopUp from "./PopUp";

function BlogItem({ blog, hover, play }) {
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isOpenClick = () => {
    setIsOpen(true);
    setIsHover(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <>
      <div
        className="blog-item-container"
        onMouseLeave={closeModal}
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
          <PopUp
            blog={blog}
            play={play}
            hover={hover}
            isOpen = {isOpen}
            closeModal = {closeModal}
          />
        ) : (
          <p>
            {blog.desc}
            <span
              style={
                isHover
                  ? { color: "#39ff14", fontSize: "large", cursor: "pointer" }
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
