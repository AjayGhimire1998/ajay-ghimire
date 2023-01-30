import React from 'react';
import './intro.css';
import ajay from '../../images/my-pictures/ajay1.jpeg';
function Intro({ shadow }) {
	return (
		<div className="intro-container">
			<div className="avatar" style={{ backgroundImage: `url(${ajay})` }}>
				<img src={ajay} alt="avatar" className="avatar-image" />
			</div>
			{/* <br /> */}
			<p>I am</p>
			<br />
			<div style={{ filter: `drop-shadow(5px -5px 7px ${shadow})` }}>
				<strong>Ajay Ghimire</strong>
			</div>
			<br />
			<p>a </p>
			<span>Full Stack Software Developer </span>
			<p> from </p>
			<span>
				<i> Sydney, Australia.</i>
			</span>
			<br />
		</div>
	);
}

export default Intro;
