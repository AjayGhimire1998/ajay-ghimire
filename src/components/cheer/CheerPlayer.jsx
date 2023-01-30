import React, { useState } from 'react';
import { useEffect } from 'react';
// import AudioPlayer from 'react-audio-player';
import ReactAudioPlayer from 'react-player';
import { songsUrl } from './songs';

function CheerPlayer() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [song, setSong] = useState(new Audio(songsUrl[Math.floor(Math.random() * 9)]));

	const nextClick = () => {
		if (isPlaying) {
			setSong(null);
		}
		setSong(new Audio(songsUrl[Math.floor(Math.random() * 9)]));
		onPlay(song);
	};
	const onPlay = (music) => {
		music.play();
		setIsPlaying(true);
	};
	const onPause = (music) => {
		music.pause();
		setIsPlaying(false);
	};

	useEffect(() => {
		setSong(song)
	}, [song, nextClick]);
	return (
		<>
			{/* <ReactAudioPlayer url={} volume={0.05} playing={true} controls/> */}
			{isPlaying ? (
				<button style={{ display: 'inline-block', width: '50%', color: 'black' }} onClick={() => onPause(song)}>
					Pause
				</button>
			) : (
				<button style={{ display: 'inline-block', width: '50%', color: 'black' }} onClick={() => onPlay(song)}>
					Play
				</button>
			)}
			<button onClick={nextClick} style={{ display: 'inline-block', width: '50%', color: 'black' }}>
				Next
			</button>
		</>
	);
}

export default CheerPlayer;
