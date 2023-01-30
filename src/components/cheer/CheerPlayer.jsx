import React, { useState } from 'react';
import { useEffect } from 'react';
// import AudioPlayer from 'react-audio-player';
import ReactAudioPlayer from 'react-player';
import { songsUrl } from './songs';

function CheerPlayer() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [song, setSong] = useState(new Audio(songsUrl[0]));

	const nextClick = () => {
		setSong(new Audio(songsUrl[Math.floor(Math.random() * 9)]));
		song.play()
	};
	const onPlayPauseClick = () => {
		if (isPlaying) {
			song.pause();
		} else {
			song.play();
		}
		setIsPlaying(!isPlaying);
	};

	useEffect(() => {
		setIsPlaying(false)
	}, [song])
	return (
		<>
			{/* <ReactAudioPlayer url={} volume={0.05} playing={true} controls/> */}
			<button style={{ display: 'inline-block', width: '50%', color: 'black' }} onClick={onPlayPauseClick}>
				{isPlaying ? 'Pause' : 'Cheer Me Up'}
			</button>
			<button onClick={nextClick} style={{ display: 'inline-block', width: '50%', color: 'black' }}>
				Next
			</button>
		</>
	);
}

export default CheerPlayer;
