import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero(props: any) {
  const swiperRef = useRef();
  return (
    <>
      <section className="relative pt-16 xl:pt-32">
        <div className="absolute bottom-[-32rem] -left-1/4 ">
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
          <div className="flex flex-col md:grid md:grid-cols-2 gap-5 sm:gap-10 items-center">
            <div className="w-full md:max-w-lg">
              <div className="space-y-2 sm:space-y-4 xl:space-y-7">
                <h1 className="text-white xl:text-5xl 2xl:text-6xl text-4xl font-semibold xl:leading-[4rem] leading-[3rem] text-center md:text-left">
                  Clone your Voice
                </h1>
                <p className="w-full mx-auto text-base  text-white/70 lg:text-lg xl:text-3xl xl:leading-snug text-center md:text-left">
                  if you can't speak in All language Your Avatar will
                </p>
                <p className="w-full mx-auto text-base text-white lg:text-lg xl:text-3xl font-medium lg:pt-2 text-center md:text-left">
                  Speak 120 language in your voice
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center rounded-3xl overflow-hidden">
              <Image
                className="object-cover w-full"
                src="/images/home-hero-2.gif"
                width={588}
                height={571}
                loading="eager"
                priority
                alt={""}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
