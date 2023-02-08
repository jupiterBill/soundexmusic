import React,{useContext,useState,useEffect} from "react";

import Style from "../styles/collection.module.css"
import MarketItems from "../MarketItems/MarketItems";
import { NFTMarketplaceContext } from "../Context/SoundexContext";

const collection = ()=>{
    const {fetchNFTs,currentAccount} = useContext(NFTMarketplaceContext)
    
     const [nfts, setNfts] = useState([]);
     const [nftsCopy, setNftsCopy] = useState([]);
     
     useEffect(() => {
      try {
        
        
        fetchNFTs().then((items) => {
          //console.log(JSON.stringify(items, null, 2))
          setNfts(items)
          //console.log("items", items);
      
        });
      } catch (error) {
        console.log(error)
      }
    }, [currentAccount]);

    useEffect(() => {
      console.log(nfts);
    }, [nfts]);
   
    
    return (
        <div className={Style.collectionMain}>
           {nfts? <MarketItems NFTData={nfts} />:<p>Please wait while NFT is Loading....</p>}
            {
               /* audios.map((item )=><AudioCard src={"https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1"}/>)*/
            }
        </div>
    )

    
}
export default collection