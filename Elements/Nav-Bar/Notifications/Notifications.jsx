import React from 'react'
import Style from './Notifications.module.css';
import Link from 'next/link';
import Image from 'next/image';
const Notifications = ()=> {
    return (<div className={Style.Notifications}>
           <p>What's new...</p>
        <div className={Style.Notifications_box}>
            <div className={Style.Notifications_box_image}>
                <Image src = {"https://soundex.infura-ipfs.io/ipfs/QmYX6BjEh7nDQ6DJDMu6z5KGUJdtp1dhCwV6bUjCDrE1bZ"} 
                width= {50}
                height = {50}
                alt = "Notifications image" 
                className={Style.Notifications_box_image}/>
            </div>
            <div className={Style.Notifications_box_info}>
                <h4>Wale oladeinde</h4>
                <p>User action in the last</p>
                <small>5 minutes...</small>
            </div>
            <span className={Style.Notifications_box_new}></span>
        </div>
        
    </div>)
};
export default Notifications;