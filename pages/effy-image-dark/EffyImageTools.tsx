import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// const { useRef, useEffect } = React;

const aiimages = [
  {
    image: "/images/effy-tools-1.png",    
    title: "For Personal Use",
    descrip:"Let our AI software generate art and images for you instantly! Use our AI image generator and create videos from images. Add sound effects, background music, and more! You can also use our AI Script Generator to automatically generate video scripts.",
  }, 
   {
    image: "/images/effy-tools-2.png",    
    title: "Audio to Image",
    descrip: "Let our AI software generate art and images for you instantly! Use our AI image generator and create videos from images. Add sound effects, background music, and more! You can also use our AI Script Generator to automatically generate video scripts.",
    button: "javascript:void(0)",   
      
  },
   {
    image: "/images/effy-tools-3.png",    
    title: "Teaching and learning",
    descrip: "Let our AI software generate art and images for you instantly! Use our AI image generator and create videos from images. Add sound effects, background music, and more! You can also use our AI Script Generator to automatically generate video scripts.",
    button: "javascript:void(0)",   
      
  },

   
];

export default function Features(props: any) {
  return (
    <>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-10 relative z-20">
        {aiimages.map((item, index) => {
          return (
            <>
              
                <div key={index} className="bg-gradient-to-b from-white/10 to-transparent rounded-[10px] border border-white/10 p-5 space-y-6">
                  <div className="bg-white rounded-full flex justify-center items-center ">
                    <Image
                      className="object-cover "
                      src={item.image}
                      width={500}
                      height={500}
                      loading="eager"
                      alt="bg-circle-glow.svg"
                    />
                  </div>
                  <h3 className="text-white text-2xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-base">
                    {item.descrip}
                  </p>

                   
                </div>
             
            </>
          );
        })}
      </div>
    </>
  );
}
