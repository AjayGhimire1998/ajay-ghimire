import React from 'react';
import './intro.css';
import ajay from '../../images/my-pictures/profile_pic.png';
import cover from '../../images/cover.png';
import pin from '../../images/my-pictures/pin.png';
import { useNavigate } from 'react-router-dom';
function Intro({ play }) {
	const navigate = useNavigate();
	function goToAbout() {
		play();
		navigate('/about');
	}

	return (
		<div className="intro-container">
			<div className="avatar" style={{ backgroundImage: `url(${cover})`, backgroundSize: '100% 100%'}}>
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
