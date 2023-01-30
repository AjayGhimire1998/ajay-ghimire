import React from 'react';
import HelloMsg from '../../components/home/HelloMsg';
import './home.css';
import Intro from '../../components/home/Intro';

function Home({ shadow, play }) {
	return (
		<>
			<div className="home">
				<HelloMsg />
				<Intro shadow={shadow} play={play} />
			</div>
		</>
	);
}

export default Home;
