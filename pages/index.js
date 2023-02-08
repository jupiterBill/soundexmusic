import React,{useState,useEffect,useContext} from 'react';
import Style from '../styles/index.module.css'

import { Main,Slider,Signup, Title,Category,AudioLive,AudioComp} from '../Elements/elements-index';
import { NFTMarketplaceContext } from '../Context/SoundexContext';
 const Home = ()=>{
  const {fetchNFTs,currentAccount,checkIfWalletConnected} = useContext(NFTMarketplaceContext)
  useEffect(()=>{
    try{
    checkIfWalletConnected();
    }catch(error){
      alert("Error " + error)
    }
  },[])
  return(
    <div className={Style.homepage}>
      <Main />
      <Title heading="Top NFTS..." paragraph = "Check out our most popular top NFTs below.."/>
      <Slider /> 
      <Signup/>
      <Category/>
      {/*
      <LikeProfile/>
      <AudioLive/>
      */}
      
    </div>
  );
}
export default Home;