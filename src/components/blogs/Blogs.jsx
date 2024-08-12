import BlogItem from "./BlogItem";
import "./blogs.css";
import { blogsData } from "./blogs-data";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useCallback } from "react";

function Blogs({ play, hover }) {
  const [blogCount, setBlogCount] = useState(6);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const handleSelectCategory = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories((prev) => [...prev, category]);
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
    }
  };

  const handleResetAll = () => {
    setIsFilterOn(false);
    setSelectedCategories([]);
    setFilteredBlogs([]);
    setBlogCount(6);
  };
  const filterBlogs = useCallback(() => {
    const filtered = blogsData.filter((blog) => {
      return selectedCategories.some((cat) => blog.tag.includes(cat));
    });
    setFilteredBlogs(filtered);
  }, [selectedCategories]);

  useEffect(() => {
    filterBlogs();
  }, [filterBlogs]);

  const blogItem =
    selectedCategories.length === 0
      ? blogsData.map((blog) => {
          return (
            <BlogItem blog={blog} key={uuidv4()} play={play} hover={hover} />
          );
        })
      : filteredBlogs.map((blog) => {
          return (
            <BlogItem blog={blog} key={uuidv4()} play={play} hover={hover} />
          );
        });

  const blogCategories = blogsData.map((blog) => {
    return blog.tag.map((tag) => tag);
  });

  const uniqueCategories = Array.from(new Set(blogCategories.flat())).sort();
  // console.log(uniqueCategories);

  const onSeeMore = () => {
    setBlogCount(blogsData.length);
  };

  const onSeeLess = () => {
    setBlogCount(5);
  };

  //SEO


  return (
    <section>
      <div className="blogs-container">
        {/* Add SEO Metadata */}
        {/* <head>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <link rel="canonical" href={canonicalURL} />
        </head> */}
        <div className="page-head">
          <h1>Blogs</h1>
        </div>
        <section className="filter-wrapper">
          <div className="filter-button-wrapper">
            <div className="filter-button">
              <p>
                Filter: &nbsp;&nbsp;
                <small
                  onClick={() => setIsFilterOn(!isFilterOn)}
                  className="arrow"
                >
                  {isFilterOn ? "x" : ">"}
                </small>
              </p>
            </div>
            {selectedCategories.length > 0 ? (
              <div className="reset" onClick={handleResetAll}>
                <p>Reset &nbsp;</p>{" "}
                <svg
                  width="15px"
                  height="15px"
                  viewBox="0 0 21 21"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transform="matrix(0 1 1 0 2.5 2.5)"
                      strokeWidth="2"
                    >
                      {" "}
                      <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"></path>{" "}
                      <path
                        d="m4 1v4h-4"
                        transform="matrix(1 0 0 -1 0 6)"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            ) : null}
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
                        ? { backgroundColor: "#fdd612 ", color: "black " }
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
        {selectedCategories.length === 0
          ? blogItem.slice(0, blogCount)
          : blogItem}

        {selectedCategories.length === 0 ? (
          blogCount === 6 ? (
            <p onClick={onSeeMore}>See More</p>
          ) : (
            <p onClick={onSeeLess}>See Less</p>
          )
        ) : null}
      </div>
    </section>
  );
}

export default Blogs;
