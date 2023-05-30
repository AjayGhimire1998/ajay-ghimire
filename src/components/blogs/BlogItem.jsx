import React, {useState} from "react";
import "./blog-item.css";

function BlogItem({ blog, shadow }) {
  const [hover, setHover] = useState(false);
  const onHover = () =>{
    setHover(true);
  }
  
  return (
    <div
      className="blog-item-container"
      onClick={() => window.open(`${blog.url}`, "_blank")}
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
      <p>
        {blog.desc}
        <a
          href={blog.url}
          target="_blank"
          rel="noreferrer"
          style={ hover ? { color: "#39ff14", fontSize: "large" } : {color: `${shadow}`}}
          onMouseOver={onHover}
        >
          Read More
        </a>
      </p>
    </div>
  );
}

export default BlogItem;
