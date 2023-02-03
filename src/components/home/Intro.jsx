import React from 'react';
import './intro.css';
import ajay from '../../images/my-pictures/ajay1.jpeg';
import cover from '../../images/cover.jpeg';
import pin from '../../images/my-pictures/pin.png';
import { useNavigate } from 'react-router-dom';
function Intro({ shadow, play}) {
	const navigate = useNavigate();
	function goToAbout() {
		play();
		navigate('/about')
	}

	return (
		<div className="intro-container" style={{ filter: `drop-shadow(3px -3px 5px ${shadow})` }}>
			<div
				className="avatar"
				style={{ backgroundImage: `url(${cover})`, backgroundSize: '100% 100%'}}
			>
				<img src={ajay} alt="avatar" className="avatar-image" onClick={goToAbout}/>
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
					<i>
						<img src={pin} alt="pin" />
						Sydney, Australia.
					</i>
				</span>
			</div>
			<br />
		</div>
	);
}

export default Intro;
