import Blogs from "../../components/blogs/Blogs";
import "./blog.css";


function Blog({ play, hover}) {
  return (
    <section className="blog">
        <Blogs play={play} hover={hover}/>
    </section>
  )
}

export default Blog