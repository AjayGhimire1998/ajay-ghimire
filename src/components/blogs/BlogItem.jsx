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

  const closeModal = () => {
    setIsOpen(false);
  };

  const blogReadAndDatea = `${blog.readTime} ${"·"} ${blog.datePossted}`;

  return (
    <section>
      <div className="blog-item-container" onMouseLeave={closeModal}>
        <div className="imgDiv">
          <img
            src={blog.profile}
            alt="profile pics from blogs posting platform"
          />
          <div className="desc">
            <p>Ajay Ghimire</p>
            <time dateTime={blog.datePossted}> {blogReadAndDatea} </time>
          </div>
        </div>
        {blog.tag.map((tg, index) => {
          return (
            <div className="tag" key={index}>
              <span>{tg}</span>{" "}
            </div>
          );
        })}
        <br />
        <br />
        <h2>{blog.title}</h2>
        {isOpen ? (
          <PopUp
            blog={blog}
            play={play}
            hover={hover}
            isOpen={isOpen}
            closeModal={closeModal}
          />
        ) : (
          <p>
            {blog.desc}
            <span
              style={
                isHover
                  ? { color: "white", cursor: "pointer" }
                  : { color: "#fdd612" }
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
      {/* </div> */}
    </section>
  );
}

export default BlogItem;
