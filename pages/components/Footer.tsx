import Link from "next/link";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { MdAddIcCall } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import { HiLocationMarker } from "react-icons/hi"; 
export default function Footer() {
  const Services = [
    {
      num: "1",
      url: "/altcoin-development-services",
      title: "EffyAi video",
    },
    {
      num: "2",
      url: "/cryptocurrency-mlm-software-development",
      title: "EffyAi Image",
    },
    {
      num: "3",
      url: "/crypto-wallet-development",
      title: "EffyAi voice",
    },
    {
      num: "4",
      url: "/cricket-live-line-api",
      title: "EffyAi Avatar",
    },
    {
      num: "5",
      url: "/web-development",
      title: "EffyAi Dubbing",
    },
  ];
  const About = [
    {
      num: "1",
      url: "/career",
      title: "Home",
    },
    {
      num: "2",
      url: "/contact-us",
      title: "Feature",
    },
    {
      num: "3",
      url: "/about-us",
      title: "About us",
    },
    {
      num: "4",
      url: "/client-testimonials",
      title: "Contact us",
    },
    {
      num: "5",
      url: "https://www.effybiz.com/blog/",
      title: "Our Blog",
    },
  ];
  const Usefull = [
    {
      num: "1",
      url: "/disclaimer",
      title: "Disclaimer",
    },
    {
      num: "2",
      url: "/contact-us",
      title: "Support",
    },
    {
      num: "3",
      url: "https://api.whatsapp.com/send?phone=919587867258",
      title: "Live Chat",
    },
    {
      num: "4",
      url: "/#advisor",
      title: "Our Advisor",
    },
  ];
  const Contact = [
    {
      num: "1",
      icon: <RiLinkedinFill size={24} />,
      // url: "https://www.linkedin.com/in/effybiz-private-limited-81b160238",
      url: "https://www.linkedin.com/company/effybiz-private-limited",
    },
    {
      num: "2",
      icon: <IoLogoInstagram size={24} />,
      url: "https://www.instagram.com/effybiz_/?hl=en",
    },
    {
      num: "3",
      icon: <TiSocialFacebook size={24} />,
      url: "https://www.facebook.com/effybiz-Private-Limited-110909321596135",
    },
    {
      num: "4",
      icon: <IoLogoTwitter size={24} />,
      url: "https://twitter.com/effybiztech",
    },
  ];
  const ContactDetails = [
    {
      num: "1",
      icon: <MdAddIcCall size={20} />,
      url: "tel:1-415- 735-4966",
      detail: "+1-415- 735-4966",
    },
    {
      num: "2",
      icon: <AiOutlineMail size={20} />,
      url: "mailto:enquire@effybiz.com",
      detail: "enquire@effybiz.com",
    },
    {
      num: "3",
      icon: <CiGlobe size={20} />,
      url: "/",
      detail: "www.effycontent.com",
    },
    {
      num: "4",
      icon: <HiLocationMarker size={20} />,
      url: "https://www.google.com/maps/dir//effybiz/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x396db3134aeb1007:0x6b2253a37cf5c82e?sa=X&ved=2ahUKEwjot6K63cH8AhUqSWwGHallCa4Q9Rd6BAhdEAU",
      detail: `340 S Lemon Ave, Walnut, CA 91789, USA`,
    },
  ];
  return (
    <div className="bg-[#0D0024] text-white text-opacity-50 w-full md:pb-0 pb-6">
      <div className=" items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 flex  justify-between py-16 border-b border-white/10">
        <div className="space-y-4 ">
          <h2 className="text-5xl font-bold text-white capitalize ">
          Take Your Free Demo Now
          </h2>
          <p className="text-base text-white/80 w-4/6">
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying
          </p>
        </div>
        <button className="bg-gradient-to-t from-[#7E44F0] to-[#BB4BD9]  px-6 py-2.5 text-white uppercase font-semibold text-sm rounded-sm">
        Try Plan now
        </button>
      </div>
      <footer className="items-start w-11/12 mx-auto  2xl:w-9/12 xl:w-5/6  grid  grid-cols-1 gap-4 py-10   lg:grid-cols-6 md:grid-cols-3 md:gap-10  border-b border-white/10">
        <div className="col-span-1 space-y-8 md:col-span-2">
          <Link href="/" passHref={true}>
          <h1 className="text-[2.5rem] font-bold text-white">
            Effy<b className="font-bold text-[#6D3AFF]">AI</b>
          </h1>
          </Link>
          <p className="text-sm lg:pr-4 xl:w-5/6">
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying
          </p>
          <div className="flex  space-x-4 md:justify-start">
            {Contact.map((elem) => {
              const { icon, url, num } = elem;
              return (
                <a
                  key={num}
                  aria-label="this is linkdin office app"
                  href={url}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center w-10 h-10 duration-200 bg-white/10 rounded-lg cursor-pointer   hover:bg-white/20 hover:text-white trasition"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
        <div className="col-span-1 space-y-8 ">
          <p className="text-lg font-medium text-white whitespace-nowrap">
          Navigation
          </p>
          <div className="space-y-3 text-sm capitalize">
            {About.map((elem) => {
              const { title, url, num } = elem;
              return (
                <div
                  key={num}
                  className="flex transition duration-150 cursor-pointer itmes-center hover:text-gray-50"
                >
                  <Link href={url} passHref={true}>
                    {title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-1 space-y-8 ">
          <p className="text-lg font-medium text-white whitespace-nowrap">
          What We Do
          </p>
          <div className="space-y-3 text-sm capitalize">
            {Services.map((elem) => {
              const { title, url, num } = elem;
              return (
                <div
                  key={num}
                  className="flex transition duration-150 cursor-pointer itmes-center hover:text-gray-50"
                >
                  <Link href={url} passHref={true}>
                    {title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-1 space-y-8 ">
          <p className="text-lg font-medium text-white whitespace-nowrap">
          LEGAL
          </p>
          <div className="space-y-3 text-sm capitalize">
            {Usefull.map((elem) => {
              const { title, url, num } = elem;
              return (
                <div
                  key={num}
                  className="flex transition duration-150 cursor-pointer itmes-center hover:text-gray-50"
                >
                  <Link href={url} passHref={true}>
                    {title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-1 space-y-8 ">
          <p className="text-lg font-medium text-white">TALK TO US</p>
          <div className="space-y-3 text-sm">
            {ContactDetails.map((elem) => {
              const { icon, url, num, detail } = elem;
              return (
                <div key={num} className="flex space-x-2 itmes-center">
                  <span> {icon}</span>
                  <a href={url}> {detail}</a>
                </div>
              );
            })}
          </div>
        </div>
      </footer>

      <div className="md:flex items-center space-y-2 md:space-y-0 justify-between w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 py-8 md:py-12  text-sm border-t  border-white/10">
        <p>© 2023 EffyAi. All Rights Reserved. </p>

        <p>
          All Right Reserved{" "}
          <Link className="text-blue-400" href="/terms-and-conditions">
            {" "}
            Terms & Condition
          </Link>{" "}
          ~{" "}
          <Link className="text-blue-400" href="/privacy-policy">
            {" "}
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
