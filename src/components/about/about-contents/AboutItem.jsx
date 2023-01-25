import React from 'react';
import './about-item.css';
import { IoIosImages } from 'react-icons/io';
import { CgReadme } from 'react-icons/cg';
import { useState } from 'react';

function Profile({ title, desc, desc2, quote, image, isPreviewOn, onPreviewClick, shadow, hover }) {
	const [imageCount, setImageCount] = useState(0);
	const onPrevImageClick = () => {
		hover();
		setImageCount(imageCount - 1);
	};

	const onNextImageClick = () => {
		hover();
		setImageCount(imageCount + 1);
	};
	return (
		<>
			{isPreviewOn ? (
				<div className="about-item-container">
					<div className="about-item preview-image-container">
						<div className="next-image">
							{imageCount > 0 && (
								<span className="lt" onClick={onPrevImageClick}>
									&lt;
								</span>
							)}
							{(imageCount === 0 || imageCount < image.length - 1) && (
								<span className="gt " onClick={onNextImageClick}>
									&gt;
								</span>
							)}
							<img src={image[imageCount]} className="preview-image" alt="ajay" />
						</div>
					</div>
					<br />
					<div className="preview-reverse-container">
						<CgReadme size="30px" className="preview-button" onClick={onPreviewClick} />
					</div>
				</div>
			) : (
				<div className="about-item-container">
					<div className="about-item">
						<h3>
							<span style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}>{title}</span>
						</h3>
						<p>
							<i>{quote}</i>
						</p>
						<p>{desc}</p>
						<p>{desc2}</p>
					</div>
					<br />
					{image ? (
						<div className="preview-button-container">
							<IoIosImages size="30px" className="preview-button" onClick={onPreviewClick} />
						</div>
					) : null}
				</div>
			)}
		</>
	);
}

export default Profile;
