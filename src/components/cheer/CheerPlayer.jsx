import React, { useState } from "react";
import "./cheer.css";
import { useRef } from "react";
import { useEffect } from "react";
import { songsUrl } from "./songs";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import { BiShuffle } from "react-icons/bi";
import music from "../../images/music.jpeg";

function CheerPlayer({ shadow }) {
  const [cheerUp, setCheerUp] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);

  const songRef = useRef(new Audio(songsUrl[trackIndex]));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const onCheerUpClick = () => {
    setIsPlaying(true);
    setCheerUp(true);
  };

  const onNextClick = () => {
    if (trackIndex < songsUrl.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else if (trackIndex === songsUrl.length - 1) {
      setTrackIndex(0);
    }
  };

  const onPlayPauseClick = (value) => {
    setIsPlaying(value);
  };

  useEffect(() => {
    if (isPlaying) {
      songRef.current.play();
      songRef.current.volume = 0.1;
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
      songRef.current.volume = 0.1;
      setIsPlaying(true);
    } else {
      isReady.current = true;
    }
  }, [trackIndex]);

  return (
    <div className="cheer-container">
      {cheerUp ? (
        <div className="player">
          <button
            aria-label={isPlaying ? "Pause" : "Play"}
            onClick={() => onPlayPauseClick(!isPlaying)}
          >
            {isPlaying ? (
              <BsPauseCircle size={30} />
            ) : (
              <BsPlayCircle size={30} />
            )}
          </button>
          <button aria-label="Next Track" onClick={() => onNextClick()}>
            <BiShuffle size={30} />
          </button>
        </div>
      ) : (
        // <div className="cheer-up" onClick={onCheerUpClick}>
        //   <div className="music-div">
        //     <img src={music} alt="avatar" className="avatar-image music" />
        //   </div>
        //   &nbsp;<small>Fancy some music ?</small>
        // </div>

        <button
          className="cheer-up"
          onClick={onCheerUpClick}
          aria-label="Start Music"
        >
          <div className="music-div">
            <img
              src={music}
              alt="music logo"
              className="avatar-image music"
              aria-hidden="true"
            />
          </div>
          &nbsp;
          <span>Fancy some music?</span>
        </button>
      )}
    </div>
  );
}

export default CheerPlayer;
