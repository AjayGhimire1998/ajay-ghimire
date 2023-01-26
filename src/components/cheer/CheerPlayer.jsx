import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-audio-player';
import { songsUrl } from './songs';

function CheerPlayer() {
	return <AudioPlayer src={songsUrl[6]} controls  autoPlay volume={0.3}/>;
}

export default CheerPlayer;
