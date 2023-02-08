import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/creator.module.css";
import { Title } from "../Elements/elements-index";
import CreatorProfile from "../CreatorPage/CreatorProfile";
import MarketItems from "../MarketItems/MarketItems";

//IMPORT SMART CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/SoundexContext";

const author = () => {
  //IMPORT SMART CONTRACT DATA
  const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(
    NFTMarketplaceContext
  );

  const [nfts, setNfts] = useState([]);
  const [myNFTs, setMyNFTs] = useState([]);

  useEffect(() => {
    
    try {
      
      
        fetchMyNFTsOrListedNFTs().then((items) => {
        //console.log(JSON.stringify(items, null, 2))
        setNfts(items)
        //setNftsCopy(items)
        //console.log("items", items);
    
      });
    } catch (error) {
      console.log(error)
    }
  }, [currentAccount]);

  useEffect(() => {
    
    try {
      
      
        fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => {
        //console.log(JSON.stringify(items, null, 2))
        setMyNFTs(items)
        //setNftsCopy(items)
        //console.log("items", items);
    
      });
    } catch (error) {
      console.log(error)
    }
  }, [currentAccount]);
  // this is just a test data later we'll get the data from ipfs
  /*const  testData = [
    {
    src : "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1",
    tokenId: "1",
    name: "johnson",
    owner: "0xcfguelkdlekjf6627268",
    price: "20",
    seller : "0xbc476hdgfg46583284"
},
{
        src : "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1",
        tokenId: "3",
        name: "abiola",
        owner: "0xcffuelkdldkjf6627268",
        price: "20",
        seller : "0xbc466hdgfg46583984"
},
{
        src : "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1",
        tokenId: "4",
        name: "wannie",
        owner: "0xcfguelkdedkjf6627268",
        price: "20",
        seller : "0xbc426hdgfg46583284"
},
{
    src : "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1",
    tokenId: "5",
    name: "ednut",
    owner: "0xcfguelkdldkjf66272338",
    price: "20",
    seller : "0xcc466hdgfg46583284"
  }
      
]*/
  return (
    <div className={Style.author}>
      <div className={Style.Title}>
      <Title
        heading={"Popular Creators"}
        paragraph={"Click on music icon and enjoy NTF music or audio"}
      />
      </div>
       <div className={Style.CreatorProfile}>
       <CreatorProfile currentAccount={currentAccount} />
       </div>
      <div className={Style.MarketItems}>
      <Title heading={"YOUR UNLISTED NFTs "} paragraph={"below are your unlisted nfts click to list them"}/>
      <div>{nfts ? <MarketItems NFTData={nfts} />:<p>wait for load...</p>}</div> 
      <Title heading={"YOUR LISTED NFTs "} paragraph={"below are your listed nfts..."}/>
      <div>{myNFTs ? <MarketItems NFTData={myNFTs} />:<p>wait for load...</p>}</div>
      </div>
     
    </div>
  );
};

export default author;
