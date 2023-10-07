import React, {useRef, useEffect}  from "react";
import Image from "next/image";
import Link from "next/link";
 
// const { useRef, useEffect } = React;



const features = [
    {
      title: "Text To Image",
      descrip:"Our platform offers intuitive and user-friendly tools to craft compelling content that captures attention and drives action. From creating stunning visuals to crafting persuasive copy, you have everything you need to tell your brand's story effectively.",
      DetialDirction: "order-2 md:order-1",
      features:'#1',
      button: "Try it yourself",
      image: "/images/voice-thumb-1.png",
      imgDirction: "order-1 md:order-2 lg:justify-end",
      glow: "hidden",
    },
  
    {
      title: "Audio to Image",
      descrip: "Our platform offers intuitive and user-friendly tools to craft compelling content that captures attention and drives action. From creating stunning visuals to crafting persuasive copy, you have everything you need to tell your brand's story effectively.",
      DetialDirction: "order-2",
      features:'#2',
      button: "Try it yourself",
      image: "/images/voice-thumb-2.png",
      imgDirction: "order-1 lg:justify-start",
      glow: "top-1/2 -translate-y-1/2 -right-1/3",
    },
    {
      title: "ChatGPT Script",
      descrip: "Our platform offers intuitive and user-friendly tools to craft compelling content that captures attention and drives action. From creating stunning visuals to crafting persuasive copy, you have everything you need to tell your brand's story effectively.",
      DetialDirction: "order-2 md:order-1",
      features:'#3',
      button: "Try it yourself",
      image: "/images/voice-thumb-3.png",
      imgDirction: "order-1 md:order-2 lg:justify-end",
      glow: "top-1/2 -translate-y-1/2 -right-1/3",
    },
     
    {
      title: "Text to Avatar",
      descrip: "Our platform offers intuitive and user-friendly tools to craft compelling content that captures attention and drives action. From creating stunning visuals to crafting persuasive copy, you have everything you need to tell your brand's story effectively",
      DetialDirction: "order-2",
      features:'#4',
      button: "Try it yourself",
      image: "/images/voice-thumb-4.png",
      imgDirction: "order-1 lg:justify-start",
     
    },
     
  ];

export default function Features(props: any) {
   
  return (
    <>
  <div className="space-y-5 md:space-y-20">
                {features.map((item, index) => {
                  return (
                    <>
                      <div className="relative" key={index}>
                        <div className={`absolute ${item.glow}`}>
                          <Image
                            className="object-cover "
                            src="/images/bg-circle-glow.svg"
                            width={1200}
                            height={1200}
                            loading="eager"
                            alt="bg-circle-glow.svg"
                          />
                        </div>
                        <div className="px-4 mx-auto 2xl:w-4/6 xl:w-5/6 relative ">
                          <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-10 2xl:gap-20 items-center border border-white/10 rounded-md p-3 md:p-0 md:border-none md:rounded-none">
                            <div className={`col-span-6 lg:col-span-6 md:space-y-5 ${item.DetialDirction}`} >
                              <div className="bg-white rounded-full py-2 px-5 flex w-32 mx-auto md:ml-0 my-3">
                              <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#DB5C98] to-[#6D3AFF] " > {item.features} Feature</span>  </div>
                              <h3 className="text-white xl:text-4xl 2xl:text-[2.6rem] md:text-3xl text-2xl font-bold text-center md:text-left">
                                {item.title}
                              </h3>
                              <p className="md:text-lg text-white/70 font-light leading-[20px] text-center md:text-left py-2">
                                {item.descrip}
                              </p>
                              <div className="relative pt-5 py-2 lg:pt-5 flex justify-center md:justify-start">
                                <button className="bg-white rounded-lg py-2 lg:py-3.5 md:py-3.5 px-8 font-bold text-black uppercase flex items-center gap-2">
                                  {item.button}
                                </button>
                              </div>
                            </div>
                            <div
                              className={`col-span-6 lg:col-span-6 flex  ${item.imgDirction}`}
                            >
                              <Image
                                className="object-cover "
                                src={item.image}
                                width={700}
                                height={519}
                                loading="eager"
                                alt={item.image}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
    </>
  );
}
