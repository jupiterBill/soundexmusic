import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/connectWallet.module.css";

//IMPORT FROM SMART CONTRACT
//import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
const connectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);
 // const { currentAccount, connectWallet } = useContext(NFTMarketplaceContext);
 function walletConnect(){
   alert("wallet connected!");
 }
  const providerArray = [
    {
      provider: "https://soundex.infura-ipfs.io/ipfs/QmPannU5EvTjnv5DdEpxpLH3JmKET13ydRkTdNDzAYBkwH",
      name: "Metamask",
    },
    {
      provider: "https://soundex.infura-ipfs.io/ipfs/QmbzmFbPugz2AUDi2D5BgFCs6nyGDXuWs2zsE15HLvhL5L",
      name: "walletConnect",
    },
    {
      provider: "https://soundex.infura-ipfs.io/ipfs/QmQKe2go3swdARLbZuyMUBTdrdrEUbaDMkqNZfDgQPAn5F",
      name: "walletlink",
    },
    {
      provider: "https://soundex.infura-ipfs.io/ipfs/QmQ1xrY5MyiMr1yQrim5XHHBLBo8iRaEYfpouJkZZ3uEs5",
      name: "Formatic",
    },
  ];
  return (
    <div className={Style.connectWallet}>
      <div className={Style.connectWallet_box}>
        <h1>Connect your wallet</h1>
        <p className={Style.connectWallet_box_para}>
          Connect with one of our available wallet providers or create a new one
        </p>

        <div className={Style.connectWallet_box_provider}>
          {providerArray.map((el, i) => (
            <div
              className={`${Style.connectWallet_box_provider_item} ${
                activeBtn == i + 1 ? Style.active : ""
              }`}
              key={i + 1}
              onClick={() => (setActiveBtn(i + 1), walletConnect())}
            >
              <Image
                src={el.provider}
                alt={el.provider}
                width={50}
                height={50}
                className={Style.connectWallet_box_provider_item_img}
              />
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default connectWallet;
