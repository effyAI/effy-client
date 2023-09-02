import Image from "next/image";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import DreamProject from "../components/DreamProject";
import { TbPlayerPlay } from "react-icons/tb";

const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});

const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});

const Service = [
  {
    num: "1",
    icon: "/images/video-players.png",
    title: "Text To Image ",
    decs: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.e",
  },
  {
    num: "2",
    icon: "/images/profile.png",
    title: "Audio to Image",
    decs: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    num: "3",
    icon: "/images/returning-visitor.png",
    title: "ChatGPT Script ",
    decs: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    num: "4",
    icon: "/images/upload-file.png",
    title: "Text To Avatar",
    decs: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    num: "5",
    icon: "/images/video-and-audio.png",
    title: "Keywords to Image",
    decs: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    num: "6",
    icon: "/images/edit.png",
    title: "Text & Audio file to Image ",
    decs: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
];
const ImageGenUse = [
  {
    num: "1",
    img: "/images/adjuster.png",
    title: "Write your prompt or get inspired by one from our gallery",
    decs: "Feel free to modify, change and re-interpret your own narrative.",
  },
  {
    num: "2",
    img: "/images/filter.png",
    title: "Choose the format and style",
    decs: "Your image can be like a photo, Digital Art, 3D, a painting, or even… a surprise! Play around with the options to achieve your desired outcome.",
  },
  {
    num: "3",
    img: "/images/video-player.png",
    title: "Select the one that suits you best, or try again for other results",
    decs: "Once you’ve got your four images, tweak some final details with a few clicks.",
  },
  {
    num: "4",
    img: "/images/repeat.png",
    title: "Share them wherever you like!",
    decs: "Download or edit your image with Wepik’s editor. You can even publish and schedule it with the Social Media Scheduler!",
  },
];

export default function Webdevelopment(props: any) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          Expert Web Development Services | Custom Websites Development Company
        </title>
        <meta
          name="description"
          content="effybiz is a leading web development company offering custom website design and development services. Contact us today for a free consultation."
        />
        <link rel="canonical" href="https://effybiz.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Expert Web Development Services | Custom Websites Development Company"
        />
        <meta
          property="og:description"
          content="effybiz is a leading web development company offering custom website design and development services. Contact us today for a free consultation."
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
        {/* hero section */}
        <div
          className="bg-center bg-no-repeat bg-cover"
          // style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className="bg-gradient-to-b from-[#DB5C98]/20 via-[#0558E2]/20 to-[#6D3AFF]/20 bg-left-top">
            <Header />
            <div
              className="md:pt-20  pt-6 space-y-10 bg-no-repeat bg-left-top"
              style={{
                backgroundImage: `url("/images/hero-bg-shape.svg")`,
              }}
            >
              <div className="flex flex-col w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 md:items-center gap-20">
                <div className="w-full text-center">
                  <div className="space-y-6">
                    <h1 className="text-[#222] xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                      Create Stunning Ai Image with EffyAi
                    </h1>

                    <p className="w-full mx-auto text-base  text-black/80 lg:text-lg font-medium">
                      Introduction and overview of your AI-based content
                      platform
                    </p>

                    <div className="flex items-center space-x-6   justify-center">
                      <button className="block text-sm font-semibold  active text-white  bg-gradient-to-r from-[#7E44F0] to-[#BB4BD9] rounded-md px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative uppercase w-44">
                        {`   Let's start`}
                      </button>
                      <button className="  text-sm font-semibold  active text-white border border-[#7E44F0] rounded-md px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative uppercase w-44 flex items-center space-x-2">
                        <TbPlayerPlay className="text-[1.2rem] text-[#BB4BD9] " />
                        <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#7E44F0] to-[#BB4BD9]">
                          Take a demo
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="  w-full  flex justify-center">
                  <Image
                    className="object-cover "
                    src="/images/effy-image-hero.png"
                    width={1180}
                    height={552}
                    loading="eager"
                    priority
                    alt="effyvideo-hero"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-10 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-4/6 xl:w-5/6">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center mx-auto lg:w-4/6">
                <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Our AI-Videos Services
                </h2>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Service.map((elem) => {
                  const { title, icon, decs, num } = elem;
                  return (
                    <ServiceSection
                      key={num}
                      Icon={icon}
                      title={title}
                      Ptag={decs}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="  pb-20 bg-white">
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6 flex md:flex-row-reverse  flex-col-reverse  md:gap-20 gap-10">
            <div className="w-full space-y-8 text-left">
              <div className="space-y-4">
                <p className="text-xl font-medium text-[#DB5C98] ">
                  The Next level AI Generate
                </p>

                <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51]">
                  Introducing EffyAi Image Generator
                </h2>
                <p className="xl:text-lg text-base text-black ">
                  EffyAI introduces a groundbreaking approach to video creation
                  with our avatar-based personalized videos. Imagine having an
                  animated representation of yourself or your brand, seamlessly
                  integrated into engaging narratives. Our AI and ML algorithms
                  meticulously craft avatars that closely resemble real
                  individuals, providing a truly personalized touch.
                </p>
              </div>
            </div>
            <div className="flex justify-center w-full md:justify-start">
              <Image
                className="rounded-md"
                title=" We Developer Product That People Love to Use."
                alt=" We Developer Product That People Love to Use."
                src="/images/effy-image-gerntraor.webp"
                height={800}
                width={592}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>

        <section
          className=""
          // style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
          style={{ backgroundImage: `url('/images/bg-image-video.webp')` }}
        >
          <div className="bg-white/80 backdrop-blur-2xl py-20    ">
            <div className=" w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 md:space-y-20 space-y-16  ">
              <h2 className="py-2 text-[#22222] xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-center ">
                Smart feature made you Love With EffyAI
              </h2>
              {/* 1 */}
              <div className="items-center  flex lg:flex-row flex-col-reverse  md:gap-20 gap-10">
                <div className="w-full space-y-6">
                  <label className="bg-[#fff] border px-8 md:py-3 py-2.5 text-white rounded-full md:text-lg text-base capitalize">
                    <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#7E44F0] to-[#BB4BD9] font-semibold">
                      {" "}
                      # 1 Feature{" "}
                    </span>
                  </label>
                  <h2 className="  text-black md:text-4xl text-3xl font-bold">
                    Text To Image
                  </h2>
                  <p className=" text-black md:text-lg text-base font-normal leading-loose">
                    {`Our platform offers intuitive and user-friendly tools to
                    craft compelling content that captures attention and drives
                    action. From creating stunning visuals to crafting
                    persuasive copy, you have everything you need to tell your
                    brand's story effectively.`}
                  </p>
                </div>
                <div className="  w-full rounded-2xl  flex justify-center items-center">
                  <Image
                    src="/images/text-to-image.png"
                    alt="fasd"
                    width={640}
                    height={475}
                  />
                </div>
              </div>

              {/* 2 */}
              <div className="items-center  flex lg:flex-row-reverse  flex-col-reverse  md:gap-20 gap-10">
                <div className="w-full space-y-6">
                  <label className="bg-[#fff] border px-8 md:py-3 py-2.5 text-white rounded-full md:text-lg text-base capitalize">
                    <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#7E44F0] to-[#BB4BD9] font-semibold">
                      {" "}
                      # 2 Feature{" "}
                    </span>
                  </label>
                  <h2 className="  text-black md:text-4xl text-3xl font-bold">
                    Audio to Image
                  </h2>
                  <p className=" text-black md:text-lg text-base font-normal leading-loose">
                  {`  Our platform offers intuitive and user-friendly tools to
                    craft compelling content that captures attention and drives
                    action. From creating stunning visuals to crafting
                    persuasive copy, you have everything you need to tell your
                    brand's story effectively.`}
                  </p>
                </div>
                <div className="  w-full rounded-2xl  flex justify-center items-center">
                  <Image
                    src="/images/audio-to-image.png"
                    alt="fasd"
                    width={640}
                    height={475}
                  />
                </div>
              </div>

              {/* 3 */}
              <div className="items-center  flex lg:flex-row flex-col-reverse  md:gap-20 gap-10">
                <div className="w-full space-y-6">
                  <label className="bg-[#fff] border px-8 md:py-3 py-2.5 text-white rounded-full md:text-lg text-base capitalize">
                    <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#7E44F0] to-[#BB4BD9] font-semibold">
                      {" "}
                      # 3 Feature{" "}
                    </span>
                  </label>
                  <h2 className="  text-black md:text-4xl text-3xl font-bold">
                    ChatGPT Script
                  </h2>
                  <p className=" text-black md:text-lg text-base font-normal leading-loose">
                    {`Our platform offers intuitive and user-friendly tools to
                    craft compelling content that captures attention and drives
                    action. From creating stunning visuals to crafting
                    persuasive copy, you have everything you need to tell your
                    brand's story effectively.`}
                  </p>
                </div>
                <div className="w-full rounded-2xl  flex justify-center items-center">
                  <Image
                    src="/images/chatgpt-script.png"
                    alt="fasd"
                    width={640}
                    height={475}
                  />
                </div>
              </div>

              {/*  */}
              <div className="items-center  flex lg:flex-row-reverse  flex-col-reverse  md:gap-20 gap-10">
                <div className="w-full space-y-6">
                  <label className="bg-[#fff] border px-8 md:py-3 py-2.5 text-white rounded-full md:text-lg text-base capitalize">
                    <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#7E44F0] to-[#BB4BD9] font-semibold">
                      {" "}
                      # 4 Feature{" "}
                    </span>
                  </label>
                  <h2 className="  text-black md:text-4xl text-3xl font-bold">
                    Text to Avatar
                  </h2>
                  <p className=" text-black md:text-lg text-base font-normal leading-loose">
                    {`Our platform offers intuitive and user-friendly tools to
                    craft compelling content that captures attention and drives
                    action. From creating stunning visuals to crafting
                    persuasive copy, you have everything you need to tell your
                    brand's story effectively.`}
                  </p>
                </div>
                <div className="  w-full rounded-2xl  flex justify-center items-center">
                  <Image
                    src="/images/text-to-avatar.png"
                    alt="fasd"
                    width={640}
                    height={475}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-11/12 mx-auto 2xl:w-4/6 xl:w-5/6 space-y-16 py-20 ">
          <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-center ">
            EffyAI Image Tool for for every industry & Everyone
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1  gap-10">
            <div className="bg-white p-6 shadow-lg space-y-4 ">
              <Image
                src="/images/woman-selecting-pictures-people_1134-466.webp"
                width={500}
                height={400}
                alt="woman-selecting-pictures-people"
                className="rounded-xl "
              />
              <h2 className="text-xl font-bold ">For Personal Use</h2>
              <p>
                Let our AI software generate art and images for you instantly!
                Use our AI image generator and create videos from images. Add
                sound effects, background music, and more! You can also use our
                AI Script Generator to automatically generate video scripts.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg space-y-4 ">
              <Image
                src="/images/businessman-using-application-contact-with-his-colleagues_1134-644.webp"
                width={500}
                height={400}
                alt="woman-selecting-pictures-people"
                className="rounded-xl "
              />
              <h2 className="text-xl font-bold ">Corporate & Office work</h2>
              <p>
                Let our AI software generate art and images for you instantly!
                Use our AI image generator and create videos from images. Add
                sound effects, background music, and more! You can also use our
                AI Script Generator to automatically generate video scripts.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg space-y-4 ">
              <Image
                src="/images/smiling-businesswoman-showing-her-tablet-with-virtual-app_1134-643.webp"
                width={500}
                height={400}
                alt="woman-selecting-pictures-people"
                className="rounded-xl "
              />
              <h2 className="text-xl font-bold ">Teaching and learning</h2>
              <p>
                Let our AI software generate art and images for you instantly!
                Use our AI image generator and create videos from images. Add
                sound effects, background music, and more! You can also use our
                AI Script Generator to automatically generate video scripts.
              </p>
            </div>
          </div>
        </section>

        <section
          className="bg-cover"
          // style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
          style={{
            backgroundImage: `url('/images/video-feature-bg.webp')`,
          }}
        >
          <div className="bg-white/80 backdrop-blur-2xl py-20    ">
            <div className=" w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 md:space-y-20 space-y-10  ">
              <div className="space-y-4 text-center ">
                <h2 className="py-2 text-[#22222] xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-center ">
                  How use EffyAI Imaginator
                </h2>
                <p>
                  Start with 7-day free trial. No credit card needed. Cancel at
                  anytime.
                </p>
              </div>

              <div className="flex lg:flex-row flex-col md:gap-20 gap-10 items-center w-full">
                <div className="w-full rounded-2xl  flex justify-center items-center">
                  <Image
                    src="/images/howuse-img-genrator.png"
                    alt="fasd"
                    width={700}
                    height={703}
                  />
                </div>

                <div className="grid grid-cols-1 md:gap-10 gap-4 w-full">
                  {ImageGenUse.map((elem) => {
                    const { title, decs, num, img } = elem;
                    return (
                      <div
                        key={num}
                        className="py-4   rounded-md flex space-x-6"
                      >
                        <div className="w-[50px] h-[50px] flex justify-center items-center text-2xl font-semibold text-[#596EED] bg-gradient-to-b from-blue-300 to-violet-300 rounded-lg">
                          {num}
                        </div>
                        <div className="flex-1 space-y-2">
                          <h2 className="text-xl font-bold">{title} </h2>
                          <p>{decs}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" py-20 bg-white ">
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6 flex lg:flex-row flex-col-reverse  md:gap-20 gap-10">
            <div className="w-full space-y-8 text-left">
              <div className="space-y-4">
                <h2 className="xl:text-5xl text-3xl font-bold text-[#0E1F51] xl:leading-[4rem] ">
                  Why EffyAI is best For your business ?
                </h2>
                <p className="md:text-lg text-base text-black ">
                  EffyAI introduces a groundbreaking approach to video creation
                  with our avatar-based personalized videos. Imagine having an
                  animated representation of yourself or your brand, seamlessly
                  integrated into engaging narratives. Our AI and ML algorithms
                  meticulously craft avatars that closely resemble touch.
                </p>
              </div>
            </div>
            <div className="flex justify-center w-full md:justify-start">
              <Image
                className="rounded-md"
                title=" We Developer Product That People Love to Use."
                alt=" We Developer Product That People Love to Use."
                src="/images/why-effyai.webp"
                height={735}
                width={645}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>
        <DreamProject />

        <BlogSection initialData={initialData} />
      </div>
    </>
  );
}
