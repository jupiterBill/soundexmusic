import React from "react";
import Styles from "./MarketItems.module.css";
import AudioCard from "../Elements/Audio/AudioCard/AudioCard";
import Link from "next/link";
const MarketItems = ({NFTData})=>{
  /*const Data = [
    {
      src : "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1",
      tokenId: "1",
      name: "johnson",
      owner: "0xcfguelkdlekjf6627268",
      price: "20",
      seller : "0xbc476hdgfg46583284"
  },
    {
    src : "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1",
    tokenId: "2",
    name: "wally",
    owner: "0xcfguelkdldkjf6627268",
    price: "20",
    seller : "0xbc466hdgfg46583284",
  },
    {
      src : "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1",
      tokenId: "3",
      name: "abiola",
      owner: "0xcffuelkdldkjf6627268",
      price: "20",
      seller : "0xbc466hdgfg46583984"
  },
    {
      src : "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1",
      tokenId: "4",
      name: "wannie",
      owner: "0xcfguelkdedkjf6627268",
      price: "20",
      seller : "0xbc426hdgfg46583284"
    },
    {
      src : "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1",
      tokenId: "5",
      name: "ednut",
      owner: "0xcfguelkdldkjf66272338",
      price: "20",
      seller : "0xcc466hdgfg46583284"
    }
  ]*/
  return(
    <div className={Styles.MarketItems}>
    {
      NFTData.map((el, i)=>(
      <Link href={{pathname : "/NFTDetails", query:el}}>
        <div className = {Styles.AudioCardWrapper} >
        <AudioCard src={el.sound}
         name = {el.name}
         price= {el.price}
         tokenId= {el.tokenId} 
         backgroundImage = {el.backgroundImage}/>
        </div>
        
      </Link>))
      }
</div>

  )
}
export default MarketItems