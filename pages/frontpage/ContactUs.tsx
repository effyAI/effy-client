import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {TbMapPin, TbPhoneCall, TbMail, TbWorld } from "react-icons/tb"; 
import {RiFacebookFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri"; 
export default function ContactUs(props: any) {
  const swiperRef = useRef();
  return (
    <>
      <section className="relative pb-20">
        <div className="absolute bottom-[-32rem] -right-1/4 ">
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
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-5 md:gap-10 items-center">
            <div className="w-full">
              <div className="space-y-4 md:space-y-7">
                <h1 className="text-white xl:text-4xl 2xl:text-6xl text-3xl font-semibold xl:leading-[4rem] leading-[3rem] hidden md:block  ">
                Contact Us
                </h1>
                <p className="w-full mx-auto text-base text-white/70 lg:text-lg xl:text-2xl 2xl:text-3xl xl:leading-snug hidden md:block">
                Say something to start a live chat!
                </p>
                <div className="space-y-4">
                    <div className="flex gap-2 items-center">
                        <div className="w-10 shrink-0 text-white">
                            <TbPhoneCall size={30} strokeWidth={1.5} />
                            
                        </div>
                        <p className="w-full mx-auto text-base text-white/70 lg:text-lg md:text-xl 2xl:text-2xl font-medium  ">
                        +1-415- 735-4966
                        </p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-10 shrink-0 text-white">
                            <TbMail size={30} strokeWidth={1.5} /> 
                        </div>
                        <p className="w-full mx-auto text-base text-white/70 lg:text-lg md:text-xl 2xl:text-2xl font-medium  ">
                        enquire@effybiz.com
                        </p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-10 shrink-0 text-white">
                            <TbWorld size={30} strokeWidth={1.5} />                          
                        </div>
                        <p className="w-full mx-auto text-base text-white/70 lg:text-lg md:text-xl 2xl:text-2xl font-medium  ">
                        www.effycontent.com
                        </p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-10 shrink-0 text-white"> 
                            <TbMapPin strokeWidth={1.5} size={30} />
                        </div>
                        <p className="w-full mx-auto text-base text-white/70 lg:text-lg md:text-xl 2xl:text-2xl font-medium  ">
                        340 S Lemon Ave, Walnut, CA 91789, USA
                        </p>
                    </div>
                </div>
                <div className="max-w-sm flex justify-start gap-4">
                    <Link href="javascript:void(0)" className="w-10 h-10 rounded-full border border-white/10 hover:bg-white hover:text-dark ease-in-out duration-300 flex items-center justify-center text-white"><RiFacebookFill size={20} /></Link>
                    <Link href="javascript:void(0)" className="w-10 h-10 rounded-full border border-white/10 hover:bg-white hover:text-dark ease-in-out duration-300 flex items-center justify-center text-white"><RiLinkedinFill size={20} /></Link>
                    <Link href="javascript:void(0)" className="w-10 h-10 rounded-full border border-white/10 hover:bg-white hover:text-dark ease-in-out duration-300 flex items-center justify-center text-white"><RiTwitterFill size={20} /></Link>
                </div>
              </div>
            </div>

            <div className="w-full ">           



               <div className="border border-white/10 rounded-3xl bg-dark p-5 md:p-10 max-w-xl ml-auto mr-0">
               <div className="space-y-3 md:space-y-5">
               <div className="space-y-2 md:space-y-7 md:hidden">
                <h1 className="text-white xl:text-4xl 2xl:text-6xl text-3xl font-semibold xl:leading-[4rem] md:leading-[3rem]  ">
                Contact Us
                </h1>
                <p className="w-full mx-auto text-base text-white/70 lg:text-lg xl:text-2xl 2xl:text-3xl xl:leading-snug">
                Say something to start a live chat!
                </p>
                </div>
                    <input type="text" className="ease-in-out duration-300 w-full py-2 md:py-3 px-5 bg-white/10 rounded border-0  text-white outline-none focus:ring-1 focus:ring-white/20" placeholder="Jhone Doe" />
                    <input type="text" className="ease-in-out duration-300 w-full py-2 md:py-3 px-5 bg-white/10 rounded border-0 text-white outline-none focus:ring-1 focus:ring-white/20" placeholder="1400 141032320" />
                    <input type="email" className="ease-in-out duration-300 w-full py-2 md:py-3 px-5 bg-white/10 rounded border-0  text-white outline-none focus:ring-1 focus:ring-white/20" placeholder="example@gmail.com" />
                    <textarea className="ease-in-out duration-300 w-full py-3 px-5 h-24 md:h-48 bg-white/10 rounded border-0  text-white outline-none focus:ring-1 focus:ring-white/20" placeholder="Message" ></textarea>

                    <div className="flex gap-3 md:items-center">
                        <input type="checkbox" id="tnc" className="shrink-0 w-5 h-5" />
                        <label  className="text-white/70 md:text-lg">I have read and accept the <span className="text-[#0558E2]">Privacy</span> & <span className="text-[#0558E2]">Policy.</span></label>
                    </div>
                    <div className="flex justify-center md:justify-start">
                    <button type="submit" className="block w-full md:w-auto text-sm font-semibold active text-white bg-linear-1 rounded-lg p-px text-center hover:text-white lg:mt-0 font-opensans cursor-pointer transition duration-300 relative uppercase group"><span className="relative block bg-[#0D0C17] group-hover:bg-[#2A2932] rounded-lg px-6 lg:py-3 py-2 ease-in-out duration-300">Submit from</span></button>
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
