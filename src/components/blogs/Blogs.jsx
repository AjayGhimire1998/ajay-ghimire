import BlogItem from './BlogItem';
import './blogs.css';
import { blogsData } from './blogs-data';
import { useState } from 'react';

function Blogs() {
	const [blogCount, setBlogCount] = useState(4);
	const blogItem = blogsData.map((blog) => {
		return <BlogItem blog={blog} />;
	});

	const onSeeMore = () => {
		setBlogCount(blogItem.length);
	};

	const onSeeLess = () => {
		setBlogCount(4);
	};
	return (
		<div className="blogs-container">
			{blogItem.slice(0, blogCount)}
			{blogCount === 4 ? <p onClick={onSeeMore}>View More</p> : <p onClick={onSeeLess}>View Less</p>}
		</div>
	);
}

export default Blogs;
