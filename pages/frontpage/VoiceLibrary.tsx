import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function VoiceLibrary(props: any) {
  const swiperRef = useRef();
  return (
    <>
       <section className="relative">
            <div className="px-4 mx-auto 2xl:w-9/12 xl:w-5/6 relative">
              <div className="bg-linear-3 rounded-2xl border border-white/10 p-3 md:p-5 lg:p-10 xl:p-14 flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-10 xl:gap-14 items-center">
                <div className="relative flex before:absolute md:before:left-[48px] md:before:top-[30px] before:h-[calc(100%-60px)] before:w-[calc(100%-20px)] before:bg-white/5 before:rounded-2xl after:absolute md:after:left-[35px] md:after:top-[15px] after:h-[calc(100%-30px)] after:w-[calc(100%-20px)] after:bg-[#2F2E36] after:rounded-2xl after:shadow-1 h-60 md:h-auto">
                  <div className="rounded-2xl bg-white relative flex-1 z-10 flex justify-center overflow-hidden">
                    <Image
                      className="object-cover w-full"
                      src="/images/home-page-thumb-2.png"
                      width={495}
                      height={489}
                      loading="eager"
                      priority
                      alt={""}
                    />
                  </div>
                </div>
                <div className="relative md:pl-10">
                  <div className="space-y-2 md:space-y-5 xl:space-y-7">
                    <h1 className="text-white font-opensans xl:text-4xl 2xl:text-5xl md:text-3xl text-2xl font-semibold 2xl:leading-[4rem] text-center md:text-left ">
                      Try Voice library It Look Sound More Real
                    </h1>
                    <p className="w-full mx-auto text-base  text-white/70 lg:text-lg  xl:leading-snug font-light text-center md:text-left ">
                      Use your Voice or chose your Voice. Our Ai based voice
                      library take your business to next level
                    </p>
                    <div className="relative py-2 md:pt-5 flex justify-center md:justify-start">
                      <button className="bg-white rounded-lg py-2.5 md:py-3.5 px-8 font-bold text-black uppercase flex items-center gap-2">
                        Try it Yourself
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
