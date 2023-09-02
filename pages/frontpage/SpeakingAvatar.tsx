import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SpeakingAvatar(props: any) {
  const swiperRef = useRef();
  return (
    <>
      <section className="relative">
        <div className="absolute -top-48 xl:top-1/2 xl:-translate-y-1/3 xl:-left-64 ">
          <Image
            className="object-cover "
            src="/images/bg-circle-glow.svg"
            width={1200}
            height={1200}
            loading="eager"
            alt="bg-circle-glow.svg"
          />
        </div>
        <div className="px-4 mx-auto 2xl:w-9/12 xl:w-5/6 relative">
          <div className="bg-linear-5 border border-white/10 rounded-2xl flex flex-col-reverse md:grid md:grid-cols-2 gap-5 md:gap-10">
            <div className="p-5 pt-0 md:pt-5 lg:p-10 xl:p-14 flex items-center justify-center  ">
              <div className="space-y-3 ">
                <h3 className="text-white xl:text-4xl md:text-3xl text-2xl xl:leading-snug font-bold  text-center md:text-left">
                  Speaking Avatar
                </h3>
                <p className="xl:text-xl md:text-lg text-white/70 font-light sm:leading-[30px]  text-center md:text-left">
                  All you need is ether your small clip or a picture
                </p>
                <div className="relative md:pt-5 flex justify-center md:justify-start">
                  <button className="bg-white rounded-lg py-3.5 px-8 font-bold text-black uppercase flex items-center gap-2">
                    Take a demo
                  </button>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center items-end">
              <div className="max-w-md mx-auto h-80 overflow-hidden md:h-auto">
                <Image
                  className="object-cover h-full w-full"
                  src="/images/speaking-avtar.png"
                  width={1293}
                  height={1400}
                  loading="eager"
                  priority
                  alt={""}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
