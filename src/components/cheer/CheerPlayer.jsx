import React, {useEffect} from 'react';
import  AudioPlayer from "react-audio-player";
import { songsUrl } from './songs';

function CheerPlayer() {

    const opts = {
        height: '0',
        width: '0',
        playerVars: {
          autoplay: 1,
          controls: 1,
          start: 0,
          origin: 'http://localhost:3001/#/'
        }
      };
      return (
        <AudioPlayer 
          videoId={songsUrl[0]}
          opts={opts}
        />
	);
}

export default CheerPlayer;
