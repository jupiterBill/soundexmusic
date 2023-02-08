import React,{useState,useEffect,useContext} from "react"
import Web3Modal from "web3modal"
import {ethers} from "ethers"
import { useRouter } from "next/router"
import { Marketplaceaddress,ABI } from "./constants"
import axios from "axios"
import {create as ipfsHttpClient} from "ipfs-http-client"
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const projectSecretKey = process.env.NEXT_PUBLIC_API_KEY;
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecretKey}`).toString(
  "base64"
)}`;

const subdomain = "https://soundex.infura-ipfs.io";
const client = ipfsHttpClient({
  host: "infura-ipfs.io",
  port: 5001,
  protocol: "https",
  apiPath: '/api/v0',
  headers: {
    authorization: auth,
  },
});

export const NFTMarketplaceContext = React.createContext();
//SMART CONTRACT INITIALIZATION
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    Marketplaceaddress,
    ABI,
    signerOrProvider
  );
//SMART CONTRACT CONNECTIVITY
const connectWithContract = async ()=>{
    try{
     
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect(); 
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    }
    catch(error)
    {
     console.log("Something went wrong while attempting to connect with smart contract --->" + error)
    }
}
 


export const NFTMarketplaceProvider = ({children}) =>{
    //STATE VARIABLES
    const [currentAccount, setCurrentAccount] = useState("");
    const [openError,setOpenError] = useState(false);
    const [error,setError] = useState("");
    const [accountBalance,setAccountBalance] = useState(0);
    //CHECKING IF WALLET IS CONNECTED OR NOT
    const checkIfWalletConnected = async () => {
      try {
        if (!window.ethereum)
          return setOpenError(true), setError("Install MetaMask");
  
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
  
        if (accounts.length) {
          setCurrentAccount(accounts[0]);
           console.log("account   : "+ accounts[0]);
        } else {
          setError("No Account Found");
          setOpenError(true);
        }
  
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const getBalance = await provider.getBalance(accounts[0]);
        const bal = ethers.utils.formatEther(getBalance);
        setAccountBalance(bal);
      } catch (error) {
        setError("Something wrong while connecting to wallet");
        setOpenError(true);
      }
    };
    
    useEffect(() => {
      checkIfWalletConnected();
    }, []);
    //CONNECT WALLET IF USER IS NOT ALREADY CONNECTED 
    const connectWallet = async () => {
      try {
        if (!window.ethereum) {
          setError("install Metamask");
          setOpenError(true);
        }
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setCurrentAccount(accounts[0]);
        window.location.reload();
      } catch (error) {
        console.log("error while connecting to wallet");
      }
    };
    

    const uploadToIPFS = async (file) => {
      try {
        console.log("function triggered")
        console.log(projectId, " ", projectSecretKey)
        const addedFile = await client.add({ content: file });
        
        const url = `${subdomain}/ipfs/${addedFile.path}`;
        console.log("file added " + url)
        return url;
      } catch (error) {
        setError("Error Uploading to IPFS");
        setOpenError(true);
      }
    };

    const createNFT = async (name, price, backgroundImage,sound, description, router) => {
      console.log("function triggered")
      if (!name || !description || !price || !backgroundImage || !sound)
      return setError("Some Data Is Missing Please Fill in all Data"), setOpenError(true);
      const data = JSON.stringify({ name, description, sound, backgroundImage });
      try {
        const added = await client.add(data);
  
        const url = `https://infura-ipfs.io/ipfs/${added.path}`;
  
        await createSale(url, price);
        router.push("/searchPage");
      } catch (error) {
        console.log(error)
        setError("Error while creating NFT");
        setOpenError(true);
      }
    }

      //--- createSale FUNCTION
  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      console.log(url, formInputPrice, isReselling, id);
      const price = ethers.utils.parseUnits(formInputPrice, "ether");

      const contract = await connectWithContract();

      const listingPrice = await contract.getListingPrice();

      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.resellToken(id, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait();
      console.log("transaction " + transaction.data +" "+ transaction.value+ "  "+ " "+transaction.from+" " +" "+ transaction.hash );
    } catch (error) {
      setError("error while creating sale");
      setOpenError(true);
      console.log(error);
    }
  };

    //--FETCHNFTS FUNCTION

    const fetchNFTs = async () => {
      try {
        if (currentAccount) {
         
          
          const contract = await connectWithContract();
  
          const data = await contract.fetchMarketItems();
           console.log("data :   " + data )
          const items = await Promise.all(
            data.map(
              async ({ tokenId, seller, owner, price: unformattedPrice }) => {
                const tokenURI = await contract.tokenURI(tokenId);
  
                const {
                  data: { backgroundImage, sound, name, description },
                } = await axios.get(tokenURI);
                const price = ethers.utils.formatUnits(
                  unformattedPrice.toString(),
                  "ether"
                );
  
                return {
                  price,
                  tokenId: tokenId.toNumber(),
                  seller,
                  owner,
                  backgroundImage,
                  sound,
                  name,
                  description,
                  tokenURI,
                };
              }
            )
          );
      
        return items
        }
      } catch (error) {
        setError("Error while fetching NFTS");
        setOpenError(true);
        console.log(error);
      }
    };

    useEffect(() => {
      if (currentAccount) {
        fetchNFTs();
      }
    }, []);
     //--FETCHING MY NFT OR LISTED NFTs
     const fetchMyNFTsOrListedNFTs = async (type) => {
      try {
        if (currentAccount) {
        
          const contract = await connectWithContract();
          const data =
            type == "fetchItemsListed"
              ? await contract.fetchItemsListed()
              : await contract.fetchMyNFTs()
          
            console.log("data :   " + data )
          const items = await Promise.all(
            data.map(
              async ({ tokenId, seller, owner, price: unformattedPrice }) => {
                const tokenURI = await contract.tokenURI(tokenId);
                console.log("token URI " + tokenURI)
                const {
                  data: { backgroundImage,sound, name, description },
                } = await axios.get(tokenURI);
                console.log("fetch succesful")
                const price = ethers.utils.formatUnits(
                  unformattedPrice.toString(),
                  "ether"
                );
                
                return {
                  price,
                  tokenId: tokenId.toNumber(),
                  seller,
                  owner,
                  backgroundImage,
                  sound,
                  name,
                  description,
                  tokenURI,
                };
              }
            )
          );
          console.log("items : "+ items)
          return items;
        }
      } catch (error) {
        setError("Error while fetching listed NFTs");
        setOpenError(true);
        console.log(`Error: ${error}`);
      }
    };
    useEffect(() => {
      fetchMyNFTsOrListedNFTs();
    }, []);

  //---BUY NFTs FUNCTION
   const  buyNFT = async (nft) => {
    try {
      const contract = await connectWithContract();
      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });

      await transaction.wait();
      router.push("/author");
    } catch (error) {
      setError("Error While buying NFT");
      setOpenError(true);
    }
  };
    const Main = "Welcome Your Goto place for all things music NFT 🎵🎵🎵...";
    
   return (
    <NFTMarketplaceContext.Provider value={{
      connectWallet,
      createNFT,
      fetchNFTs,
      fetchMyNFTsOrListedNFTs,
      uploadToIPFS,
      buyNFT,
      checkIfWalletConnected,
      createSale,
      currentAccount,
      
      }}>
        {children}
    </NFTMarketplaceContext.Provider>
    
   )
}