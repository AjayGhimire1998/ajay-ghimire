import React from 'react';
import './about.css';
import AboutMe from '../../components/about/AboutMe';

function About({ play, hover }) {
	return (
		<div className="about">
			<AboutMe play={play} hover={hover} />
		</div>
	);
}

export default About;
