import Link from "next/link";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { useState } from "react";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const DreamProject = dynamic(() => import("./components/DreamProject"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const ServiceSection = dynamic(() => import("./components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
const HeroSection = dynamic(() => import("./components/HeroSection"), {
  loading: () => <p>Loading...</p>,
});

const FaqSection = dynamic(() => import("./components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("./components/Header"), {
  loading: () => <p>Loading...</p>,
});

const BlogSection = dynamic(() => import("./components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});

export default function Home(props: any) {
  let { initialData } = props;
  const [typedText] = useState("");
  const Service = [
    {
      icon: "/images/marketing.png",
      url: "/",
      title: "Content Creation",
      decs: "Our platform offers intuitive and user-friendly tools to craft compelling content that captures attention and drives action. From creating stunning visuals to crafting persuasive copy, you have everything you need to tell your brand's story effectively.",
    },
    {
      icon: "/images/content.png",
      url: "/",
      title: "Content Distribution",
      decs: "Seamlessly distribute your content across various channels, including social media, websites, email, and more. Our platform ensures that your content reaches the right audience at the right time, maximizing its visibility and impact.",
    },
    {
      icon: "/images/adjust.png",
      url: "/",
      title: "Personalization",
      decs: "With our AI-powered personalization capabilities, you can deliver tailored content experiences to each user. Dynamically adjust your content, images, and creatives based on user preferences, demographics, or behavior, ensuring higher relevance and engagement",
    },
    {
      icon: "/images/next.png",
      url: "/",
      title: "Next Best Actions",
      decs: "Let our platform guide your next moves. Based on user engagement and actions, our AI algorithms suggest the most effective actions to maximize conversions and deliver a personalized customer journey. ",
    },
    {
      icon: "/images/teamwork.png",
      url: "/",
      title: "Content Interactivity",
      decs: "Interactive elements such as quizzes, surveys, interactive videos, and gamification to enhance user engagement, learning, and retention.  ",
    },
    {
      icon: "/images/flow-chart.png",
      url: "/",
      title: "Workflow Automation",
      decs: "Streamlined workflows and automation features to increase efficiency and productivity in content creation and distribution. ",
    },
    {
      icon: "/images/calendar.png",
      url: "/",
      title: "Content Calendar and Scheduling",
      decs: "Content planning, scheduling, and calendar features for efficient content management and distribution.",
    },
    {
      icon: "/images/user-engagement.png",
      url: "/",
      title: "Social Media Integration",
      decs: "Integration with social media platforms to schedule and publish content directly from the platform.",
    },
    {
      icon: "/images/distribution.png",
      url: "/",
      title: "AI-generated Content",
      decs: "Integration of AI technologies for automated content generation, modification, and personalization.",
    },
  ];
  const Frequently = [
    {
      title: "What is AI content?",
      desc: "AI content refers to written or generated content created using artificial intelligence technology. It involves using algorithms and machine learning to generate text that is relevant, coherent, and tailored to specific requirements.",
    },
    {
      title: "How does AI generate content?",
      desc: "The process of designing, developing, and releasing a video game is called game development. Most often, the process is handled by a multidisciplinary team. There are rare occasions when a solo developer is responsible for it. Upon completion of development, the game is released to the public. Digital releases are sometimes combined with physical releases, and sometimes they are done solely in digital format.",
    },
    {
      title: "Can AI-generated content match human-written content in quality?",
      desc: "It takes different amounts of time for different games to be developed. In a matter of hours, there have been successful games created. It took nearly a decade for some games to be completed. The time it takes to develop a game, however, depends on a number of factors.",
    },
    {
      title: "What are the benefits of using AI content on a website?",
      desc: "Is a degree required to become a blockchain developer? It is beneficial to have a degree in computer science or software engineering, but it is not essential. Learning the necessary programming languages and reading up on blockchain technology online can also suffice",
    },
    {
      title:
        "How do I ensure the AI-generated content is accurate and reliable?",
      desc: "Featuring an easy-to-customize front-end and ready-to-deploy back-end, white label exchange is ready for market. It is possible to launch this software quickly on the market if the UI/UX is quickly customized according to the brand's needs.",
    },
  ];

 
  const [show, setshow] = useState(true);


  // Assuming you have the 'urlObj' object defined and passed as a prop
const urlObj = { auth:   "/contact-us" };


  return (
    <>
      <Head>
        <title>
          Crypto & App Development Service Provider | Best App Development
          Company
        </title>
        <meta
          name="description"
          content="Need a professional Crypto and app development company? Our expert developers offer top-notch Crypto and mobile app development services to help you meet your business goals."
        />
        <link rel="canonical" href="https://effybiz.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Crypto & App Development Service Provider | Best App Development Company    "
        />
        <meta
          property="og:description"
          content="Need a professional Crypto and app development company? Our expert developers offer top-notch Crypto and mobile app development services to help you meet your business goals."
        />
        <meta property="og:url" content="https://effybiz.com/" />
        <meta property="og:site_name" content="effybiz" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/effybiz-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-12-06T08:49:10+00:00"
        />
        <meta
          property="og:image"
          content="https://effybiz.com//images/blockchain-mim-software.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@effybiztech" />
      </Head>
      <div className="overflow-hidden">
        <div
          className="bg-center bg-no-repeat bg-cover"
          // style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className="bg-gradient-to-b from-[#DB5C98]/40 via-[#0558E2]/40 to-[#6D3AFF]/40 bg-left-top">
            <Header />
            <div
              className="md:py-20 py-5 space-y-10 bg-no-repeat bg-left-top"
              style={{
                backgroundImage: `url("/images/hero-bg-shape.svg")`,
              }}
            >
              <HeroSection
                heading="Unlock the Power of AI for Your Content Strategy with effyAI"
                isHome={true}
                Provider
                ptag="Introduction and overview of your AI-based content platform"
                btnName="Get Started "
                btnLink={urlObj}
                imgSrc="/images/effyAi-wrok.png"
                Width={640}
                Height={587}
                altTag="blockchain-technology"
              />
              {/* <HeroSection1 /> */}
            </div>
          </div>
        </div>

        <section className="py-10 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-4/6 xl:w-5/6">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Our Top Notch EffyAI Services
                </h2>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Service.map((elem: any, index: any) => {
                  const { title, icon, decs, url } = elem;
                  return (
                    <ServiceSection
                      url={url}
                      key={index}
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

        <section className="py-10 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-4/6 xl:w-5/6">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center space-y-10">
                <div>
                  <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] w-4/6 mx-auto  ">
                    Welcome to effyAI: Unleash Your Creativity with Cutting-Edge
                    Generative AI
                  </h2>
                  <p className="text-lg text-black/80">
                    Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual .
                  </p>
                </div>

                <video
                  width="1200"
                  height="auto"
                  controls
                  className="mx-auto rounded-2xl"
                  autoPlay={true}
                >
                  <source
                    src="/images\videos\effyai.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="/images\videos\effyai.mp4"
                    type="video/ogg"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        <section className="sticky py-20 bg-white   top-16">
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6 md:flex md:space-x-10 md:space-y-0">
            <div className="w-full space-y-8 text-left">
              <div className="space-y-4">
                <p className="text-xl font-medium text-[#DB5C98] ">
                  Bring Your Vision to Life
                </p>

                <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51]">
                  Avatar-Based Personalized Videos
                </h2>
                <p className="text-base text-black ">
                  EffyAI introduces a groundbreaking approach to video creation
                  with our avatar-based personalized videos. Imagine having an
                  animated representation of yourself or your brand, seamlessly
                  integrated into engaging narratives. Our AI and ML algorithms
                  meticulously craft avatars that closely resemble real
                  individuals, providing a truly personalized touch.
                </p>
              </div>

              <div className="py-6">
                <Link href="/about-us" passHref={true}>
                  <div className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg text-white bg-[#6D3AFF] rounded-full cursor-pointer group">
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                    Try effy Now
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex justify-center w-full md:justify-start">
              <Image
                className="rounded-md"
                title=" We Developer Product That People Love to Use."
                alt=" We Developer Product That People Love to Use."
                src="/images/avatar-based.webp"
                height={735}
                width={645}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>

        <div className="py-10 lg:py-20 bg-[#6D3AFF]/10">
          <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6 lg:flex space-x-0 lg:space-x-10 md:space-y-0">
            <div className="flex justify-center 2xl:justify-center w-full lg:w-1/2 pb-10 lg:pb-0">
              <Image
                className="rounded-md"
                alt={props.altTag}
                src="/images/let-avatar-speak.svg"
                width={300}
                height={400}
                loader={uploadcareLoader}
                loading="eager"
                priority
                unoptimized={true}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full space-y-6 text-left">
                <div className="space-y-4">
                  <p className="text-xl font-light text-blue-600 ">
                    Real-Time Voice Cloning{" "}
                  </p>
                  <h2 className="text-2xl lg:text-4xl font-bold text-[#0E1F51] ">
                    Let Your Avatar Speak
                  </h2>
                </div>
                <p className="text-base text-black">
                  {`Effortlessly synchronize your avatar's voice with our
                  real-time voice cloning feature. With just 9 to 12 seconds of
                  input video or audio, effyAI expertly clones voices, capturing
                  the essence and nuances of the source. Whether you need
                  narration, dialogue, or voiceovers, our platform ensures a
                  natural and lifelike audio experience. Sit back and witness
                  your avatar's voice come to life, effortlessly capturing the
                  attention of your audience.`}
                </p>
                <button className="py-3 px-8 bg-white rounded-full font-semibold">
                  Try effy Now
                </button>
              </div>
            </div>
          </section>
        </div>

        <section className="sticky py-20 bg-white   top-16">
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6 md:flex md:space-x-10 md:space-y-0">
            <div className="w-full space-y-8 text-left">
              <div className="space-y-4">
                <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51]">
                  Non-Robotic Lipsync in Multiple Languages
                </h2>
                <p className="text-base text-black ">
                {`  Language should never be a barrier to creativity. effyAI
                  transcends linguistic limitations with our non-robotic
                  lipsyncing capability. Regardless of the language—be it
                  English, Spanish, Mandarin, or countless others—your avatars
                  will speak fluently and naturally. By expanding your content's
                  linguistic reach, you can connect with audiences across the
                  globe, forging meaningful connections regardless of cultural
                  or linguistic differences.`}
                </p>
              </div>

              <div className="py-6">
                <Link href="/about-us" passHref={true}>
                  <div className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg text-white bg-[#6D3AFF] rounded-full cursor-pointer group">
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                    Try effy Now
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex justify-center w-full md:justify-start">
              <Image
                className="rounded-md"
                title=" We Developer Product That People Love to Use."
                alt=" We Developer Product That People Love to Use."
                src="/images/non-robotic.webp"
                height={600}
                width={600}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>

        <section className="sticky py-20 bg-white   top-16">
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6 flex flex-col gap-10">
            <div className="w-full space-y-8 text-left">
              <div className="space-y-4">
                <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51]">
                  Text to Image: Instantly Visualize Your Ideas
                </h2>
                <p className="text-base text-black ">
                {`  Language should never be a barrier to creativity. effyAI
                  transcends linguistic limitations with our non-robotic
                  lipsyncing capability. Regardless of the language—be it
                  English, Spanish, Mandarin, or countless others—your avatars
                  will speak fluently and naturally. By expanding your content's
                  linguistic reach, you can connect with audiences across the
                  globe, forging meaningful connections regardless of cultural
                  or linguistic differences.`}
                </p>
              </div>
            </div>
            <div className="flex justify-center w-full md:justify-start">
              <Image
                className="rounded-md w-full"
                title=" We Developer Product That People Love to Use."
                alt=" We Developer Product That People Love to Use."
                src="./images/text-image.webp"
                height={1160}
                width={1200}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>

        <section className="sticky py-20 bg-gradient-to-t from-[#180125] to-[#1A1134]    top-16">
          <div className=" w-11/12 mx-auto  2xl:w-4/6 xl:w-5/6 flex flex-col gap-10">
            <div className="w-full space-y-8 text-left">
              <div className="space-y-4">
                <h2 className="xl:text-4xl text-3xl font-bold text-white ">
                  Text to Video
                </h2>
              </div>
            </div>

            <div className="flex md:flex-row items-center gap-20">
              <div className="w-[60%] space-y-6">
                <div className="border border-white/10 bg-white/10 px-6 py-3 text-lg text-white rounded-md font-semibold">
                  A lazy dog jumping
                </div>
                <video
                  width=""
                  height="auto"
                  controls
                  className=" w-full rounded-2xl"
                  autoPlay={true}
                >
                  <source
                    src="/images\videos\effyai.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="/images\videos\effyai.mp4"
                    type="video/ogg"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="w-[40%] -mb-36">
                <div className="bg-white/10 text-white   p-10 rounded-t-xl space-y-4">
                  <h1 className="text-3xl font-semibold">
                    Turn Words Into Captivating Stories
                  </h1>
                  <p className="text-white/80">
                   {` Looking to create captivating videos in a flash? effyAI's
                    Text to Video module has got you covered. Describe your
                    ideas or provide prompts, and our platform rapidly generates
                    engaging video content. Whether for social media, brand
                    storytelling, or creative expression, effyAI empowers you to
                    produce professional-grade videos in a matter of minutes.
                    Let your imagination run wild, and let effyAI bring your
                    stories to life.`}
                  </p>

                  <div className="py-6">
                    <Link href="/about-us" passHref={true}>
                      <div className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg text-white bg-[#6D3AFF] rounded-full cursor-pointer group">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                        Try effy Now
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sticky py-20 bg-white   top-16">
          <div className="items-center w-11/12 mx-auto   2xl:w-4/6 xl:w-5/6 flex flex-col gap-14">
            <div className="w-full  text-center">
              <div className="space-y-6">
                <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51]">
                  AI Dubbing in <b className="text-[#DB5C98] font-bold">120+</b>{" "}
                  Languages Engage Global Audiences
                </h2>
                <p className="text-base text-black ">
                 {` Language should never be a barrier to creativity. effyAI
                  transcends linguistic limitations with our non-robotic
                  lipsyncing capability. Regardless of the language—be it
                  English, Spanish, Mandarin, or countless others—your avatars
                  will speak fluently and naturally. By expanding your content's
                  linguistic reach, you can connect with audiences across the
                  globe, forging meaningful connections regardless of cultural
                  or linguistic differences.`}
                </p>
              </div>
            </div>
            <div className="flex justify-center w-full md:justify-start">
              <Image
                className="rounded-md w-full"
                title=" We Developer Product That People Love to Use."
                alt=" We Developer Product That People Love to Use."
                src="./images/ai-language.svg"
                height={1160}
                width={1200}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>

        <section className="  py-20 bg-white   ">
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6 md:flex md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full md:justify-start">
              <Image
                className="rounded-md"
                title=" We Developer Product That People Love to Use."
                alt=" We Developer Product That People Love to Use."
                src="./images/welcome-effyai.webp"
                height={529}
                width={582}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-8 text-left">
              <div className="space-y-4">
                <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51]">
                  Welcome in EffyAI
                </h2>
                <p className="text-base text-black ">
                  Welcome to [Your Platform Name], the revolutionary AI-based
                  content platform that empowers businesses to create,
                  distribute, and optimize their content across multiple
                  channels. With our cutting-edge technology and advanced
                  analytics, we help you unlock the true potential of your
                  content marketing strategy.
                </p>

                <p>
                  Are you struggling to create compelling content that resonates
                  with your target audience? Are you looking for a way to
                  distribute your content seamlessly across various platforms?
                  Look no further. Our platform provides you with the tools and
                  insights you need to drive engagement, increase conversions,
                  and achieve your content goals.
                </p>
              </div>

              <div className="py-6">
                <Link href="/about-us" passHref={true}>
                  <div className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg text-white bg-[#6D3AFF] rounded-full cursor-pointer group">
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                    Try effy Now
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="  py-20 bg-white   ">
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6 md:flex md:space-x-10 md:space-y-0">
            <div className="w-[40%] space-y-8 text-left">
              <div className="space-y-4">
                <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51]">
                  Who We Are ?
                </h2>
                <p className="text-base text-black ">
                  At Effy, we are passionate about revolutionizing the way
                  businesses create and distribute content. Our team of experts
                  combines their extensive knowledge in AI, machine learning,
                  and digital marketing to develop an innovative platform that
                  helps you stay ahead in the ever-evolving content landscape.
                </p>
              </div>

              <div className="py-6">
                <Link href="/about-us" passHref={true}>
                  <div className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg text-white bg-[#6D3AFF] rounded-full cursor-pointer group">
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                    Try effy Now
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex justify-center w-[60%] md:justify-start">
              <Image
                className="rounded-md"
                title=" We Developer Product That People Love to Use."
                alt=" We Developer Product That People Love to Use."
                src="./images/who-we-are-effyai.webp"
                height={510}
                width={761}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>

        <DreamProject />
        <FaqSection faqData={Frequently}  />

        <BlogSection initialData={initialData} />
        {/* cookies */}
        {false && show ? (
          <div className="fixed flex items-center justify-center w-10/12 p-4 bottom-8 left-10">
            <div className="z-10 p-2 space-y-2 bg-white border border-gray-800 rounded-md shadow-md shadow-black/50 md:flex lg:p-4 md:space-y-0">
              <div>
                <h5 className="mb-2 text-sm font-medium leading-tight text-gray-900 md:text-base">
                  This website uses cookies.
                </h5>
                <p className="pr-5 text-xs text-gray-900 lg:text-sm">
                  {
                    "We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data"
                  }
                </p>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={() => setshow(!show)}
                  type="button"
                  className="w-full inline-block px-3 md:px-6 md:py-2.5 py-2 bg-[#161616]/50 text-white font-medium text-xs leading-tight capitalize transition duration-150 ease-in-out rounded-md"
                >
                  {" "}
                  Decline{" "}
                </button>
                <button
                  onClick={() => setshow(!show)}
                  type="button"
                  className="w-full inline-block px-3 md:px-6 md:py-2.5 py-2 bg-[#161616]/50 text-white font-medium text-xs leading-tight capitalize transition duration-150 ease-in-ou rounded-md"
                >
                  {" "}
                  Accept
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
