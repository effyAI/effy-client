import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
export default function Advisement(props: any) {
  const swiperRef = useRef();
  return (
    <>
      <section className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <Image
            className="object-cover "
            src="/images/bg-circle-glow.svg"
            width={1200}
            height={1200}
            loading="eager"
            alt="bg-circle-glow.svg"
          />
        </div>
        <div className="px-4 mx-auto 2xl:w-9/12 xl:w-5/6">
          <div className="relative space-y-7 xl:space-y-14 border border-white/10 rounded-3xl p-4 md:border-none md:p-0 md:rounded-none">
          <div className="space-y-3 ">
            <h3 className="text-white xl:text-4xl md:text-3xl text-2xl xl:leading-snug font-bold text-center">
              Make a Advisement for Entertainment
            </h3>
            <p className="xl:text-xl md:text-lg text-white/70 font-light sm:leading-[30px] text-center">
              you can make 30 sec to 3 min ads with advance integrated
              artificial intelligence
            </p>
          </div>
          <div className="overflow-hidden max-w-4xl 2xl:max-w-6xl mx-auto">
            <Image
              className="object-cover w-full"
              src="/images/advisement-thumb.png"
              width={2874}
              height={1407}
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
