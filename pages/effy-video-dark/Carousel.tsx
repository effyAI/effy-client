import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";

const slider = [
  {
    thumb: "/images/product-slider-1.png",
    title: "Try Something with your videos",
    descrip: "In publishing and graphic design, Lorem ipsum is a placeholder",
    link: "javascript:void(0)",
  },
  {
    thumb: "/images/product-slider-2.png",
    title: "Try Something with your Voice",
    descrip: "In publishing and graphic design, Lorem ipsum is a placeholder ",
    link: "javascript:void(0)",
  },
  {
    thumb: "/images/product-slider-3.png",
    title: "Try Something with your Photos",
    descrip: "In publishing and graphic design, Lorem ipsum is a placeholder ",
    link: "javascript:void(0)",
  },
  {
    thumb: "/images/product-slider-2.png",
    title: "Try Something with your Voice",
    descrip: "In publishing and graphic design, Lorem ipsum is a placeholder ",
    link: "javascript:void(0)",
  },
  {
    thumb: "/images/product-slider-1.png",
    title: "Try Something with your videos",
    descrip: "In publishing and graphic design, Lorem ipsum is a placeholder",
    link: "javascript:void(0)",
  }, 
  {
    thumb: "/images/product-slider-2.png",
    title: "Try Something with your Voice",
    descrip: "In publishing and graphic design, Lorem ipsum is a placeholder ",
    link: "javascript:void(0)",
  },
  {
    thumb: "/images/product-slider-3.png",
    title: "Try Something with your Photos",
    descrip: "In publishing and graphic design, Lorem ipsum is a placeholder ",
    link: "javascript:void(0)",
  },
  {
    thumb: "/images/product-slider-2.png",
    title: "Try Something with your Voice",
    descrip: "In publishing and graphic design, Lorem ipsum is a placeholder ",
    link: "javascript:void(0)",
  },
  {
    thumb: "/images/product-slider-1.png",
    title: "Try Something with your videos",
    descrip: "In publishing and graphic design, Lorem ipsum is a placeholder",
    link: "javascript:void(0)",
  },
];

export default function Carousel(props: any) {
  const swiperRef = useRef();
  return (
    <>
      <div className="sm:px-14 relative">
        <Swiper
          className="mySwiper"
          slidesPerView={'auto'}
          spaceBetween={10}
         freeMode={true}
          centeredSlides={false}
          navigation={false}
          modules={[Navigation]}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {slider.map((item, index) => {
            return (
              <SwiperSlide key={index} className="auto-slide">
                <div className="p-1">
                  <div className="bg-linear-3 rounded-xl border border-white/10 p-5 lg:p-10 flex flex-col gap-5">
                    {/* Thumbnail */}
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        className="object-cover h-auto w-full"
                        src={item.thumb}
                        width={500}
                        height={500}
                        loading="eager"
                        alt={item.thumb}
                      />
                    </div>
                    <div className="flex gap-2 lg:gap-7 items-end">
                      <div className="space-y-2">
                        <h3 className="text-xl text-white font-bold">
                          {item.title}
                        </h3>
                        <p className="text-white/70">{item.descrip}</p>
                      </div>
                      <Link
                        href={item.link}
                        className="bg-linear-1 rounded shrink-0 p-px left-0 z-10"
                      >
                        <div className="rounded bg-[#1A1821] flex justify-center items-center flex-1 text-white w-10 h-10">
                          <IconArrowRight className="text-white/80" size={18} />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="hidden sm:block absolute top-1/2 -translate-y-1/2 bg-linear-1 rounded-full shrink-0 p-px left-0 z-10"
        >
          <div className="rounded-full bg-[#1A1821] flex justify-center items-center flex-1 text-white w-10 h-10">
            <IconArrowLeft className="text-white/80" size={18} />
          </div>
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="hidden sm:block absolute top-1/2 -translate-y-1/2 bg-linear-1 rounded-full shrink-0 p-px right-0 z-10"
        >
          <div className="rounded-full bg-[#1A1821] flex justify-center items-center flex-1 text-white w-10 h-10">
            <IconArrowRight className="text-white/80" size={18} />
          </div>
        </button>
      </div>
    </>
  );
}
