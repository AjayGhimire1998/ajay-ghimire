import Blogs from "../../components/blogs/Blogs";
import "./blog.css";


function Blog({ play, hover}) {
  return (
    <div className="blog">
        <Blogs play={play} hover={hover}/>
    </div>
  )
}

export default Blog