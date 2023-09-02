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
  const [selectedTag, setSelectedTag] = useState(false);
  const [zoomdd, setZoomdd] = useState(false);
  const [selectSize, setSelectSize] = useState(false);


  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

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

  const onSelectFile = (e) => {
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
        {/* <label
          className="border border-dashed border-white/10 p-10 rounded-xl bg-[#202124]/20 space-y-8 cursor-pointer block"
          for="fileupload"
          >
          
          {selectedFile && (
            <span className="flex justify-center items-center max-w-full w-80 mx-auto rounded overflow-hidden">
              <Image
                className="object-cover w-full"
                src={preview}
                width={582}
                height={516}
                loading="eager"
                alt={""}
              />
            </span>
          )}
          <span className="space-y-2 block">
            <span className="text-center block text-xl text-[#B398FF] flex justify-center gap-1 items-center cursor-pointer">
              <input
                type="file"
                className="hidden"
                id="fileupload"
                onChange={onSelectFile}
              />
              <TbUpload size={20} />
              <p>upload Image</p>
            </span>
            <span className="text-white/70 text-center block">
              Upload png, jpg, svg , webp or drag an image here
            </span>
          </span>
        </label> */}

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
