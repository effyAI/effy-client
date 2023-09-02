import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link"; 
import {TbArrowRight, TbPlus } from "react-icons/tb"; 
export default function Dub1click(props: any) {
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
          <div className="bg-gradient-radial-2 rounded-3xl flex flex-col-reverse md:grid md:grid-cols-2 gap-5 md:gap-10 p-5 lg:p-10 xl:p-14">
            <div className="flex items-center justify-center  ">
              <div className="space-y-3 max-w-md">
                <h3 className="text-white 2xl:text-5xl xl:text-4xl md:text-3xl text-2xl xl:leading-snug font-bold text-center md:text-left">
                  Dub with 1 click
                </h3>
                <p className="xl:text-xl md:text-lg text-white/70 font-light sm:leading-[30px] text-center md:text-left">
                  Just easy 3 steps process upload select the language dub and
                  faster rendering in minutes
                </p>
                <div className="relative md:pt-10 flex justify-center md:justify-start">
                  <button className="bg-white rounded-lg py-3.5 px-8 font-bold text-black uppercase flex items-center gap-2">
                    Try this feature <TbArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center items-end">
              <div className="max-w-lg mx-auto rounded-xl overflow-hidden flex flex-col">
                <div className="flex-1 rounded-t-xl overflow-hidden relative">
                  <Image
                    className="object-cover w-full"
                    src="/images/dub-1-click-thumb.png"
                    width={2874}
                    height={1407}
                    loading="eager"
                    priority
                    alt={""}
                  />
                </div>
                <div className="flex gap-2 justify-between bg-dark py-3 px-5 items-center">
                  <div className="flex gap-4 overflow-auto p-1 flex-1 justify-between max-w-[calc(100%-70px)]">
                    <button className="w-12 h-12 shring-0 hover:ring-[#5C9DFE] ring-2 rounded-full ring-transparent ease-in-out duration-300">
                      <Image
                        className=""
                        src="/images/flag-us2.png"
                        width={56.28}
                        height={56.28}
                        loading="eager"
                        priority
                        alt={""}
                      />
                    </button>
                    <button className="w-12 h-12 shring-0 hover:ring-[#5C9DFE] ring-2 rounded-full ring-transparent ease-in-out duration-300">
                      <Image
                        className=""
                        src="/images/flag-in2.png"
                        width={56}
                        height={56}
                        loading="eager"
                        priority
                        alt={""}
                      />
                    </button>
                    <button className="w-12 h-12 shring-0 hover:ring-[#5C9DFE] ring-2 rounded-full ring-transparent ease-in-out duration-300">
                      <Image
                        className=""
                        src="/images/flag-china2.png"
                        width={56}
                        height={56}
                        loading="eager"
                        priority
                        alt={""}
                      />
                    </button>
                    <button className="w-12 h-12 shring-0 hover:ring-[#5C9DFE] ring-2 rounded-full ring-transparent ease-in-out duration-300">
                      <Image
                        className=""
                        src="/images/flag-ksa2.png"
                        width={56}
                        height={56}
                        loading="eager"
                        priority
                        alt={""}
                      />
                    </button>
                    <button className="w-12 h-12 shring-0 hover:ring-[#5C9DFE] ring-2 rounded-full ring-transparent ease-in-out duration-300">
                      <Image
                        className=""
                        src="/images/flag-fr2.png"
                        width={56}
                        height={56}
                        loading="eager"
                        priority
                        alt={""}
                      />
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-12 h-12 shring-0 bg-linear-6 hover:ring-[#5C9DFE] text-white flex justify-center items-center ring-2 rounded-full ring-transparent ease-in-out duration-300 ">
                      <TbPlus size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
