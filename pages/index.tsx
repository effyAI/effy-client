import Link from "next/link";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { useState } from "react";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Hero from "./frontpage/Hero";
import VoiceLibrary from "./frontpage/VoiceLibrary";
import VirtualCloneAllAvtar from "./frontpage/VirtualCloneAllAvtar";
import SpeakingAvatar from "./frontpage/SpeakingAvatar";
import AiImaginator from "./frontpage/AiImaginator";
import Advisement from "./frontpage/Advisement";
import Dub1click from "./frontpage/Dub1click";
import ContactUs from "./frontpage/ContactUs";

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
  const urlObj = { auth: "/contact-us" };

  return (
    <>
      <Head>
        <title>
        EffyAI
        </title>
        <meta
          name="description"
          content="Remember that selecting the right development partner is a critical decision, so take your time and make an informed choice. A well-chosen development team can greatly contribute to the success of your crypto and app project.."
        />
        <link rel="canonical" href="https://effybiz.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" This meta description effectively communicates your company's expertise in both crypto and app development while emphasizing trustworthiness, which can be a significant factor for potential clients when choosing a service provider.    "
        />
        <meta
          property="og:description"
          content="Your meta description effectively conveys your company's services and value proposition. It's clear and to the point. However, if you'd like to make it even more concise and SEO-friendly, you could consider the following revision:"
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
        <Header />
        <div className="bg-dark space-y-5 md:space-y-10 xl:space-y-20 ">
          <Hero />



          
        {/* Try Voice library It Look Sound More Real */}
        <VoiceLibrary />

        {/* Create your Own Virtual Clone and Avatar for All charcter  */}
        <VirtualCloneAllAvtar />

        {/* Speaking Avatar */}
        <SpeakingAvatar />

        {/* Ai imaginator Right it well */}
        <AiImaginator />

        {/* Make a Advisement for Entertainment */}
        <Advisement />


        {/* Dub with 1 click */}
        <Dub1click />
 

        {/* Contact Us */}

        <ContactUs />

          
        </div>
      </div>
    </>
  );
}
