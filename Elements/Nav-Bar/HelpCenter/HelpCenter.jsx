import React from 'react';
import Link from 'next/link';
import Style from './HelpCenter.module.css';

const HelpCenter = ()=> {
    const HelpCenterProperties = [
        {name:"About",link : "aboutus"},
        {name:"Contact",link : "contactus"},

    ];
     return (
        HelpCenterProperties.map((helpCenterItem,index)=>(
            <div key = {index+1} className = {Style.HelpCenter}>
            <Link href = {{pathname : `${helpCenterItem.link}` }}>{helpCenterItem.name}</Link>
            </div>
        ))
    )
};
export default HelpCenter;