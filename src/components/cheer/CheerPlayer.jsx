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
          <div>
            {isPlaying ? (
              <BsPauseCircle
                size={30}
                onClick={() => onPlayPauseClick(false)}
              />
            ) : (
              <BsPlayCircle size={30} onClick={() => onPlayPauseClick(true)} />
            )}
          </div>
          <div>
            <BiShuffle size={30} onClick={() => onNextClick()} />
          </div>
        </div>
      ) : (
        <div className="cheer-up" onClick={onCheerUpClick}>
          <div className="music-div">
            <img src={music} alt="avatar" className="avatar-image music" />
          </div>
          &nbsp;<small>Fancy some music ?</small>
        </div>
      )}
    </div>
  );
}

export default CheerPlayer;
