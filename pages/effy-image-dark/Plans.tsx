import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    IconCheck
} from "@tabler/icons-react";
// Import Swiper React components

 

export default function Plans(props: any) {
  return (
    <>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 md:items-end">
         <div className="bg-dark rounded-xl border border-white/10 p-5 lg:p-10 flex flex-col gap-8 overflow-hidden relative">
            <div className="space-y-3">
                <h3 className="text-2xl text-[#FCC979] font-opensans">Growth</h3>
                <p className="text-white/70">Best suited for brands under 50k visitors/month</p>
                <p className="text-sm text-white font-opensans tracking-wider"><span className="text-2xl font-semibold">$<span className="text-3xl"> 59.</span>00</span> month</p>
            </div>
            <div className="relative">
                <Link href="" className="bg-white rounded shrink-0 p-px flex text-center ">
                    <span className="rounded bg-white uppercase text-sm tracking-wider font-bold font-spacemono flex justify-center items-center flex-1 text-dark py-3 px-5">Get Stared Growth</span>
                </Link>
            </div>
            <ul className="divide-y divide-white/10 space-y-3 border-b border-white/10 pb-3">
                <li className="flex gap-2 items-center pt-3 first-of-type:pt-0">
                    <div className="w-5 h-5 shrink-0 rounded-full flex items-center justify-center bg-[#9773FE]">
                        <IconCheck strokeWidth={2.5} size={15} />
                    </div>
                    <span className="text-white/70">1 device access to work for user</span>
                </li>
                <li className="flex gap-2 items-center pt-3 first-of-type:pt-0">
                <div className="w-5 h-5 shrink-0 rounded-full flex items-center justify-center bg-[#9773FE]">
                        <IconCheck strokeWidth={2.5} size={15} />
                    </div>
                    <span className="text-white/70">500 image generate </span>
                </li>
                <li className="flex gap-2 items-center pt-3 first-of-type:pt-0">
                <div className="w-5 h-5 shrink-0 rounded-full flex items-center justify-center bg-[#9773FE]">
                        <IconCheck strokeWidth={2.5} size={15} />
                    </div>
                    <span className="text-white/70">Render video with 480p, 720p.</span>
                </li>
                <li className="flex gap-2 items-center pt-3 first-of-type:pt-0">
                <div className="w-5 h-5 shrink-0 rounded-full flex items-center justify-center bg-[#9773FE]">
                        <IconCheck strokeWidth={2.5} size={15} />
                    </div>
                    <span className="text-white/70">Easy share with Friends</span>
                </li>
            </ul>
         </div>
         <div className="bg-dark rounded-xl border border-white/10 p-5 lg:p-10 flex flex-col gap-8 overflow-hidden relative pb-10 lg:pb-14">
            <div className="space-y-3">
                <h3 className="text-2xl text-[#9773FE] font-opensans">Scale</h3>
                <p className="text-white/70">Best suited for brands under 50k visitors/month</p>
                <p className="text-sm text-white font-opensans tracking-wider"><span className="text-2xl font-semibold">$<span className="text-3xl"> 159.</span>00</span> month</p>
            </div>
            <div className="relative">
            <Link href="" className="bg-white rounded shrink-0 p-px flex text-center ">
                    <span className="rounded bg-white uppercase text-sm tracking-wider font-bold font-spacemono flex justify-center items-center flex-1 text-dark py-3 px-5">Get Started Scale</span>
                </Link>
            </div>
            <ul className="divide-y divide-white/10 space-y-3 border-b border-white/10 pb-3">
                <li className="flex gap-2 items-center pt-3 first-of-type:pt-0">
                    <div className="w-5 h-5 shrink-0 rounded-full flex items-center justify-center bg-[#9773FE]">
                        <IconCheck strokeWidth={2.5} size={15} />
                    </div>
                    <span className="text-white/70">5 device access to work for user</span>
                </li>
                <li className="flex gap-2 items-center pt-3 first-of-type:pt-0">
                <div className="w-5 h-5 shrink-0 rounded-full flex items-center justify-center bg-[#9773FE]">
                        <IconCheck strokeWidth={2.5} size={15} />
                    </div>
                    <span className="text-white/70">1500 image generate</span>
                </li>
                <li className="flex gap-2 items-center pt-3 first-of-type:pt-0">
                <div className="w-5 h-5 shrink-0 rounded-full flex items-center justify-center bg-[#9773FE]">
                        <IconCheck strokeWidth={2.5} size={15} />
                    </div>
                    <span className="text-white/70">Render video with 720p, 1080p, 4K</span>
                </li>
                <li className="flex gap-2 items-center pt-3 first-of-type:pt-0">
                <div className="w-5 h-5 shrink-0 rounded-full flex items-center justify-center bg-[#9773FE]">
                        <IconCheck strokeWidth={2.5} size={15} />
                    </div>
                    <span className="text-white/70">Easy work with join group.</span>
                </li>
            </ul>
         </div>
         <div className="bg-dark rounded-xl border border-white/10 p-5 lg:p-10 flex flex-col gap-8 overflow-hidden relative">
            <div className="space-y-3">
                <h3 className="text-2xl text-[#94DEC5] font-opensans">Premium</h3>
                <p className="text-white/70">Best suited for brands under 50k visitors/month</p>
                <p className="text-sm text-white font-opensans tracking-wider"><span className="text-2xl font-semibold">$<span className="text-3xl"> 199.</span>00</span> month</p>
            </div>
            <div className="relative">
                <Link href="" className="bg-linear-1 rounded shrink-0 p-px flex text-center ">
                    <span className="rounded bg-dark uppercase text-sm tracking-wider font-bold font-spacemono flex justify-center items-center flex-1 text-white py-3 px-5">Start Free Trial</span>
                </Link>
            </div>
            <ul className="divide-y divide-white/10 space-y-3 border-b border-white/10 pb-3">
                <li className="flex gap-2 items-center pt-3 first-of-type:pt-0">
                    <div className="w-5 h-5 shrink-0 rounded-full flex items-center justify-center bg-[#9773FE]">
                        <IconCheck strokeWidth={2.5} size={15} />
                    </div>
                    <span className="text-white/70">10 device access to work for user.</span>
                </li>
                <li className="flex gap-2 items-center pt-3 first-of-type:pt-0">
                <div className="w-5 h-5 shrink-0 rounded-full flex items-center justify-center bg-[#9773FE]">
                        <IconCheck strokeWidth={2.5} size={15} />
                    </div>
                    <span className="text-white/70">Unlimited Image generation </span>
                </li>
                <li className="flex gap-2 items-center pt-3 first-of-type:pt-0">
                <div className="w-5 h-5 shrink-0 rounded-full flex items-center justify-center bg-[#9773FE]">
                        <IconCheck strokeWidth={2.5} size={15} />
                    </div>
                    <span className="text-white/70">Render asset in 4k and 8k.</span>
                </li>
                <li className="flex gap-2 items-center pt-3 first-of-type:pt-0">
                <div className="w-5 h-5 shrink-0 rounded-full flex items-center justify-center bg-[#9773FE]">
                        <IconCheck strokeWidth={2.5} size={15} />
                    </div>
                    <span className="text-white/70">Easy coordinate with team work </span>
                </li>
            </ul>
         </div>
      </div>
    </>
  );
}
