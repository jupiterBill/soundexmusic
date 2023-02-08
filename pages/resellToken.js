import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/resellToken.module.css";
import formStyle from "../styles/Form.module.css";
import { Button } from "../Elements/elements-index";
import AudioCard from "../Elements/Audio/AudioCard/AudioCard";
//IMPORT SMART CONTRACT
import { NFTMarketplaceContext } from "../Context/SoundexContext";
const reSellToken = () => {
  const { createSale } = useContext(NFTMarketplaceContext);
  const [image, setImage] = useState("");
  const [price, setPrice] = useState('"');
  const [sound,setSound] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  const { id, tokenURI } = router.query;

  const fetchNFT = async () => {
    if (!tokenURI) return;

    const { data } = await axios.get(tokenURI);

    setImage(data.backgroundImage);
    setSound(data.sound);
  };

  useEffect(() => {
    fetchNFT();
  }, [id]);

  const resell = async () => {
    try {
      await createSale(tokenURI, price, true, id);
      router.push("/creator");
    } catch (error) {
      console.log("Error while resell", error);
    }
  };
  return (
    <div className={Style.reSellToken}>
      <div className={Style.reSellToken_box}>
        <h1>ReSell Your Token, Set Price</h1>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="name">Price</label>
          <input
            type="number"
            min={1}
            placeholder="reSell price"
            className={formStyle.Form_box_input_userName}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className={Style.reSellToken_box_image}>
          {image && (
            <AudioCard src={sound}
            name = {name}
            price= {price}
            tokenId= {id} 
            backgroundImage ={image}/>
          )}
        </div>

        <div className={Style.reSellToken_box_btn}>
          <Button btnName="Resell NFT" handleClick={() => resell()} />
        </div>
      </div>
    </div>
  );
};

export default reSellToken;
