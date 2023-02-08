import React, { useState, useEffect,useRef } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";
import { useRouter } from 'next/router';
//INTERNAL IMPORT
import Style from "./AudioCard.module.css";

import { LikeProfile } from "../../elements-index";

const AudioCard = ({src,name,price,tokenId,backgroundImage}) => {
  const audioRef = useRef(null);
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  //const [audio, setAudio] = useState(new AudioPlayer());
  const [currentTime, setCurrentTime] = useState(0);
  const router = useRouter();
  
  const updateCurrentTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const updateDuration = () => {
    setDuration(audioRef.current.duration);
  };
  
  const seek = (e) => {
    updateCurrentTime()
    updateDuration()
    const percent = e.target.value;
    const seekTime = percent * duration;
    console.log("i'm listening " + audioRef.current.currentTime + " " +audioRef.current.duration + "  " +seekTime)
    audioRef.current.currentTime = seekTime;
  };

  /*const changeVolume = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audio.volume = newVolume;
  };*/
  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  const playMusic = () => {
    if (!play) {
      
      setPlay(true);
      audioRef.current.play()
    } else {
     
      setPlay(false);
      audioRef.current.pause()
    }
  };
  const audioEnded = ()=>{
     setPlay(false)
  }
  return (
    <div className={Style.audioCard}>
      <div className={Style.audioCard_box}>
        <div className={Style.audioCard_box_like_time}>
          <div className={Style.audioCard_box_like} onClick={(event) => {event.preventDefault(); likeNft()}}>
            {like ? (
              <AiFillHeart className={Style.audioCard_box_like_icon} />
            ) : (
              <AiOutlineHeart
                className={Style.audioCard_box_like_icon_unlike}
              />
            )}

            <span>24</span>
          </div>

          <div className={Style.audioCard_box_time}>
            <div className={Style.audioCard_box_like_time_remaining}>
              <small>Remaining time</small>
              <h5>{parseInt(duration) + " : "+  parseInt(currentTime)}</h5>
            </div>
          </div>
        </div>

        <div className={Style.audioCard_box_player} onClick= {(event) => event.preventDefault()}>
        <div className={Style.test}>
        <audio
        src={src}
        ref = {audioRef}
        controls
        onPlay={()=>{updateCurrentTime()
        updateDuration()}}
        onEnded= {audioEnded}
        onTimeUpdate={e => setCurrentTime(e.target.currentTime)}
      />
      </div>
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={currentTime /duration}
          onChange={seek}
        />
          <div
            className={Style.audioCard_box_musicPlayer}
            onClick={() => playMusic() }
          >
         
            {play ? (
              <div className={Style.audioCard_box_musicPlayer_icon}>
                <TbPlayerPause />
              </div>
            ) : (
              <div className={Style.audioCard_box_musicPlayer_icon}>
                <TbPlayerPlay />
              </div>
            )}
          </div>
        </div>

        <div className={Style.audioCard_box_details}>
          <div className={Style.audioCard_box_details_info}>
            <h4> {tokenId} {name} </h4>
            <div className={Style.audioCard_box_details_info_price}>
              <small>Price</small>
              <p>{price}</p>
            </div>
          </div>

          <div className={Style.audioCard_box_details_stock}>
            <LikeProfile />
            <small>24 in stock</small>
          </div>
        </div>

        <div className={Style.audioCard_box_img}>
          <Image
            src={backgroundImage}
            alt="background"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioCard;
