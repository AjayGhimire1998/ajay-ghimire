import React, {useEffect, useState} from 'react';
import  AudioPlayer from "react-audio-player";
import { songsUrl } from './songs';


function CheerPlayer() {
   
	return (
        <AudioPlayer src={songsUrl[0]} controls/>
    )
}

export default CheerPlayer;
