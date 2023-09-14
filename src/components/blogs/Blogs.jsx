import BlogItem from "./BlogItem";
import "./blogs.css";
import { blogsData } from "./blogs-data";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

function Blogs({ play, hover }) {
  const [blogCount, setBlogCount] = useState(5);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isFilterOn, setIsFilterOn] = useState(false);

  const handleSelectCategory = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories((prev) => [...prev, category]);
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
    }
  };

  useEffect(() => {
    console.log(selectedCategories);
  }, [selectedCategories]);

  const blogItem = blogsData.map((blog) => {
    return <BlogItem blog={blog} key={uuidv4()} play={play} hover={hover} />;
  });

  const blogCategories = blogsData.map((blog) => {
    return blog.tag.map((tag) => tag);
  });

  const uniqueCategories = Array.from(new Set(blogCategories.flat())).sort();
  console.log(uniqueCategories);

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
        <section className="filter-wrapper">
          <div className="filter-button">
            <p>
              Filter &nbsp;&nbsp;
              {!isFilterOn ? (
                <i
                  className="arrow-down"
                  onClick={() => setIsFilterOn(!isFilterOn)}
                ></i>
              ) : (
                <small onClick={() => setIsFilterOn(!isFilterOn)} className="close">x</small>
              )}
            </p>
          </div>
          <br />
          {isFilterOn ? (
            <div className="filter-categories">
              {uniqueCategories.map((cat, index) => {
                return (
                  <div
                    className="category"
                    key={index}
                    onClick={() => handleSelectCategory(cat)}
                    style={
                      selectedCategories?.includes(cat)
                        ? { backgroundColor: "white ", color: "black " }
                        : { backgroundColor: "black ", color: "white " }
                    }
                  >
                    {cat}
                  </div>
                );
              })}
            </div>
          ) : null}
        </section>
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
