
import React, { useState,useEffect,useContext } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from "next/router";
import {MdNotifications} from 'react-icons/md';
import {BsSearch} from 'react-icons/bs';
import {CgMenuRight,CgMenuLeft} from 'react-icons/cg';
import Style from './NavBar.module.css';
import {Button} from '../elements-index';
import {Explore,HelpCenter,Notifications,Sidebar,Profile} from './index'
import { NFTMarketplaceContext } from '../../Context/SoundexContext';
const NavBar = ()=> {
    //state of Navigation Bar components which could either be opened or closed
    const [explore, setExploreComponentState] = useState(false);
    const [helpCenter, setHelpCenterComponentState] = useState(false);
    const [notifications, setNotificationsComponentState] = useState(false);
    const [sidebar, setSideBarComponentState] = useState(false);
    const [profile,SetProfileComponentState] = useState(false);
    const {currentAccount,connectWallet} = useContext(NFTMarketplaceContext)
    const router = useRouter();
    const openMenus = (e) =>{
        const menuText = e.target.innerText;
        /*if (menuText === "Explore"){
            setExploreComponentState(true);
            setHelpCenterComponentState(false);
            setNotificationsComponentState(false);
            setSideBarComponentState(false);
            SetProfileComponentState(false);
        }else if (menuText === "Help Center"){
            setExploreComponentState(false);
            setHelpCenterComponentState(true);
            setNotificationsComponentState(false);
            setSideBarComponentState(false);
            SetProfileComponentState(false);
        }else{
            setExploreComponentState(false);
            setHelpCenterComponentState(false);
            setNotificationsComponentState(false);
            setSideBarComponentState(false);
            SetProfileComponentState(false);   
        }*/
        switch(menuText){
            case "Explore":
                setExploreComponentState(true);
                setHelpCenterComponentState(false);
                setNotificationsComponentState(false);
                setSideBarComponentState(false);
                SetProfileComponentState(false);
                break;
            case "Help Center":
                setExploreComponentState(false);
                setHelpCenterComponentState(true);
                setNotificationsComponentState(false);
                setSideBarComponentState(false);
                SetProfileComponentState(false);
                break;
            default:
                setExploreComponentState(false);
                setHelpCenterComponentState(false);
                setNotificationsComponentState(false);
                setSideBarComponentState(false);
                SetProfileComponentState(false);   
        }
    }
    const openNotificationsBar = ()=>{
        if (!notifications){
            setNotificationsComponentState(true);
            setExploreComponentState(false);
            setSideBarComponentState(false);
            setHelpCenterComponentState(false);
            SetProfileComponentState(false);
        }else{
            setNotificationsComponentState(false);
        }
        
    }
    const displayProfile = ()=>{
        if (!profile){
            setNotificationsComponentState(false);
            setExploreComponentState(false);
            setSideBarComponentState(false);
            setHelpCenterComponentState(false);
            SetProfileComponentState(true);
        }else{
            SetProfileComponentState(false);
        }
    }
    const openSideMenu = ()=>{
        if (!sidebar){
            setSideBarComponentState(true);
            setNotificationsComponentState(false);
            setExploreComponentState(false);
        }else{
            setSideBarComponentState(false);
        }
    }
    return (
        <div className={Style.navbar}>
            <div className={Style.navbar_container}>
            <div className={Style.navbar_container_left}>
                <div className={Style.logo} onClick={()=>{router.push("/")}}>
                <Image src={"https://soundex.infura-ipfs.io/ipfs/Qma2CbrUCDFE2oWqbYTvva8UFPs4TJE3sgqoybgqzLqBN5"} alt = "soundex logo" width={100} height={100}/>
                </div>
                <div className={Style.navbar_container_left_box_input}>
                        <input type="text" placeholder='search NFTs'/>
                        <BsSearch onClick={()=>{router.push("/searchPage")}} className= {Style.Search_icon}></BsSearch>   
                </div>
                
            </div>
            <div className={Style.navbar_container_right}>
                {/* EXPLORE COMPONENT*/}
                <div className={Style.navbar_container_right_explore}>
                    <p onClick={(e)=>openMenus(e)}>Explore</p>
                    {explore && (<div className={Style.navbar_container_right_explore_box}>
                        <Explore />
                    </div>)}
                </div>
                {/* END OF EXPLORE COMPONENT */}


                {/* HELP CENTER COMPONENT */}
                <div className={Style.navbar_container_right_Help_center}>
                    <p onClick={(e)=>openMenus(e)}>
                        Help Center
                    </p>
                    {helpCenter && <div className={Style.navbar_container_right_Help_center_box}>
                        <HelpCenter/>
                        </div>
                        }
                </div>
                {/* END OF HELP CENTER COMPONENT */}


                {/*NOTIFICATION COMPONENT*/}
                <div className={Style.navbar_container_right_notifications}>
                    <MdNotifications onClick={() => openNotificationsBar()} />
                    {notifications && <div className={Style.navbar_container_right_notifications_box}>
                        <Notifications/>
                        </div>
                        }
                </div>
                {/* END OF NOTIFICATIONS COMPONENT*/} 
                

                {/* THE CREATE BUTTON  */}
                <div className={Style.navbar_container_right_button}>
                    {
                    currentAccount ? 
                    <Button btnName = "Create" handleClick={() => router.push("/Upload")}/>:
                    <Button btnName = "Connect" handleClick={() => connectWallet()}/>

                    }
                </div>
                {/* END OF CREATE BUTTON */}


                {/* USER PROFILE BUTTON*/}
                <div className={Style.navbar_container_right_profile_box}>
                    <div className={Style.navbar_container_right_profile}>
                        <Image src={"https://soundex.infura-ipfs.io/ipfs/QmXFkAShcK2W6boWmSTS2URYVCzuhoKS2dHaiC6DfhuMdt"}
                        alt = "nada" 
                        width={50} height={50} 
                        onClick = {() => displayProfile()}
                        className= {Style.navbar_container_right_profile}
                        />
                        {profile && <Profile />}
                    </div>
                </div>
                {/* END OF PROFILE BUTTON */}


                {/*SIDE MENU*/}
                <div className={Style.navbar_container_right_sidemenu}>
                    <CgMenuRight className={Style.menuIcon} onClick = {() => openSideMenu()}/>
                </div>
                {/* END OF SIDE MENU */}

            </div>
            </div>
            { sidebar
             && 
             (<div className={Style.sideBar}>
                <Sidebar setOpenSideMenu = {setSideBarComponentState}/>
             </div>
             )
             }
        </div>
    );
};
export default NavBar;