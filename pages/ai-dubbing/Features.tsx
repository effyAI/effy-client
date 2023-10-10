import React, {useRef, useEffect}  from "react";
import Image from "next/image";
import Link from "next/link";
 
// const { useRef, useEffect } = React;



const features = [
    {
      title: "Reach a Wider Audience ",
      subtitle: "Expand Your Global Reach",
      descrip:"Transform your existing videos into multiple languages using AI, without the need for costly processes, equipment, or talent. Instantly make your content accessible to a global audience with the premier AI dubbing app.",    
      DetialDirction: "order-2",
      button: "Try it yourself",
      image: "/images/ai-dubbing-1-1.png",
      imgDirction: "order-1 md:order-2 lg:justify-end",
      glow: "hidden",
    },
  
    {
      title: "No Learning Curve Required",
      subtitle: "Simplicity at Its Best:",
      descrip: "Video dubbing is now a breeze with effyDUB. It's a member of our AI tool suite engineered to simplify intricate tasks. Easily dub your videos by uploading your script in one language, and witness it automatically translated into your preferred languages. ",
      DetialDirction: "order-2",   
      button: "Try it yourself",
      image: "/images/ai-dubbing-2.png",
      imgDirction: "order-1 lg:justify-start",
      glow: "top-1/2 -translate-y-1/2 -right-1/3",
    },
    {
      title: "Customize with speakers",
      subtitle: "Realistic Text To Speech AI Voices",
      descrip: "Once you are satisfied with the AI Dubbing results, it's time to bring your project to the world. With just a click, download the high-quality audio file, ready to be integrated into your marketing video, podcast episode, or e-learning content. ",
      DetialDirction: "order-2 md:order-1",
      button: "Try it yourself",
      image: "/images/ai-dubbing-3.png",
      imgDirction: "order-1 md:order-2 lg:justify-end",
      glow: "top-1/2 -translate-y-1/2 -right-1/3",
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
                            <h2 className="font-4xl font-semibold text-white/70 text-center md:text-left">{item.subtitle}</h2>
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
