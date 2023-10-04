import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconPlayerPlay } from "@tabler/icons-react";
// const { useRef, useEffect } = React;

export default function VideoHero(props: any) {
  return (
    <>
      <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-10 w-full items-center ">
        <div className="col-span-6 w-full space-y-7 sm:space-y-10 lg:space-y-14 2xl:space-y-16">
          <div className="space-y-3 sm:space-y-5 text-center md:text-left  ">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white tracking-wider xl:leading-snug 2xl:leading-tight">
              Some of our cool videos feature who stand apart You !
            </h1>
            <p className="md:text-xl text-base  text-white/70">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly 
            </p>
          </div>
          <div className="relative flex justify-center md:justify-start">
            <button className="bg-white rounded-full py-3.5 px-12 font-bold text-black uppercase flex items-center gap-2">
              <span className="inline-block">Create Now</span>
              <IconPlayerPlay className="w-4" />
            </button>
          </div>
        </div>
        <div className="col-span-6 w-full">
          <div className="bg-linear-1 rounded-xl p-px overflow-hidden relative">
            <Image
              className="object-cover w-full rounded-xl"
              src="/images/text-to-video-thumb-2.png"
              width={612}
              height={610}
              loading="eager"
              alt="effyvideo-hero"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <p className="text-white font-bold text-3xl 2xl:text-5xl">
                Text to Videos
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
