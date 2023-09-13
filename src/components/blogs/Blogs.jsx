import BlogItem from "./BlogItem";
import "./blogs.css";
import { blogsData } from "./blogs-data";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Blogs({ play, hover }) {
  const [blogCount, setBlogCount] = useState(5);

  const blogItem = blogsData.map((blog) => {
    return <BlogItem blog={blog} key={uuidv4()} play={play} hover={hover} />;
  });

  const onSeeMore = () => {
    setBlogCount(blogsData.length);
  };

  const onSeeLess = () => {
    setBlogCount(5);
  };
  return (
    <>
      <div className="blogs-container">
        <div className="page-head">
          <h3>Blogs</h3>
        </div>
        <div className="filter-wrapper">
          <div className="filter-button">
            <p>
              Filter <i class="arrow-down"></i>
            </p>
          </div>
        </div>
        {blogItem.slice(0, blogCount)}

        {blogCount === 5 ? (
          <p onClick={onSeeMore}>See More</p>
        ) : (
          <p onClick={onSeeLess}>See Less</p>
        )}
      </div>
    </>
  );
}

export default Blogs;
