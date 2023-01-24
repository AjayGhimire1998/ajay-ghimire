import BlogItem from "./BlogItem";
import "./blogs.css";
import { blogsData } from "./blogs-data";

function Blogs() {

  const blogItem = blogsData.map((blog) => {
    return <BlogItem blog={blog}/>
  })
  return (
    <div className="blogs-container">
        {blogItem}
    </div>
  )
}

export default Blogs