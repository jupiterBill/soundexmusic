import React, { useEffect, useState, useContext } from "react";

//INTRNAL IMPORT
import Style from "../styles/searchPage.module.css";
import { SearchBar } from "../SearchPage/SearchBarIndex";

import MarketItems from "../MarketItems/MarketItems";


//SMART CONTRACT IMPORT
//import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
import { NFTMarketplaceContext } from "../Context/SoundexContext";
const searchPage = () => {
  const {fetchNFTs,currentAccount} = useContext(NFTMarketplaceContext)
  const [nfts, setNfts] = useState([]);
    const [nftsCopy, setNftsCopy] = useState([]);
  useEffect(() => {
    
    try {
      
      
      fetchNFTs().then((items) => {
        //console.log(JSON.stringify(items, null, 2))
        setNfts(items)
        setNftsCopy(items)
        //console.log("items", items);
    
      });
    } catch (error) {
      console.log(error)
    }
  }, [currentAccount]);
 
 
  const onHandleSearch = (value) => {
    const filteredNFTS = nfts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNFTS.length === 0) {
      setNfts(nftsCopy);
    } else {
      setNfts(filteredNFTS);
    }
  };

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  };
  /*const { fetchNFTs, setError, currentAccount } = useContext(
    NFTMarketplaceContext
  );
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    try {
      if (currentAccount) {
        fetchNFTs().then((items) => {
          setNfts(items.reverse());
          setNftsCopy(items);
          console.log(nfts);
        });
      }
    } catch (error) {
      setError("Please reload the browser", error);
    }
  }, []);
 
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);
  const onHandleSearch = (value) => {
    const filteredNFTS = nfts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNFTS.length === 0) {
      setNfts(nftsCopy);
    } else {
      setNfts(filteredNFTS);
    }
  };

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  };*/


  // const collectionArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  // ];
  return (
    <div className={Style.searchPage}>
      <SearchBar
        onHandleSearch={onHandleSearch}
        onClearSearch={onClearSearch}
      />
    
      {nfts ? <MarketItems NFTData={nfts}/> : <p>Loading please wait...</p>}
      
    </div>
  );
};

export default searchPage;
