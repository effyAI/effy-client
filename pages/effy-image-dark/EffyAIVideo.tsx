import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// const { useRef, useEffect } = React;

const videoTools = [
  {
    title: "YouTube Creator",
    logo: "/images/youtube-creator-logo.png",
  },
  {
    title: "Insta Videos",
    logo: "/images/insta-video-logo.png",
  },
  {
    title: "Snap shots",
    logo: "/images/snapchat-logo.png",
  },
  {
    title: "Vediography",
    logo: "/images/videography-logo.png",
  },
  {
    title: "Insta Videos",
    logo: "/images/insta-video-logo.png",
  },
  {
    title: "Snap shots",
    logo: "/images/snapchat-logo.png",
  },
  {
    title: "Vediography",
    logo: "/images/videography-logo.png",
  },
];
const videoTools2 = [
  {
    title: "Animation",
    logo: "/images/animation-logo.png",
  },
  {
    title: "Tiktok Creator",
    logo: "/images/tiktok-logo.png",
  },
  {
    title: "Film Making",
    logo: "/images/netflix-logo.png",
  },
  {
    title: "Production House",
    logo: "/images/sony-picture-logo.png",
  },
  {
    title: "Tiktok Creator",
    logo: "/images/tiktok-logo.png",
  },
  {
    title: "Film Making",
    logo: "/images/netflix-logo.png",
  },
  {
    title: "Production House",
    logo: "/images/sony-picture-logo.png",
  },
];

export default function EffyAIVideo(props: any) {
  const ltr = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 20000,
    pauseOnHover: true,
    cssEase: "linear",
    rtl: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const rtl = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 20000,
    pauseOnHover: true,
    cssEase: "linear",
    rtl: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="space-y-8">
        <div className="text-white"></div>

        <Slider {...ltr}>
          {videoTools.map((item, index) => {
            return (
              <>
                <div className="px-2 2xl:px-5" key={index}>
                  <div className="shrink-0 bg-dark/40 border border-white/10 rounded-xl px-5 py-7 space-y-3 font-raleway">
                    <div className="flex gap-5 items-center">
                      <div className="w-24">
                        <Image
                          className="object-cover "
                          src={item.logo}
                          width={1200}
                          height={1200}
                          loading="eager"
                          alt={item.logo}
                        />
                      </div>
                      <h3 className="text-xl xl:text-2xl text-white font-bold">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-white text-sm">
                      Let our AI software generate art and images for you
                      instantly! Use our{" "}
                      <Link
                        href="/#"
                        className="underline hover:text-white/70 ease-in-out duration-300"
                      >
                        AI image generator
                      </Link>{" "}
                      and create videos from images.
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>

        <Slider {...rtl}>
          {videoTools2.map((item, index) => {
            return (
              <>
                <div className="px-2 2xl:px-5" key={index}>
                  <div className="shrink-0 bg-dark/40 border border-white/10 rounded-xl px-5 py-7 space-y-3 font-raleway">
                    <div className="flex gap-5 items-center">
                      <div className="w-24">
                        <Image
                          className="object-cover "
                          src={item.logo}
                          width={1200}
                          height={1200}
                          loading="eager"
                          alt={item.logo}
                        />
                      </div>
                      <h3 className="text-xl xl:text-2xl text-white font-bold">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-white text-sm">
                      Let our AI software generate art and images for you
                      instantly! Use our{" "}
                      <Link
                        href="/#"
                        className="underline hover:text-white/70 ease-in-out duration-300"
                      >
                        AI image generator
                      </Link>{" "}
                      and create videos from images.
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
