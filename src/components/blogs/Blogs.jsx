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
	return (
		<div className="blogs-container">
			{blogItem.slice(0, blogCount)}
			<p
				onClick={
					blogCount === 4
						? onSeeMore
						: () => {
								setBlogCount(4);
						  }
				}
			>
				See More
			</p>
		</div>
	);
}

export default Blogs;
