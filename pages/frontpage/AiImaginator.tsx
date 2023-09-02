import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {IconArrowUpRight} from "@tabler/icons-react";
export default function AiImaginator(props: any) {
  const swiperRef = useRef();
  return (
    <>
      <section className="relative">
        <div className="absolute -top-48 xl:hidden ">
          <Image
            className="object-cover "
            src="/images/bg-circle-glow.svg"
            width={1200}
            height={1200}
            loading="eager"
            alt="bg-circle-glow.svg"
          />
        </div>
        <div className="px-4 mx-auto 2xl:w-9/12 xl:w-5/6 ">
          <div className="relative space-y-7 xl:space-y-14 border border-white/10 rounded-3xl p-4 md:border-none md:p-0 md:rounded-none">
          <div className="space-y-3 ">
            <h3 className="text-white xl:text-4xl md:text-3xl text-2xl xl:leading-snug font-bold text-center md:text-left">
              Ai imaginator Right it well
            </h3>
            <p className="xl:text-xl md:text-lg text-white/70 font-light sm:leading-[30px] text-center md:text-left">
              All you need is ether your small clip or a picture
            </p>
          </div>

          <div className="flex flex-col sm:grid sm:grid-cols-12 gap-5">
            <div className="overflow-hidden col-span-8">
                <Image
                  className="object-cover w-full"
                  src="/images/ai-imaginator-thumb-1.png"
                  width={2427}
                  height={957}
                  loading="eager"
                  priority
                  alt={""}
                />
            </div>
            <div className="space-y-3 col-span-4 flex flex-col">
            <Image
                  className="object-cover w-full flex-1"
                  src="/images/ai-imaginator-thumb-2.png"
                  width={2427}
                  height={957}
                  loading="eager"
                  priority
                  alt={""}
                />
                <div className="relative flex justify-center md:justify-start flex-1">
                  <button className="bg-white rounded-xl lg:rounded-3xl py-3 lg:py-5 px-8 xl:text-xl font-bold text-black uppercase flex justify-center items-center gap-1 w-full text-center">
                    <span>Try Free</span><IconArrowUpRight size={24} />
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
