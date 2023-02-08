import React,{useState} from 'react';
import { BsPlayFill,BsPauseFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Styles from './soundcomponent.module.css'
const AudioComp = ()=>{
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const router = useRouter();
  const { src } = router.query;
    return(
    <div className={Styles.audioWrapper}>
      <div className={Styles.audioStatus}>
        {playing ? "Playing" : "Paused"} at {currentTime} seconds
      </div>
      <div className = {Styles.audioTag}>
      <audio
        src={src}
        controls
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={e => setCurrentTime(e.target.currentTime)}
      />
      </div>
    </div>
  );
}
export default AudioComp;
/*
import React, { useState, useEffect } from 'react';
import './AudioPlayer.css';

const AudioPlayer = ({ src }) => {
  const [audio, setAudio] = useState(new Audio(src));
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    audio.addEventListener('timeupdate', updateCurrentTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    return () => {
      audio.removeEventListener('timeupdate', updateCurrentTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, [audio]);

  const updateCurrentTime = () => {
    setCurrentTime(audio.currentTime);
  };

  const updateDuration = () => {
    setDuration(audio.duration);
  };

  const togglePlay = () => {
    setPlaying(!playing);
    if (!playing) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const seek = (e) => {
    const percent = e.target.value;
    const seekTime = percent * duration;
    audio.currentTime = seekTime;
  };

  const changeVolume = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audio.volume = newVolume;
  };

  return (
    <div className="audio-player">
      <audio src={src} ref={setAudio} />
      <div className="controls">
        <button onClick={togglePlay}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={currentTime / duration}
          onChange={seek}
        />
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={volume}
          onChange={changeVolume}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;

*/