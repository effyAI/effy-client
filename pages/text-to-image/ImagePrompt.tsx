import Image from "next/image";
import React, { useState, useEffect } from "react";
// import VoiceToText from './VoiceToText'
import {
  
  TbChevronDown,
  TbRotateClockwise,
  TbDownload,
  TbUpload,
 
} from "react-icons/tb";
const fileTypes = ["JPEG", "PNG", "GIF"];
const tags = [
  {
    label: "Cinematic",
    // select:true,
    target: "",
  },
  {
    label: "Cities",
    // select:false,
    target: "",
  },
  {
    label: "Science Fiction",
    // select:false,
    target: "",
  },
  {
    label: "Fantasy",
    // select:false,
    target: "",
  },
  {
    label: "Horror",
    // select:false,
    target: "",
  },
  {
    label: "Romance",
    // select:false,
    target: "",
  },
  {
    label: "Cyberpunk",
    // select:false,
    target: "",
  },
  {
    label: "Comedy",
    // select:false,
    target: "",
  },
  {
    label: "Comedy",
    // select:false,
    target: "",
  },
];

export default function ImagePrompt(props: any) {
  const [selectedTag, setSelectedTag] = useState<boolean>(false);
 
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [preview, setPreview] = useState<string | undefined>(undefined);
  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
  
    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      <div className="space-y-5 sm:space-y-10 sm:pt-5"> 

      {/* <VoiceToText /> */}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 xl:gap-3 ">
          {tags.map((item, index) => {
            return (
              <button
                onClick={(index) => {
                  index.preventDefault();
                  setSelectedTag(!selectedTag);
                }}
                key={index}
                className={
                  "rounded-full border py-2 px-5 text-center flex-1 whitespace-nowrap text-white/70 ease-in-out duration-300 text-sm xl:text-base " +
                  (selectedTag
                    ? "border-white/10 bg-purple/10"
                    : "bg-white/10 border-transparent hover:bg-white/5")
                }
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* After Click on image to generate new variant result */}
        <div className="grid grid-cols-5 gap-3">
          <div className="overflow-hidden flex relative group">
            <Image
              className="object-cover w-full"
              src="/images/variant-1.png"
              width={215}
              height={249}
              loading="eager"
              alt={""}
            />
            
          </div>
          <div className="overflow-hidden flex relative group">
            <Image
              className="object-cover w-full"
              src="/images/variant-2.png"
              width={215}
              height={249}
              loading="eager"
              alt={""}
            />
          
          </div>
          <div className="overflow-hidden flex relative group">
            <Image
              className="object-cover w-full"
              src="/images/variant-3.png"
              width={215}
              height={249}
              loading="eager"
              alt={""}
            />
             
          </div>
          <div className="overflow-hidden flex relative group">
            <Image
              className="object-cover w-full"
              src="/images/variant-4.png"
              width={215}
              height={249}
              loading="eager"
              alt={""}
            />
           
          </div>
          <div className="overflow-hidden flex relative group">
            <Image
              className="object-cover w-full"
              src="/images/variant-2.png"
              width={215}
              height={249}
              loading="eager"
              alt={""}
            />
             
          </div>
          <div className="overflow-hidden flex relative group">
            <Image
              className="object-cover w-full"
              src="/images/variant-4.png"
              width={215}
              height={249}
              loading="eager"
              alt={""}
            />
             
          </div>
          <div className="overflow-hidden flex relative group">
            <Image
              className="object-cover w-full"
              src="/images/variant-3.png"
              width={215}
              height={249}
              loading="eager"
              alt={""}
            />
            
          </div>
          <div className="overflow-hidden flex relative group">
            <Image
              className="object-cover w-full"
              src="/images/variant-2.png"
              width={215}
              height={249}
              loading="eager"
              alt={""}
            />
             
          </div>
          <div className="overflow-hidden flex relative group">
            <Image
              className="object-cover w-full"
              src="/images/variant-3.png"
              width={215}
              height={249}
              loading="eager"
              alt={""}
            />
             
          </div>
          <div className="overflow-hidden flex relative group">
            <Image
              className="object-cover w-full"
              src="/images/variant-1.png"
              width={215}
              height={249}
              loading="eager"
              alt={""}
            />
            
          </div>
        </div>

        
      </div>
    </>
  );
}
