import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


import './navbar.css';
function Navbar({ play, hover }) {
	const location = useLocation();
	const [currentPage, setCurrentPage] = useState('');
	const [pages, setPages] = useState(['About', 'Projects', 'Contents', 'Resume']);

	const playSound = () => {
		play();
	};
	const onLinkClick = (page) => {
		setCurrentPage(page);
		localStorage.setItem('current_page', JSON.stringify(page));
	};
	useEffect(() => {
		localStorage.setItem(
			'current_page',
			JSON.stringify(location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2))
		);
		setCurrentPage(JSON.parse(localStorage.getItem('current_page')));
	}, [location.pathname]);

	useEffect(() => {
		if (currentPage === '') {
			setPages(['About', 'Projects', 'Blogs', 'Resume']);
		}
		if (currentPage === 'About') {
			setPages(['Home', 'Projects', 'Blogs', 'Resume']);
		}
		if (currentPage === 'Projects') {
			setPages(['Home', 'About', 'Blogs', 'Resume']);
		}
		if (currentPage === 'Blogs') {
			setPages(['Home', 'About', 'Projects', 'Resume']);
		}
		if (currentPage === 'Resume') {
			setPages(['Home', 'About', 'Projects', 'Blogs']);
		}
	}, [currentPage]);

	return (
		<div className="nav-container">
			<div className="navbar">
				{pages.map((page, index) => {
					return (
						<Link
							to={page === 'Home' ? '' : `/${page.toLowerCase()}`}
							className="nav-button"
							onClick={() => {
								onLinkClick(page === 'Home' ? '' : page);
								playSound();
							}}
							onMouseOver={hover}
							key={index}
						>
							{page}
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Navbar;
