import React, {useRef, useEffect}  from "react";
import Image from "next/image";
import Link from "next/link";
import { IconPlayerPlay } from "@tabler/icons-react";
// const { useRef, useEffect } = React;
 

export default function VoiceHero(props: any) {
   
  return (
    <>
 <div className="flex flex-col w-full items-center py-20">
        <div className="w-full space-y-10 lg:space-y-10 max-w-6xl mx-auto">
          <div className="space-y-5 text-center ">
            <h1 className="text-4xl xl:text-5xl   font-bold text-white tracking-wider ">
              EffyAI powered text to voice generator
            </h1>
            <p className="text-lg  text-white/70">
              Generate realistic Text to Speech (TTS) audio using our online AI
              Voice Generator and the best synthetic voices. Instantly convert
              text in to natural-sounding speech and download as MP3 and WAV
              audio files.
            </p>
          </div>
          <div className="relative flex justify-center gap-5 flex-wrap ">
            <button className="bg-white rounded-xl w-52 py-3.5 px-2 font-bold font-raleway text-black uppercase flex items-center justify-center gap-2">
              <span className="inline-block pt-[2px]">let’s start</span>
            </button>
            <button className="bg-linear-1 p-px rounded-xl w-52 font-bold font-raleway text-black uppercase ">
              <span className="bg-dark py-3.5 px-2 rounded-xl flex items-center justify-center gap-2 text-white">
                <IconPlayerPlay className="w-4" />
                <span className="inline-block pt-[2px]">Take a demo</span>
              </span>
            </button>
          </div>
        </div>
        <div className="w-full mt-5 lg:-mt-5">
          <div className="overflow-hidden relative">
            <Image
              className="object-cover w-full rounded-xl"
              src="/images/effy-voice-hero.svg"
              width={612}
              height={610}
              loading="eager"
              alt="effyvideo-hero"
            />
          </div>
        </div>
      </div>
    </>
  );
}
