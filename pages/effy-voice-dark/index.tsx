import Image from "next/image";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import VoiceHero from "./VideoHero";
import Features from "./Features";
import Carousel from "./Carousel";
import BuildTrustBlogs from "./BuildTrustBlogs";
import OurProduct from "./OurProduct";
import Plans from "./Plans";
import RealLifeAppliaction from "./RealLifeApplication";
 

import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import DreamProject from "../components/DreamProject";

const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});

const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});



export default function Webdevelopment(props: any) {
  
 
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
        effyAI Voice | effyAI powered Text to Voice Generator

        </title>
        <meta
          name="description"
          content="effyAI powered Text to Voice Generator"
        />
        <link rel="canonical" href="https://effybiz.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content=" effyAI Voice | effyAI powered Text to Voice Generator"
        />
        <meta
          property="og:description"
          content="effyAI Voice | effyAI powered Text to Voice Generator"
        />
        <meta
          property="og:url"
          content="https://effybiz.com/"
        />
        <meta property="og:site_name" content="effybiz" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/effybiz-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-12-26T08:12:32+00:00"
        />
        <meta
          property="og:image"
          content="https://www.effybiz.com/images/blockchain-mim-software.png"
        />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@effybiztech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
      </Head>

      <div className="overflow-hidden">
      <Header />
        {/* hero section */}
        <div className="bg-center bg-no-repeat bg-contain bg-[#0D1021] hero-bg">
           
          <div className="bg-linear-2 backdrop-blur-xl bg-left-top">           

             <div className="pb-10 pt-16 md:py-20 2xl:py-32 border-b border-white/10 xl:border-0 ">
              <div className="absolute top-24 -left-14">
                <Image
                  className="object-cover "
                  src="/images/hero-top-left.svg"
                  width={222}
                  height={222}
                  loading="eager"
                  alt="effyvoice-hero"
                />
              </div>
              <div className="absolute top-1/3 -right-14">
                <Image
                  className="object-cover "
                  src="/images/hero-bottom-right.svg"
                  width={222}
                  height={222}
                  loading="eager"
                  alt="effyvoice-hero"
                />
              </div>

              <div className="flex flex-col px-4 mx-auto 2xl:w-9/12 xl:w-5/6 md:items-center gap-10 relative">
                {/* Hero Upper part */}
                <VoiceHero />
                
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark overflow-hidden py-10 xl:py-20">
          {/*The Section: "Our Top Notch Features of effyAI Voice" */}
          <section className="relative border-b border-white/20 xl:border-0 pb-10 xl:pb-0">
            <div className="absolute -top-64 xl:top-[-32rem] left-1/4 -translate-x-1/4">
              <Image
                className="object-cover "
                src="/images/bg-circle-glow.svg"
                width={1200}
                height={1200}
                loading="eager"
                alt="bg-circle-glow.svg"
              />
            </div>

            <div className="space-y-7 sm:space-y-10 xl:space-y-14 relative">
              <div className="flex flex-col justify-center text-center px-4">
                <h2 className="py-2 text-white xl:text-4xl 2xl:text-5xl text-3xl font-bold xl:leading-snug ">
                  Our Top Notch Features of effyAI Voice
                </h2>
              </div>
              <Features />
              
            </div>
          </section>

          {/*The Section: "Real Life Applications" */}
          <section className="relative z-10 border-b border-white/20 xl:border-0 pb-10 xl:pb-0 pt-10 lg:pt-24 xl:pt-32 overflow-hidden xl:overflow-visible">
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
            <div className="relative space-y-10 xl:space-y-14 ">
              <div className="space-y-3 px-4">
                <h2 className="py-2 text-white text-center xl:text-4xl 2xl:text-5xl text-3xl font-bold xl:leading-snug 2xl:leading-snug ">
                  Real Life Applications
                </h2>
                <p className="lg:text-lg text-[#787878] text-center">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the
                </p>
              </div>

              <div className="px-4 mx-auto 2xl:w-9/12 xl:w-5/6">
                <RealLifeAppliaction />
              </div>
            </div>
          </section>

          {/* Which product right for you ? */}
          <section className="relative border-b border-white/20 xl:border-0 pb-10 xl:pb-0 pt-10 lg:pt-24 xl:pt-32 overflow-hidden xl:overflow-visible">
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
            <div className="relative space-y-10 xl:space-y-14">
              <div className="space-y-3 px-4">
                <h2 className="py-2 text-white text-center xl:text-4xl 2xl:text-5xl text-3xl font-bold xl:leading-snug 2xl:leading-snug ">
                  Which Product is right for You ?
                </h2>
                <p className="lg:text-lg text-[#787878] text-center">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the
                </p>
              </div>
              <div className="px-4 mx-auto 2xl:w-9/12 xl:w-5/6">
                <Carousel />
              </div>
            </div>
          </section>

          {/* We build trust */}
          <section className="relative border-b border-white/20 xl:border-0 pb-10 xl:pb-0 pt-10 lg:pt-24 xl:pt-32 overflow-hidden xl:overflow-visible">
            <div className="absolute -top-48 xl:top-1/2 xl:-translate-y-1/2 xl:-left-1/3 ">
              <Image
                className="object-cover "
                src="/images/bg-circle-glow.svg"
                width={1200}
                height={1200}
                loading="eager"
                alt="bg-circle-glow.svg"
              />
            </div>
            <div className="relative space-y-10 xl:space-y-14">
              <div className="space-y-3 px-4">
                <h2 className="py-2 text-white text-center xl:text-4xl 2xl:text-5xl text-3xl font-bold xl:leading-snug 2xl:leading-snug ">
                  We build trust
                </h2>
                <p className="lg:text-lg text-[#787878] text-center">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the
                </p>
              </div>
              <div className="px-4 mx-auto 2xl:w-9/12 xl:w-5/6">
                <BuildTrustBlogs />
              </div>
            </div>
          </section>

          {/* Our product  */}
          <section className="relative border-b border-white/20 xl:border-0 pb-10 xl:pb-0 pt-10 lg:pt-24 xl:pt-32 overflow-hidden xl:overflow-visible">
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
            <div className="relative space-y-10 xl:space-y-14">
              <div className="space-y-3 px-4">
                <h2 className="py-2 text-white text-center xl:text-4xl 2xl:text-5xl text-3xl font-bold xl:leading-snug 2xl:leading-snug ">
                Our Products
                </h2>
                <p className="lg:text-lg text-[#787878] text-center">
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                </p>
              </div>
              <div className="px-4 mx-auto 2xl:w-9/12 xl:w-5/6">
                <OurProduct /> 
                {/* Product will come here */}
              </div>
            </div>
          </section>

           {/* Plans We Offers  */}
           <section className="relative pt-10 lg:pt-24 xl:pt-32 overflow-hidden xl:overflow-visible">
            <div className="absolute -top-48 md:top-1/4 md:-translate-y-1/4 md:right-1/4 md:translate-x-1/4 ">
              <Image
                className="object-cover "
                src="/images/bg-circle-glow.svg"
                width={1200}
                height={1200}
                loading="eager"
                alt="bg-circle-glow.svg"
              />
            </div>
            <div className="relative space-y-10 xl:space-y-14">
              <div className="px-4">
                <h2 className="py-2 text-white text-center xl:text-4xl 2xl:text-5xl text-3xl font-bold xl:leading-snug 2xl:leading-snug ">
                Plans We Offers
                </h2>
                <p className="lg:text-lg text-[#787878] text-center">
                Start with 7-day free trial. No credit card needed. Cancel at anytime.
                </p>
              </div>
              <div className="px-4 mx-auto 2xl:w-9/12 xl:w-5/6">
                <Plans /> 
                {/* Product will come here */}
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}