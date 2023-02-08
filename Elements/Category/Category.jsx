import React from "react";
import Image from "next/image";
import { Title } from "../elements-index";
import { BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";

const Category = () => {
  const CategoryArray = [
  
    {
      images: "https://soundex.infura-ipfs.io/ipfs/Qma2CbrUCDFE2oWqbYTvva8UFPs4TJE3sgqoybgqzLqBN5",
      name: "Rock",
    },
    {
      images: "https://soundex.infura-ipfs.io/ipfs/QmXFkAShcK2W6boWmSTS2URYVCzuhoKS2dHaiC6DfhuMdt",
      name: "R&B",
    },
    {
      images: "https://soundex.infura-ipfs.io/ipfs/QmYX6BjEh7nDQ6DJDMu6z5KGUJdtp1dhCwV6bUjCDrE1bZ",
      name: "Reggae",
    }
    
  ];
  return (
    
    <div className={Style.box_category}>
        <Title heading="Browse By category" paragraph= "explore our different categories"/>
      <div className={Style.category}>
        {CategoryArray.map((el, i) => (
          <div className={Style.category_box} key={i + 1}>
            <Image
              src={el.images}
              className={Style.category_box_img}
              width = {350}
              height= {150}

              alt="Background image"
            />

            <div className={Style.category_box_title}>
              <span>
                <BsCircleFill />
              </span>
              <div className={Style.category_box_title_info}>
                <h4>{el.name}</h4>
                <small>{i + 1}995 NFTS</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
