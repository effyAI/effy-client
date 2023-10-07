import React from "react";
import Image from "next/image";
import Link from "next/link";
 
const buildtrust = [
  {
    thumb: "/images/buildtrust-thumb-1.png",
    title: "Your privacy is our responsibility",
    descrip: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface",
  
  },
  {
    thumb: "/images/buildtrust-thumb-2.png",
    title: "Effy Ai for All",
    descrip: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface",
 
  },
   
];

export default function BuildTrustBlogs(props: any) {
  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
      {buildtrust.map((item, index) => {
            return (
        <div key={index} className="bg-dark rounded-2xl border border-white/10 p-5 sm:py-10 flex flex-col gap-10">
          {/* Thumbnail */}
          <div className="overflow-hidden rounded-xl">
            <Image
              className="object-cover h-auto w-full"
              src={item.thumb}
              width={500}
              height={500}
              loading="eager"
              alt=""
            />
          </div>

          <div className="space-y-4 text-center">
            <h3 className="text-xl xl:text-3xl text-white font-semibold font-opensans">
            {item.title}
            </h3>
            <p className="text-white/70 text-base">
            {item.descrip}
            </p>
          </div>
        </div>
         );
        })}
      </div>
    </>
  );
}
