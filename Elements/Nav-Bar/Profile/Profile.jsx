import React,{useContext} from "react";
import Image from "next/image";
import {CgProfile} from "react-icons/cg";
import {GiSoundOn} from "react-icons/gi";
import {TbEditCircle} from "react-icons/tb";
import {TfiHelp} from "react-icons/tfi";
import {FcAbout} from "react-icons/fc";
import {MdOutlineCancelScheduleSend}  from "react-icons/md";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Profile.module.css";

import { NFTMarketplaceContext } from "../../../Context/SoundexContext";

const Profile = ()=> {
  const {currentAccount} = useContext(NFTMarketplaceContext)
    return (
        <div className={Style.profile}>
          <div className={Style.profile_account}>
            <Image
              src={"https://soundex.infura-ipfs.io/ipfs/QmXFkAShcK2W6boWmSTS2URYVCzuhoKS2dHaiC6DfhuMdt"}
              alt="user profile"
              width={50}
              height={50}
              className={Style.profile_account_img}
            />
    
            <div className={Style.profile_account_info}>
              <p>Connected address</p>
              <small>{currentAccount? currentAccount : "please connect wallet."}</small>
            </div>
          </div>
    
          <div className={Style.profile_menu}>
            <div className={Style.profile_menu_one}>
              <div className={Style.profile_menu_one_item}>
                <CgProfile />
                <p>
                  <Link href={{ pathname: "/creator" }}>My Profile</Link>
                </p>
              </div>
              <div className={Style.profile_menu_one_item}>
                <GiSoundOn />
                <p>
                  <Link href={{ pathname: "/creator" }}>My Sounds</Link>
                </p>
              </div>
            </div>
    
            <div className={Style.profile_menu_two}>
              <div className={Style.profile_menu_one_item}>
                <TfiHelp />
                <p>
                  <Link href={{ pathname: "/contactus" }}>Help</Link>
                </p>
              </div>
              <div className={Style.profile_menu_one_item}>
                <FcAbout />
                <p>
                  <Link href={{ pathname: "/aboutus" }}>About Us</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
};
export default Profile;