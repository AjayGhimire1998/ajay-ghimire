import React from 'react';
import ReactPlayer from 'react-player';
import { songsUrl } from './songs';

function CheerPlayer() {
	return (
		<div style={{display: "none"}}>
			<ReactPlayer playing url={songsUrl} volume={0.2} />
		</div>
	);
}

export default CheerPlayer;
