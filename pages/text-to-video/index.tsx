import Image from "next/image";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import TextPrompt from "./TextPrompt";
import ImagePrompt from "./ImagePrompt";

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
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <Head>
        <title>
         Text To Video
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
          content="Text To Video | Some of our cool videos feature who stand apart You !"
        />
        <meta
          property="og:description"
          content="Transform your ideas into captivating videos instantly. Say it with text, watch it come alive as a stunning video. Turn text-based content into engaging visual stories effortlessly."
        />
        <meta property="og:url" content="https://effybiz.com/" />
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
        <div className="bg-dark overflow-hidden py-10 xl:py-28 space-y-10">
          <h2 className="py-2 text-white text-center xl:text-4xl 2xl:text-5xl text-3xl font-bold xl:leading-snug 2xl:leading-snug ">
            Text to Video
          </h2>
          <div className="px-6 mx-auto 2xl:w-9/12 xl:w-5/6 w-full flex-1">
              {/* Tabs */}
              <div className="border-b border-white/10 space-x-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  className={
                    "rounded-t-lg px-3 sm:px-5 py-2.5 text-white hover:bg-purple hover:text-white ease-in-out duration-300 " +
                    (openTab === 1 ? "bg-purple" : "bg-white/10")
                  }
                >
                  Text <span className="hidden sm:inline">prompt</span>
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  className={
                    "rounded-t-lg px-3 sm:px-5 py-2.5 text-white/70  hover:bg-purple hover:text-white ease-in-out duration-300 " +
                    (openTab === 2 ? "bg-purple" : "bg-white/10")
                  }
                >
                  Video <span className="hidden sm:inline">prompt</span>
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  className={
                    "rounded-t-lg px-3 sm:px-5 py-2.5 text-white/70 bg-white/10 hover:bg-purple hover:text-white ease-in-out duration-300 " +
                    (openTab === 3 ? "bg-purple" : "bg-white/10")
                  }
                >
                  ChatGPT <span className="hidden sm:inline">prompt</span>
                </button>
              </div>
              <div className="relative py-5">
                {openTab === 1 ? (
                  <>
                    {/* Text to image prompt */}
                    <TextPrompt />
                  </>
                ) : openTab === 2 ? (
                  <>

                  {/* <Previews /> */}
                    {/* Image to image prompt */} 
                      <ImagePrompt />
                  
                  </>
                ) : (
                  <>
                    <div className="text-white justify-center py-10">
                      ChatGPT prompt
                    </div>
                  </>
                )}
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
