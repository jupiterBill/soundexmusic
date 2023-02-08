import {AiFillFire, AiFillHeart, AIOutline} from 'react-icons/ai'
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import {MdVerified, MdTimer} from "react-icons/md"
import { useContext } from 'react';
import Link from "next/link";

//INTERNAL IMPORT
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Style from "./Slider.module.css"
import { Button } from '../elements-index';
import { NFTMarketplaceContext } from '../../Context/SoundexContext';
import AudioCard from '../Audio/AudioCard/AudioCard';
const Slider = ()=>{
  
  const [idNumber, setIdNumber] = useState(0);
 const sliderData = [
  {
    backgroundImage:"https://soundex.infura-ipfs.io/ipfs/QmUz1GeRnjrevocYafCLRSAEovG5XeWPmXcAF41dBidm1j",
    name:"SUSPENSE",
    owner:"0xc326C776F2A5657e136443eB72eb8bc77A158dD2",
    price:"12.0",
    seller:"0xc5BF15B6965B6D796F8B56FfC6A6C0C2499bb6FF",
    sound:"https://soundex.infura-ipfs.io/ipfs/QmVQf5fTwaf2M8h8jH9DZyPHfAqJV5WHNbnLrKofsp1mmV",
    tokenId:1
  },
  {
    backgroundImage:"https://soundex.infura-ipfs.io/ipfs/QmVHhxGnuUpj2KS56B2EvFz25n4AVvQ76qxgrmf7t6qWQS",
    name:"WRONG ANSWER",
    owner:"0xc326C776F2A5657e136443eB72eb8bc77A158dD2",
    price:"0.002",
    seller:"0x65Dd7Ba42cea4B42dBcdB3b39Dc08102aF9dbd2c",
    sound: "https://soundex.infura-ipfs.io/ipfs/QmeqwjWV5E27ogJGE6vM5opEaBBbpLbMrvaRXDpVXzES2L",
    tokenId:2
  },

  {
    backgroundImage:"https://soundex.infura-ipfs.io/ipfs/QmXvggcBvyfkVJmUnD1ACR3MCEY6sZTdLL1YwRQzHwqAod",
    name:"ALARM",
    owner:"0xc326C776F2A5657e136443eB72eb8bc77A158dD2",
    price:"12.0",
    seller:"0x65Dd7Ba42cea4B42dBcdB3b39Dc08102aF9dbd2c",
    sound : "https://soundex.infura-ipfs.io/ipfs/QmbRGCmmn9xXuo6pcoEigrTJ2Vz2yKBpVXn1bLmxm2H31z",
    tokenId:3
  },
  {
    backgroundImage:"https://soundex.infura-ipfs.io/ipfs/QmZXCYxZF7jydCtuRqAcNCXin5UYzUBV8dNmNcicKJJqbh",
    name:"NOTIFICATIONS",
    owner:"0xc326C776F2A5657e136443eB72eb8bc77A158dD2",
    price:"0.01",
    seller:"0x65Dd7Ba42cea4B42dBcdB3b39Dc08102aF9dbd2c",
    sound : "https://soundex.infura-ipfs.io/ipfs/QmXyyETWtTTXaYSRn1UGWtvM18C8tpTsh3vvz9iAZiKZ1Y",
    tokenId:4
  },
  {
    backgroundImage:"https://soundex.infura-ipfs.io/ipfs/QmUf3a7L4ootVGWLA8KLdyWY73HWyv7wgvq5FTYJJm4up9",
    name:"I LOOK TO YOU BY WALE",
    owner:"0xc326C776F2A5657e136443eB72eb8bc77A158dD2",
    price:"13.0",
    seller:"0x65Dd7Ba42cea4B42dBcdB3b39Dc08102aF9dbd2c",
    sound : "https://soundex.infura-ipfs.io/ipfs/QmVmVf3Beofi3GDeaByZnNgj3LXW28D4VeQRLQ9Mu7Knoj",
    tokenId:5
  }
 ]
  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  //-------DEC
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);
return(
  
    <div>
      
        <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].seller}</h2>
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <Image
                className={Style.bigNFTSlider_box_left_creator_profile_img}
                src={sliderData[idNumber].backgroundImage}
                alt="profile image"
                width={50}
                height={50}
              />
              <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                <p>ITEM</p>
                <h4>
                  {sliderData[idNumber].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.bigNFTSlider_box_left_creator_collection_icon}
              />

              <div
                className={Style.bigNFTSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>Music</h4>
              </div>
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_bidding}>
            <div className={Style.bigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price} 
              </p>
            </div>

            <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={Style.bigNFTSlider_box_left_bidding_box_icon}
              />
              <span>Auction ending in</span>
            </p>

            <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>28</p>
                <span>Days</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>56</p>
                <span>Hours</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>24</p>
                <span>mins</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>14</p>
                <span>secs</span>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_button}>
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TiArrowLeftThick
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TiArrowRightThick
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
          <Link href={{pathname : "/NFTDetails", query:sliderData[idNumber]}}>
          <AudioCard src={sliderData[idNumber].sound}
         name = {sliderData[idNumber].name}
         price= {sliderData[idNumber].price}
         tokenId= {sliderData[idNumber].tokenId} 
         backgroundImage = {sliderData[idNumber].backgroundImage}/>
         </Link>
            <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
    

)
}
export default Slider