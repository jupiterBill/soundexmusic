import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Style from './Explore.module.css';
const Explore = ()=> {
    const exploreProperties = [
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
            link : "NFT-details"
        },
        {
            name : "Connect Wallet",
            link : "connectWallet"
        },
       
    ];
    return (
        exploreProperties.map((item,index)=>(
            <div  key={index + 1} className = {Style.Explore}>
                <Link href={{pathname : `${item.link}`}}>{item.name}</Link>
            </div>
        ))
    );
};
export default Explore;