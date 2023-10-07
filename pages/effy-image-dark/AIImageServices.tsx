import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// const { useRef, useEffect } = React;

const aiimages = [
  {
    image: "/images/video-players.png",    
    title: "Text To Image",
    descrip:"Unleash Data-Driven Insights with AI to gain Actionable Insights for Optimal Performance",
    button: "javascript:void(0)",
    
      
  }, 
   {
    image: "/images/profile.png",    
    title: "Audio to Image",
    descrip: "Unleash Data-Driven Insights with AI to gain Actionable Insights for Optimal Performance",
    button: "javascript:void(0)",   
      
  },
   {
    image: "/images/returning-visitor.png",    
    title: "ChatGPT Script ",
    descrip: "Unleash Data-Driven Insights with AI to gain Actionable Insights for Optimal Performance",
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
              
                <div key={index} className="bg-gradient-to-b from-white/10 to-transparent rounded-[10px] border border-white/10 py-10 p-5 space-y-6">
                  <div className="bg-white rounded-full w-20 h-20 flex justify-center items-center ">
                    <Image
                      className="object-cover "
                      src={item.image}
                      width={50}
                      height={50}
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

                  <Link
                    className="inline-flex gap-2 text-white hover:text-pink-500 tracking-wide"
                    href={item.button}
                  >
                    <span>Try Now</span>{" "}
                  </Link>
                </div>
             
            </>
          );
        })}
      </div>
    </>
  );
}
