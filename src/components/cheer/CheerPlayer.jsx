import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-audio-player';
import { songsUrl } from './songs';

function CheerPlayer() {
	const [isPlaying, setIsPlaying] = useState(false);

	const onPlayPauseClick = () => {
		setIsPlaying(!isPlaying);
	};
	return (
		<>
			<AudioPlayer src={songsUrl[3]} volume={0.3} autoPlay onPlay={() => onPlayPauseClick} />
			<button style={{ display: 'inline-block', width: '50%', color: 'black' }} onClick={onPlayPauseClick}>
				{isPlaying ? 'Pause' : 'Cheer Me Up'}
			</button>
		</>
	);
}

export default CheerPlayer;
