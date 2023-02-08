import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
//INTRNAL IMPORT
import Style from "./Dropzone.module.css";

import AudioCard from "../../Elements/Audio/AudioCard/AudioCard";

const DropZone = ({
  title,
  heading,
  subHeading,
  name,
  website,
  description,
  royalties,
  fileSize,
  category,
  properties,
  uploadToIPFS,
  setBackgroundImage,
  setSound
}) => {
  const [fileUrl, setFileUrl] = useState(null);
  const [soundUrl,setSoundUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length !== 2) {
    console.error("Please select only two files, one image and one sound file.");
    alert("Please select only two files, one image and one sound file.")
    return;
    }
    
    const imageFile = acceptedFiles.find((file) => file.type.startsWith("image/"));
    const soundFile = acceptedFiles.find((file) => file.type.startsWith("audio/"));
    
    if (!imageFile || !soundFile) {
    console.error("Please select one image file and one sound file.");
    alert("Please select one image file and one sound file.")
    return;
    }
    
    const imageUrl = await uploadToIPFS(imageFile);
    const soundUrl = await uploadToIPFS(soundFile);
    setFileUrl(imageUrl);
    setBackgroundImage(imageUrl);
    setSoundUrl(soundUrl);
    setSound(soundUrl);
    console.log(imageUrl, soundUrl);
    });
    
    const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ["image/", "audio/"],
    maxSize: 5000000,
    });
  return (
    <div className={Style.DropZone}>
      <div className={Style.DropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.DropZone_box_input}>
          <p>{title}</p>
          <div className={Style.DropZone_box_input_img}>
            <Image
              src={"https://soundex.infura-ipfs.io/ipfs/QmPTLoQ99xosh8NYiAXAngTuaHVK4FSwVBEFJUEiC6AbjV"}
              alt="upload"
              width={100}
              height={100}
              objectFit="contain"
              className={Style.DropZone_box_input_img_img}
            />
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>

      {fileUrl && soundUrl &&(
        <aside className={Style.DropZone_box_aside}>
          <div className={Style.DropZone_box_aside_box}>
          <AudioCard src={soundUrl}
         name = {name} 
         backgroundImage = {fileUrl}
         price = {""}
         tokenId={""}
         />

            <div className={Style.DropZone_box_aside_box_preview}>
              <div className={Style.DropZone_box_aside_box_preview_one}>
                <p>
                  <samp>NFT Name:</samp>
                  {name || ""}
                </p>
                <p>
                  <samp>Website:</samp>
                  {website || ""}
                </p>
              </div>

              <div className={Style.DropZone_box_aside_box_preview_two}>
                <p>
                  <span>Description</span>
                  {description || ""}
                </p>
              </div>

              <div className={Style.DropZone_box_aside_box_preview_three}>
                <p>
                  <span>Royalties</span>
                  {royalties || ""}
                </p>
                <p>
                  <span>FileSize</span>
                  {fileSize || ""}
                </p>
                <p>
                  <span>Properties</span>
                  {properties || ""}
                </p>
                <p>
                  <span>Category</span>
                  {category || ""}
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DropZone;
