import React from "react";


//INTERNAL IMPORT
import Style from "./LikeProfile.module.css";

const LikeProfile = () => {
  const imageArray = [
    "https://soundex.infura-ipfs.io/ipfs/QmXFkAShcK2W6boWmSTS2URYVCzuhoKS2dHaiC6DfhuMdt",
     "https://soundex.infura-ipfs.io/ipfs/QmSLYAnmiswCjeehP7SME5VrgB5nW3YqwNDUWDXzyyzUgG",
     "https://soundex.infura-ipfs.io/ipfs/Qma2CbrUCDFE2oWqbYTvva8UFPs4TJE3sgqoybgqzLqBN5"
  ];
  return (
    <div className={Style.like}>
      {imageArray.map((el, i) => (
        <div className={Style.like_box} key={i + 1}>
          
        </div>
      ))}
    </div>
  );
};

export default LikeProfile;