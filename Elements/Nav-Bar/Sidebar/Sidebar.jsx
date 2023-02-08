import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";
import { GrClose } from "react-icons/gr";
import {BsChevronDoubleDown} from "react-icons/bs";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedUp,
} from "react-icons/ti";
import { DiJqueryLogo } from "react-icons/di";

//INTERNAL IMPORT
import Style from "./Sidebar.module.css";

import Button from "../../Buttons/Buttons";
import { Router } from "next/router";

const Sidebar = ({setOpenSideMenu})=> {
    const [explore, setExploreComponentState] = useState(false);
    const [helpCenter, setHelpCenterComponentState] = useState(false);
    const router = useRouter()
   const exploreProperties= [ 
    {
        name : "Collections",
        link : "collection"
    },
    {
        name : "Search",
        link : "searchPage"
    },
    {
        name : "Author Profile",
        link : "creator"
    },
    {
        name : "NFT Details",
        link : "NFTDetails"
    },
    {
        name : "Connect Wallet",
        link : "connectWallet"
    },
    ];

    const HelpCenterProperties = [
        {name:"About",link : "aboutus"},
        {name:"Contact",link : "contactus"},
        {name:"Sign up",link : "sign-up"},
        {name:"Sign in",link : "sign-in"},
    ];
    const openExploreMenu = () =>{
        if(!explore){
            setExploreComponentState(true);
        }else{
            setExploreComponentState(false);
        }
    }
    const openHelpCenterMenu = () =>{
        if(!helpCenter){
            setHelpCenterComponentState(true);
        }else{
            setHelpCenterComponentState(false);
        }
    }
    const closeSideBar = ()=>{
        setOpenSideMenu(false)
    }
    return (<div className={Style.Sidebar}>
        <GrClose
        className={Style.sideBar_closeBtn}
        onClick={() => closeSideBar()}
      />
      <div className={Style.sideBar_box}>
            <Image src = {"https://soundex.infura-ipfs.io/ipfs/Qma2CbrUCDFE2oWqbYTvva8UFPs4TJE3sgqoybgqzLqBN5"} width= {50} height = {50} alt = {""} className = {Style.sideBar_logo}/>
            <p>Random text that will be on the sidebar box</p>
            <div className={Style.Sidebar_social}>
                <a href="#">
                    <TiSocialFacebook />
                </a>
                <a href="#">
                    <TiSocialInstagram />
                </a>
                <a href="#">
                    <TiSocialTwitter />
                </a>
                <a href="#">
                    <TiSocialLinkedin />
                </a>
                <a href="#">
                    <TiSocialYoutube />
                </a>
            </div>         
      </div>
      <div className = {Style.sideBar_menu}>
        <div className = {Style.sideBar_menu_box} onClick= {()=>openExploreMenu()}>
            <p> Explore </p>
            <BsChevronDoubleDown />
        </div>
        {explore && (<div className={Style.sidebar_explore}>
            {exploreProperties.map((item,index) => (
               <p key={index + 1}> 
               <Link href={{pathname : `${item.link}`}}>{item.name}</Link>
               </p>
            ))}</div>
            )}

          <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={() => openHelpCenterMenu()}
          >
            <p>Help Center</p>
            <BsChevronDoubleDown />
          </div>

          {helpCenter && (
            <div className={Style.sideBar_explore}>
              {HelpCenterProperties.map((item, index) => (
                <p key={index + 1}>
                  <Link href={{ pathname: `${item.link}` }}>{item.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={Style.sideBar_button}>
      <Button btnName = "Create" className= {Style.button} handleClick= {()=> router.push("./Upload")}/>
      <Button btnName = "Connect Wallet"  handleClick={()=> router.push("./connectWallet")}/>
      </div>
    
      </div>
    )
};
export default Sidebar;