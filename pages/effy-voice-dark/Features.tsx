import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// const { useRef, useEffect } = React;

const features = [
  {
    title: "Text to Voice",
    descrip:
      "Give voice to your words. Choose a voice from 200+ characters. Voice for 120+ Languages. Input is English characters only.",
    DetialDirction: "order-2 md:order-1",
    button: "Try it yourself",
    image: "/images/txttoVoice.png",
    imgDirction: "order-1 md:order-2 lg:justify-end",
    glow: "hidden",
  },

  {
    title: "Voice Cloning",
    descrip:
      "Faster voice cloning with just 15 sec of audio. Save your cloned voice here for anytime use. Clone in 120+ languages.",
    DetialDirction: "order-2",
    button: "Try it yourself",
    image: "/images/voiceCloning.png",
    imgDirction: "order-1 lg:justify-start",
    glow: "top-1/2 -translate-y-1/2 -right-1/3",
  },
  {
    title: "Voice library",
    descrip:
      "Unleash your creativity from the Voice Library. Easy filter based selection of voices. filter based on the country and its regional languages, gender selection, and Age.",
    DetialDirction: "order-2 md:order-1",
    button: "Try it yourself",
    image: "/images/voiceLibrary.png",
    imgDirction: "order-1 md:order-2 lg:justify-end",
    glow: "top-1/2 -translate-y-1/2 -left-1/3",
  },
   
];

export default function Features(props: any) {
  return (
    <>
      <div className="space-y-14 md:space-y-20">
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
                <div className="px-4 mx-auto 2xl:w-4/6 xl:w-5/6 relative">
                  <div className="flex flex-col md:grid md:grid-cols-12 gap-7 md:gap-10 2xl:gap-20 items-center">
                    <div
                      className={`col-span-6 lg:col-span-4 md:space-y-5 ${item.DetialDirction}`}
                    >
                      <h3 className="text-white xl:text-4xl 2xl:text-[2.6rem] md:text-3xl text-2xl font-bold text-center md:text-left">
                        {item.title}
                      </h3>
                      <p className="md:text-lg text-white/70 font-light   text-center md:text-left">
                        {item.descrip}
                      </p>
                      <div className="relative pt-3 lg:pt-5 flex justify-center md:justify-start">
                        <button className="bg-white rounded-lg py-3.5 px-8 font-bold text-black uppercase flex items-center gap-2">
                          {item.button}
                        </button>
                      </div>
                    </div>
                    <div
                      className={`col-span-6 lg:col-span-8 flex  ${item.imgDirction}`}
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
