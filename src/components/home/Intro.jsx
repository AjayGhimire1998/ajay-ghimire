import React from 'react';
import './intro.css';
import ajay from '../../images/my-pictures/ajay1.jpeg';
import pin  from "../../images/my-pictures/pin.png"
import { FaMapMarkerAlt } from 'react-icons/fa';
function Intro({ shadow }) {
	return (
		<div className="intro-container" style={{ filter: `drop-shadow(2px -2px 4px ${shadow})` }}>
			<div className="avatar" style={{ backgroundImage: `url(${ajay})` }}>
				<img src={ajay} alt="avatar" className="avatar-image" />
			</div>
			<div className="contents">
				<p>I am</p>
				<div>
					<strong>Ajay Ghimire.</strong>
				</div>
				<br />
				<span>Full Stack Software Developer </span>
				<br />
				<br />
				<span>
					
					<i><img src={pin} alt="pin" />Sydney, Australia.</i>
				</span>
			</div>
			<br />
		</div>
	);
}

export default Intro;
