import React, { useEffect, useState } from 'react';
import './about-me.css';
import { aboutData } from './aboutData.js';
import AboutItem from './about-contents/AboutItem';
import profile from '../../images/my-pictures/profile.jpeg';
import background from '../../images/my-pictures/chocho.JPG';
import academyXi from '../../images/my-pictures/academyXi.png';
import FromTo from './about-contents/FromTo';
import { edu, exp } from './about-contents/eduExp';
import Skills from './about-contents/Skills';

function AboutMe({ shadow, play, hover }) {
	const [pageCount, setPageCount] = useState(0);
	const [isPreviewOn, setIsPreviewOn] = useState(false);

	const onPreviewClick = () => {
		hover();
		setIsPreviewOn(!isPreviewOn);
	};

	const onPrevImageClick = () => {
		hover();
	};

	const pages = [
		<AboutItem
			title={aboutData[0].title}
			desc={aboutData[0].desc}
			desc2={aboutData[0].desc2}
			image={profile}
			isPreviewOn={isPreviewOn}
			onPreviewClick={onPreviewClick}
			onPrevImageClick={onPrevImageClick}
			shadow={shadow}
		/>,
		<AboutItem
			title={aboutData[1].title}
			desc={aboutData[1].desc}
			desc2={aboutData[1].desc2}
			quote="“I have gone from slicing sashimis to slicing arrays”"
			image={background}
			isPreviewOn={isPreviewOn}
			onPreviewClick={onPreviewClick}
			onPrevImageClick={onPrevImageClick}
			shadow={shadow}
		/>,
		<AboutItem
			title={aboutData[2].title}
			desc={aboutData[2].desc}
			desc2={aboutData[2].desc2}
			image={academyXi}
			isPreviewOn={isPreviewOn}
			onPreviewClick={onPreviewClick}
			// hover={hover}
			shadow={shadow}
		/>,
		<Skills shadow={shadow} />,
		<FromTo edu={edu} exp={exp} shadow={shadow} />,
	];

	const onNextClick = () => {
		play();
		setPageCount(pageCount + 1);
		localStorage.setItem('about_page_count', JSON.stringify(pageCount + 1));
		setIsPreviewOn(false);
	};

	const onPrevClick = () => {
		play();
		setPageCount(pageCount - 1);
		localStorage.setItem('about_page_count', JSON.stringify(pageCount - 1));
		setIsPreviewOn(false);
	};

	useEffect(() => {
		setPageCount(JSON.parse(localStorage.getItem('about_page_count')) || 0);
	}, []);

	return (
		<>
			<div className="about-container">
				{pages[pageCount]}
				<br />
				<div className="about-buttons">
					<button
						className="nav-button previous"
						onMouseOver={hover}
						onClick={onPrevClick}
						disabled={pageCount === 0}
					>
						Previous
					</button>
					<button
						className="nav-button next"
						onMouseOver={hover}
						onClick={onNextClick}
						disabled={pageCount === pages.length - 1}
					>
						Next
					</button>
				</div>
			</div>
		</>
	);
}

export default AboutMe;
