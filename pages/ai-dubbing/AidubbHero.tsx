import Image from "next/image";
import { IconPlayerPlay } from "@tabler/icons-react";
const languageButton = [
  {
    lang: "English",
    flag: "GB",
  },

  {
    lang: "Hindi",
    flag: "IN",
  },
  {
    lang: "Spanish",
    flag: "ES",
  },
  {
    lang: "Chinese",
    flag: "CN",
  },
  
];

export default function Features(props: any) {
  return (
    <>
      <div className="relative flex flex-col lg:grid lg:grid-cols-12 gap-10 items-center min-h-screen pt-10">
        <div className="space-y-5 col-span-5">
          <div className="space-y-3 sm:space-y-5 text-center md:text-left  ">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white tracking-wider xl:leading-snug 2xl:leading-tight">
              Top AI Dubbing for Video & Content Localization
            </h1>
            <p className="md:text-xl text-base  text-white/70">
              Experience the Magic! Easily Transform Your Videos into 20+
              Languages with Just a Few Clips."
            </p>
          </div>
          <div className="relative flex justify-center md:justify-start ">
            <button className="bg-white rounded-full py-3.5 px-10 font-bold text-black uppercase flex items-center gap-2">
              <span className="inline-block">Get Started</span>
            </button>
          </div>
        </div>
        <div className="space-y-5 col-span-7">
          <div className="flex flex-wrap gap-5">
            {languageButton.map((item, index) => {
              return (
                <button className="p-2 flex-1 ease-in-out duration-300 max-w-full bg-white/10 hover:bg-white hover:text-dark rounded backdrop-blur-2xl justify-center items-center gap-1.5 inline-flex text-white text-sm font-normal ">
                  <div className="overlow-hidden w-8 rounded-full">
                    <img
                      src={`https://www.countryflagicons.com/FLAT/32/${item.flag}.png`}
                    />
                  </div>
                  <span>{item.lang}</span>
                </button>
              );
            })}

            <button className="p-2 flex-1 ease-in-out duration-300 max-w-full bg-white/10 hover:bg-white hover:text-dark rounded backdrop-blur-2xl justify-center items-center gap-1.5 inline-flex text-white text-sm font-normal ">
                <span>+20 More</span>
            </button>
          </div>

          <div className="overflow-hidden relative max-w-full">
            <video controls  className="max-w-full"> 
                <source src="/images/video-clip-mp4.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}
