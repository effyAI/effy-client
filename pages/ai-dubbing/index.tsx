import Image from "next/image";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
 import AidubbHero from './AidubbHero'
 import EffyImageGenerator from './EffyImageGenerator'
 import Features from "./Features";
 import AuthenticVoice from "./AuthenticVoice";
 import HighQualityVoices from "./HighQualityVoices";
 import EmotionBased from "./EmotionBased";
 import EffyAIDubbin from "./EffyAIDubbin";
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
 
 
export default function EffyVoiceDark(props: any) {
  
  const [openTab, setOpenTab] = React.useState(1);
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
        AAEffyAI Video | Some of our cool videos feature who stand apart You !

        </title>
        <meta
          name="description"
          content="Some of our cool videos feature who stand apart You !"
        />
        <link rel="canonical" href="https://effybiz.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content=" EffyAI Video | Some of our cool videos feature who stand apart You !"
        />
        <meta
          property="og:description"
          content="Transform your ideas into captivating videos instantly. Say it with text, watch it come alive as a stunning video. Turn text-based content into engaging visual stories effortlessly."
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
      <div className="bg-dark overflow-hidden ">
        {/* hero section */}
        <section className="bg-center bg-no-repeat bg-contain bg-[#0D1021]"
          style={{ backgroundImage: `url("/images/ai-dubbing-bg.png")` }} >
          <div className="bg-linear-2 backdrop-blur-xl bg-left-top">
             <Header />

             <div className="py-10 md:py-20  ">             
              <div className="flex flex-col px-4 mx-auto 2xl:w-9/12 xl:w-5/6 md:items-center gap-10 relative">
                {/* Hero Upper part */}               
                <AidubbHero />
              </div>
            </div>
          </div>
        </section>

        {/*The Section: "Our Top Notch Features of effyAI Voice" */}
        <section className="relative border-b border-white/20 xl:border-0 pb-10 xl:pb-0 pt-10 lg:pt-24 xl:pt-32 overflow-hidden xl:overflow-visible">
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

            <div className="relative z-40">               
               <EffyImageGenerator />
            </div>
          </section>

          <section className="relative border-b border-white/20 xl:border-0 pb-10 xl:pb-0 pt-10 lg:pt-24 xl:pt-32 overflow-hidden xl:overflow-visible">
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
                EffyDUB - Revolutionizing AI Dubbing
                </h2>
              </div>
              <Features />
            </div>
          </section>


          {/*The Section: "Our Top Notch Features of effyAI Voice" */}
        <section className="relative border-b border-white/20 xl:border-0 pb-10 xl:pb-0 pt-10 lg:pt-24 xl:pt-32 overflow-hidden xl:overflow-visible">
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

            <div className="relative z-40">               
               <AuthenticVoice />
            </div>
          </section>


          <section className="relative border-b border-white/20 xl:border-0 pb-10 xl:pb-0 pt-10 lg:pt-24 xl:pt-32 overflow-hidden xl:overflow-visible">
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

            <div className="space-y-7 sm:space-y-10  relative">
              <div className="flex flex-col gap-5 justify-center text-center px-4">
                <h2 className="py-2 text-white xl:text-4xl 2xl:text-5xl text-3xl font-bold xl:leading-snug ">
                Generate dubbing in 50+ Languages
                </h2>
                <p className="text-lg  text-white/70">
                Diversify Your Content with Multilingual Dubbing Services
            </p>
              </div>

              <div className="px-4 mx-auto 2xl:w-9/12 xl:w-5/6 ">
               <Image
                className="object-cover mx-auto"
                src="/images/languages.png"
                width={1200}
                height={1200}
                loading="eager"
                alt="bg-circle-glow.png"
              />
              </div>

            </div>
          </section>


          <section className="relative border-b border-white/20 xl:border-0 pb-10 xl:pb-0 pt-10 lg:pt-24 xl:pt-32 overflow-hidden xl:overflow-visible">
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

            <div className="px-4 mx-auto 2xl:w-9/12 xl:w-5/6 ">

            <div className="space-y-7 sm:space-y-10  relative">              
              <div className="flex flex-col gap-5 justify-center text-center px-4">
                <h2 className="py-2 text-white xl:text-4xl 2xl:text-5xl text-3xl font-bold xl:leading-snug ">
                Dub Any Video Faster in 30+ Languages, 250+ Male & Female High-Quality Voices.
                </h2>
                <p className="text-lg  text-white/70">
                Unlock the Power of AI Dubbing Services: Effortlessly Translate and Localize Your Video Content for a Global Audience.
                </p>
              </div>

              
               <HighQualityVoices />
              </div>

            </div>
          </section>

 {/*The Section: "Our Top Notch Features of effyAI Voice" */}
         <section className="relative border-b border-white/20 xl:border-0 pb-10 xl:pb-0 pt-10 lg:pt-24 xl:pt-32 overflow-hidden  ">
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

            <div className="relative z-40">               
               <EmotionBased />
            </div>
          </section>


          <section className="relative z-10 border-b border-white/20 xl:border-0 py-10  lg:py-24 xl:py-32 overflow-hidden xl:overflow-visible bg-dark">
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
                How use EffyAI Dubbing
                </h2>
                <p className="lg:text-lg text-[#787878] text-center">
                Step-by-Step Guide to Get Started with EffyAI Dubbing Services for Seamless Multilingual Content Creation.
                </p>
              </div>

              <div className="px-4 mx-auto 2xl:w-9/12 xl:w-5/6">
                <EffyAIDubbin />
              </div>
            </div>
          </section>
        
      </div>
      </div>
    </>
  );
}
