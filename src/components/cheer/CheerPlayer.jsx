import React from 'react';
import ReactPlayer from 'react-player';
import { songsUrl } from './songs';

function CheerPlayer() {
	return (
		<div>
			<ReactPlayer url={songsUrl[0]} controls={true} />
		</div>
	);
}

export default CheerPlayer;
