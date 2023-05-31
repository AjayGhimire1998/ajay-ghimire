import React from 'react';
import HelloMsg from '../../components/home/HelloMsg';
import './home.css';
import Intro from '../../components/home/Intro';

function Home({ play }) {
	return (
		<>
			<div className="home">
				<HelloMsg />
				<Intro play={play} />
			</div>
		</>
	);
}

export default Home;
