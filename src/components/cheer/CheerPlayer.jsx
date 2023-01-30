import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { songsUrl } from './songs';
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
import { BiShuffle } from 'react-icons/bi';

function CheerPlayer() {
	const [cheerUp, setCheerUp] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [trackIndex, setTrackIndex] = useState(0);

	const songRef = useRef(new Audio(songsUrl[trackIndex]));
	const intervalRef = useRef();
	const isReady = useRef(false);


	const onCheerUpClick = () => {
		setIsPlaying(true);
		setCheerUp(true);
	}
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
			{cheerUp ? (
				<>
					{isPlaying ? (
						<BsPauseCircle onClick={() => onPlayPauseClick(false)} />
					) : (
						<BsPlayCircle onClick={() => onPlayPauseClick(true)} />
					)}
					<BiShuffle onClick={() => onNextClick()} />
				</>
			) : (
				<button className='cheer-up' onClick={onCheerUpClick}>Cheer Up</button>
			)}
		</>
	);
}

export default CheerPlayer;
