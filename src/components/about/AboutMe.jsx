import React, { useEffect, useState } from 'react';
import './about-me.css';
import { aboutData } from './aboutData.js';
import AboutItem from './about-contents/AboutItem';
import FromTo from './about-contents/FromTo';
import { edu, exp } from './about-contents/eduExp';
import Skills from './about-contents/Skills';
import { Tooltip } from 'react-tooltip';

function AboutMe({ play, hover }) {
	const [pageCount, setPageCount] = useState(0);
	const [isPreviewOn, setIsPreviewOn] = useState(false);
	const [imageCount, setImageCount] = useState(0);

	const onPreviewClick = () => {
		hover();
		setIsPreviewOn(!isPreviewOn);
	};

	const onPrevImageClick = () => {
		hover();
		setImageCount(imageCount - 1);
	};

	const onNextImageClick = () => {
		hover();
		setImageCount(imageCount + 1);
	};

	const pages = [
		<AboutItem
			title={aboutData[0].title}
			desc={aboutData[0].desc}
			desc2={aboutData[0].desc2}
			image={aboutData[0].images}
			isPreviewOn={isPreviewOn}
			onPreviewClick={onPreviewClick}
			imageCount={imageCount}
			onPrevImageClick={onPrevImageClick}
			onNextImageClick={onNextImageClick}
			
		/>,
		<AboutItem
			title={aboutData[1].title}
			desc={aboutData[1].desc}
			desc2={aboutData[1].desc2}
			image={aboutData[1].images}
			isPreviewOn={isPreviewOn}
			onPreviewClick={onPreviewClick}
			imageCount={imageCount}
			onPrevImageClick={onPrevImageClick}
			onNextImageClick={onNextImageClick}
			
		/>,
		<AboutItem
			title={aboutData[2].title}
			desc={aboutData[2].desc}
			desc2={aboutData[2].desc2}
			image={aboutData[2].images}
			isPreviewOn={isPreviewOn}
			onPreviewClick={onPreviewClick}
			imageCount={imageCount}
			onPrevImageClick={onPrevImageClick}
			onNextImageClick={onNextImageClick}
			
		/>,
		<Skills/>,
		<FromTo edu={edu} exp={exp}  />,
	];

	const onNextClick = () => {
		play();
		setPageCount(pageCount + 1);
		localStorage.setItem('about_page_count', JSON.stringify(pageCount + 1));
		setIsPreviewOn(false);
		setImageCount(0);
	};

	const onPrevClick = () => {
		play();
		setPageCount(pageCount - 1);
		localStorage.setItem('about_page_count', JSON.stringify(pageCount - 1));
		setIsPreviewOn(false);
		setImageCount(0);
	};

	useEffect(() => {
		setPageCount(JSON.parse(localStorage.getItem('about_page_count')) || 0);
	}, []);

	const toolTipStyle = {
		height: '10px',
		width: 'auto',
		fontSize: '12px',
	};

	return (
		<>
			<div className="about-container">
				{pages[pageCount]}
				<br />
				<div className="about-buttons">
					<button
						className="nav-button previous"
						id="prevAbout"
						data-tooltip-content={
							aboutData[pageCount - 1]?.title || (pageCount === 4 ? 'Technical Skills' : '')
						}
						data-tooltip-place="bottom"
						onMouseOver={hover}
						onClick={onPrevClick}
						disabled={pageCount === 0}
					>
						Previous
					</button>
					<Tooltip anchorId="prevAbout" style={toolTipStyle} />
					<button
						className="nav-button next"
						id="nextAbout"
						data-tooltip-content={
							aboutData[pageCount + 1]?.title ||
							(pageCount === 2 ? 'Technical Skills' : pageCount === 3 ? 'Timeline' : '')
						}
						data-tooltip-place="bottom"
						onMouseOver={hover}
						onClick={onNextClick}
						disabled={pageCount === pages.length - 1}
					>
						Next
					</button>
					<Tooltip anchorId="nextAbout" style={toolTipStyle} />
				</div>
			</div>
		</>
	);
}

export default AboutMe;
