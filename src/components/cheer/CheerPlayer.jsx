import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

import ReactAudioPlayer from 'react-player';
import { songsUrl } from './songs';

function CheerPlayer() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [trackIndex, setTrackIndex] = useState(0);

	const songRef = useRef(new Audio(songsUrl[trackIndex]));
	const intervalRef = useRef();
	const isReady = useRef(false);

	const onNextClick = () => {
		setTrackIndex(Math.floor(Math.random() * 9));
	};

	const onPlayPauseClick = (value) => {
		setIsPlaying(value);
	};

	useEffect(() => {
		if (isPlaying) {
			songRef.current.play();
			songRef.current.volume = 0.5;
		} else {
			songRef.current.pause();
		}
	}, [isPlaying]);

	useEffect(() => {
		songRef.current.pause();
		clearInterval(intervalRef.current);
	}, []);

	useEffect(() => {
		songRef.current.pause();
		songRef.current = new Audio(songsUrl[trackIndex]);

		if (isReady.current) {
			songRef.current.play();
			songRef.current.volume = 0.5;
			setIsPlaying(true);
		} else {
			isReady.current = true;
		}
	}, [trackIndex]);
	return (
		<>
			{isPlaying ? (
				<button
					style={{ display: 'inline-block', width: '50%', color: 'black' }}
					onClick={() => onPlayPauseClick(false)}
				>
					Pause
				</button>
			) : (
				<button
					style={{ display: 'inline-block', width: '50%', color: 'black' }}
					onClick={() => onPlayPauseClick(true)}
				>
					Play
				</button>
			)}
			<button onClick={onNextClick} style={{ display: 'inline-block', width: '50%', color: 'black' }}>
				Next
			</button>
		</>
	);
}

export default CheerPlayer;
