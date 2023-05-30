import Blogs from "../../components/blogs/Blogs";
import "./blog.css";


function Blog({shadow}) {
  return (
    <div className="blog">
        <Blogs shadow= {shadow}/>
    </div>
  )
}

export default Blog