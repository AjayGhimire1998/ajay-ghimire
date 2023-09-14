import React from 'react';
import './about.css';
import AboutMe from '../../components/about/AboutMe';

function About({ play, hover }) {
	return (
		<section className="about">
			<AboutMe play={play} hover={hover} />
		</section>
	);
}

export default About;
