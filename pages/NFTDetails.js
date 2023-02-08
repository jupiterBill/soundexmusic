import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT
//import { Button, Category, Brand } from "../components/componentsindex";
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage";

//IMPORT SMART CONTRACT DATA
//import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
const NFTDetails = () => {
  //const { currentAccount } = useContext(NFTMarketplaceContext);

  const [nfts, setNfts] = useState({
    backgroundImage:"",
    tokenId: "",
    name: "",
    sound:"",
    owner: "",
    price: "",
    seller: "",
  });

  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    setNfts(router.query);
  }, [router.isReady]);

  return (
    <div>
      <NFTDetailsPage nft={nfts} />
      
    </div>
  );
};

export default NFTDetails;
