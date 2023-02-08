import React, { useState, useEffect, useContext } from "react";

import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./Main.module.css";
import { Button } from "../elements-index";


const Main = () => {
  
  const router = useRouter();
  return (
    <div className={Style.Main}>
      <div className={Style.Main_box}>
        
          <h1>Welcome! 👋 Your Goto place for all things music NFT 🎵🎵🎵...</h1>
          <h3>
            Click the button below to check out our collections or scroll down to see our top NFTS..
          </h3>
          <div className={Style.Btn}>
          <Button
            btnName="Search"
            handleClick={() => router.push("/searchPage")}
          />
          </div>
          
      </div>
    </div>
  );
};

export default Main;
