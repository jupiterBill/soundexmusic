import React from 'react'
import Image from "next/image";
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
    TiArrowSortedUp,
  } from "react-icons/ti";
import {RiSendPlaneFill} from 'react-icons/ri';
import Style from './Footer.module.css';
import {Explore,HelpCenter} from '../Nav-Bar/index';

const Footer = ()=> {
    return (
        <div className={Style.footer}>
        <div className={Style.footer_box}>
          <div className={Style.footer_box_social}>
             <Image src={"https://soundex.infura-ipfs.io/ipfs/Qma2CbrUCDFE2oWqbYTvva8UFPs4TJE3sgqoybgqzLqBN5"} alt="footer logo"  width={100} height={100} /> 
            {/*<a href="/">
              <DiJqueryLogo className={Style.footer_box_social_logo} />
            </a>*/}
            <p>
              The world's goto realm for music NFTs NeverThe world's goto realm for music NFTs Never
              The world's goto realm for music NFTs NeverThe world's goto realm for music NFTs Never
            </p>
  
            <div className={Style.footer_social}>
              <a href="#">
                <TiSocialFacebook />
              </a>
              <a href="#">
                <TiSocialLinkedin />
              </a>
              <a href="#">
                <TiSocialTwitter />
              </a>
              <a href="#">
                <TiSocialYoutube />
              </a>
              <a href="#">
                <TiSocialInstagram />
              </a>
            </div>
          </div>
  
          <div className={Style.footer_box_explore}>
            <h3>Explore</h3>
            <Explore />
          </div>
  
          <div className={Style.footer_box_help}>
            <h3>Help Center</h3>
            <HelpCenter />
          </div>
  
          <div className={Style.subscribe}>
            <h3>Subscribe</h3>
  
            <div className={Style.subscribe_box}>
              <input type="email" placeholder="Enter your email *" />
              <RiSendPlaneFill className={Style.subscribe_box_send} />
            </div>
            <div className={Style.subscribe_box_info}>
              <p>
                Discover, collect, and sell extraordinary NFTs Soundex is the
                world first and largest NFT music marketplace
              </p>
            </div>
          </div>
        </div>
      </div>
    )
};
export default Footer;