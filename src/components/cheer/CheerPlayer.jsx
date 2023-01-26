import React, {useEffect} from 'react';
import YouTube from "react-youtube";
import { songsUrl } from './songs';

function CheerPlayer() {

    const opts = {
        height: '0',
        width: '0',
        playerVars: {
          autoplay: 1,
          controls: 1,
        }
      };
      const playerRef = React.createRef();
      useEffect(() => {
        playerRef.current.internalPlayer.playVideo();
      }, [])
      return (
        <YouTube 
          videoId={songsUrl[0]}
          opts={opts}
          ref={playerRef}
        />
	);
}

export default CheerPlayer;
