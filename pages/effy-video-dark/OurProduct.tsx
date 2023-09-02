import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconMichelinBibGourmand,
  IconMicrophone,
  IconLanguageKatakana,
  IconBrandSoundcloud,
  IconUsersGroup,
  IconPhoto,
  IconFileInfinity,
  IconUsers,
  IconArrowRight,
} from "@tabler/icons-react";
// Import Swiper React components

const products = [
  {
    thumb: "/images/ourProduct-graphic-1.svg",
    upline: "Voice AI based",
    title: "Clone your Voice",
    iconbg: "bg-[#FCC979]",
    icon: <IconMicrophone strokeWidth={1.25} size={40} />,
    link: "javascript:void(0)",
  },
  {
    thumb: "/images/ourProduct-graphic-2.svg",
    upline: "Voice AI based",
    title: "Dub Your Video",
    iconbg: "bg-[#DD81EB]",
    icon: <IconLanguageKatakana strokeWidth={1.25} size={40} />,
    link: "javascript:void(0)",
  },
  {
    thumb: "/images/ourProduct-graphic-3.svg",
    upline: "Voice AI based",
    title: "Create you Own Avatar",
    iconbg: "bg-[#8BB2F9]",
    icon: <IconMichelinBibGourmand strokeWidth={1.25} size={40} />,
    link: "javascript:void(0)",
  },
  {
    thumb: "/images/ourProduct-graphic-4.svg",
    upline: "Voice AI based",
    title: "Avatar for All",
    iconbg: "bg-[#94DEC5]",
    icon: <IconUsersGroup strokeWidth={1.25} size={40} />,
    link: "javascript:void(0)",
  },
  {
    thumb: "/images/ourProduct-graphic-5.svg",
    upline: "Voice AI based",
    title: "Make you Own Addvitisment",
    iconbg: "bg-[#9773FE]",
    icon: <IconBrandSoundcloud strokeWidth={1.25} size={40} />,
    link: "javascript:void(0)",
  },
  {
    thumb: "/images/ourProduct-graphic-6.svg",
    upline: "Voice AI based",
    title: "Imaginator for Text",
    iconbg: "bg-[#10A37F]",
    icon: <IconPhoto strokeWidth={1.25} size={40} />,
    link: "javascript:void(0)",
  },
  {
    thumb: "/images/ourProduct-graphic-7.svg",
    upline: "Voice AI based",
    title: "Lip Sync",
    iconbg: "bg-[#4285F4]",
    icon: <IconFileInfinity strokeWidth={1.25} size={40} />,
    link: "javascript:void(0)",
  },
  {
    thumb: "/images/ourProduct-graphic-8.svg",
    upline: "Voice AI based",
    title: "Create your Virtual clone",
    iconbg: "bg-[#FF627A]",
    icon: <IconUsers strokeWidth={1.25} size={40} />,
    link: "javascript:void(0)",
  },
];

export default function OurProduct(props: any) {
  return (
    <>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10">
        {products.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-linear-3 rounded-xl border border-white/10 p-5 lg:p-10 flex flex-col gap-10 overflow-hidden relative"
            >
              {/* graphic */}
              <div className="absolute bottom-0 right-0">
                <Image
                  className="object-cover w-auto h-auto"
                  src={item.thumb}
                  width={150}
                  height={150}
                  loading="eager"
                  alt="effyvideo-hero"
                />
              </div>
              <div className="relative flex-1 flex flex-col space-y-14 lg:space-y-20">
                <div className="flex flex-col space-y-8 flex-1">
                  <div
                    className={`rounded w-20 h-20 flex justify-center items-center ${item.iconbg}`}
                  >
                    {item.icon}
                  </div>
                  <div className="space-y-3">
                    <p className="text-white/70 font-medium">{item.upline}</p>
                    <h3 className="text-2xl text-white font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="">
                  <Link
                    href={`${item.link}`}
                    className="inline-flex gap-2 text-white tracking-wide"
                  >
                    <span>
                      <u>T</u>ry Now
                    </span>
                    <IconArrowRight className="w-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
