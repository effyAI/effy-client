import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <button className="hidden sm:block absolute top-1/2 -translate-y-1/2 bg-linear-1 rounded-full shrink-0 p-px -left-12 z-10" onClick={onClick}>
    <div className={"rounded-full bg-[#1A1821] flex justify-center items-center flex-1 text-white w-10 h-10"}
   ><IconArrowLeft className="text-white/80" size={18} /></div>
</button>
  );
}
function SampleNextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <button className="hidden sm:block absolute top-1/2 -translate-y-1/2 bg-linear-1 rounded-full shrink-0 p-px -right-12 z-10" onClick={onClick}>
    <div className={"rounded-full bg-[#1A1821] flex justify-center items-center flex-1 text-white w-10 h-10"}>
    <IconArrowRight className="text-white/80" size={18} />
      </div>
    </button>
  );
}
const carousel = {
  infinite: true,
  autoplay: true,
  pauseOnHover: true, 
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        speed:1000,
        
      },
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        speed: 300,
      
      },
    },
    {
      breakpoint: 639,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        speed: 500,
       
      },
    },
  ],
};
 

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
      <Slider {...carousel}>
        
          {slider.map((item, index) => {
            return (
              <div key={index} className="auto-slide">
                <div className="p-2">
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
              </div>
            );
          })}
      </Slider>
        {/* <button
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
        </button> */}
      </div>
    </>
  );
}
