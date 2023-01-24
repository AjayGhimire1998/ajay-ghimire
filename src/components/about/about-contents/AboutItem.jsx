import React from 'react';
import './about-item.css';
import { HiArrowCircleDown, HiArrowCircleUp } from 'react-icons/hi';

function Profile({ title, desc, desc2, quote, image, isPreviewOn, onPreviewClick, shadow, hover }) {
	return (
		<>
			{isPreviewOn ? (
				<div className="about-item-container">
					<div className="about-item preview-image-container">
						<div className="next-image">
							<span className="lt">&lt;</span>
							<span className="gt">&gt;</span>
							<img src={image} className="preview-image" alt="ajay" />
						</div>
					</div>
					<div className="preview-reverse-container">
						<HiArrowCircleUp
							size="30px"
							className="preview-button"
							onClick={onPreviewClick}
							onMouseOver={hover}
						/>
					</div>
				</div>
			) : (
				<div className="about-item-container">
					{image ? (
						<div className="preview-button-container">
							<HiArrowCircleDown
								size="30px"
								className="preview-button"
								onClick={onPreviewClick}
								onMouseOver={hover}
							/>
						</div>
					) : null}
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
				</div>
			)}
		</>
	);
}

export default Profile;
