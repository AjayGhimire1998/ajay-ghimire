import React from 'react';
import './intro.css';
import ajay from '../../images/my-pictures/ajay1.jpeg';
function Intro({ shadow }) {
	return (
		<div className="intro-container" style={{ filter: `drop-shadow(2px -2px 4px ${shadow})` }}>
			<div className="avatar" style={{ backgroundImage: `url(${ajay})` }}>
				<img src={ajay} alt="avatar" className="avatar-image" />
			</div>
			<div className='contents'>
				<p>I am</p>
				<br />
				<div>
					<strong>Ajay Ghimire</strong>
				</div>
				<br />
				<p>a </p>
				<span>Full Stack Software Developer </span>
				<p> from </p>
				<span>
					<i> Sydney, Australia.</i>
				</span>
			</div>
			<br />
		</div>
	);
}

export default Intro;
