import React from 'react';
import './about-item.css';
import { BsImages } from 'react-icons/bs';
import { CgReadme } from 'react-icons/cg';

function Profile({
	title,
	desc,
	desc2,
	quote,
	image,
	isPreviewOn,
	onPreviewClick,
	imageCount,
	onPrevImageClick,
	onNextImageClick,
	shadow,
}) {
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
						<p>{desc}</p>
						<p>{desc2}</p>
					</div>
					<br />
					{image ? (
						<div className="preview-button-container">
							<svg
								fill="white"
								viewBox="0 0 16 16"
								height="30px"
								width="30px"
								className="preview-button"
								onClick={onPreviewClick}
							>
								<path d="M4.502 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
								<path d="M14.002 13a2 2 0 01-2 2h-10a2 2 0 01-2-2V5A2 2 0 012 3a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-1.998 2zM14 2H4a1 1 0 00-1 1h9.002a2 2 0 012 2v7A1 1 0 0015 11V3a1 1 0 00-1-1zM2.002 4a1 1 0 00-1 1v8l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71a.5.5 0 01.577-.094l1.777 1.947V5a1 1 0 00-1-1h-10z" />
							</svg>
						</div>
					) : null}
				</div>
			)}
		</>
	);
}

export default Profile;
