import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const vca = [
  {
    title: "Create your Own Virtual Clone",
    descrip: "All you need is ether your small clip or a picture",
    image: "/images/vca-thumb-1-1.png",
  },
  
  {
    title: "Avatar for All charcter ",
    descrip: "Pick from 50+ character include male female and also made for all age group",
    image: "/images/vca-thumb-2.png",
  },
];
export default function VirtualCloneAllAvtar(props: any) {
  const swiperRef = useRef();
  return (
    <>
      <section className="relative">
        <div className="absolute -top-48 xl:top-1/2 xl:-translate-y-1/2 xl:-right-1/3 ">
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
          <div className="flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-10 xl:gap-14">
            {vca.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-linear-3 rounded-2xl border border-white/10 p-5 lg:p-10 xl:p-12 xl:pb-16 space-y-5 md:space-y-10"
                    >
                  <div className="space-y-3 max-w-sm mx-auto ">
                    <h3 className="text-white xl:text-4xl md:text-3xl text-2xl xl:leading-snug font-bold text-center">
                      {item.title}
                    </h3>
                    <p className="xl:text-xl md:text-lg text-white/70 font-light sm:leading-[30px] text-center">
                      {item.descrip}
                    </p>
                  </div>
                  <div className="rounded-2xl flex-1 flex justify-center overflow-hidden">
                    <Image
                      className="object-cover w-full"
                      src={item.image}
                      width={495}
                      height={489}
                      loading="eager"
                      priority
                      alt={""}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
