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
      url: "/effy-video-dark",
      title: "EffyAi video",
    },
    {
      num: "2",
      url: "/text-to-image",
      title: "EffyAi Image",
    },
    {
      num: "3",
      url: "/effy-voice-dark",
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
    <footer className="bg-black text-white/50 w-full md:pb-0 pb-6 relative">
      <div className="absolute inset-0 bg-black flex items-end justify-center after:absolute after:inset-0 after:bg-linear-7 after:backdrop-blur-2xl">
        <Image
          className="object-cover w-full h-auto"
          src="/images/footer-bg.png"
          width={1920}
          height={400}
          loading="eager"
          alt="footer-bg"
        />
      </div>

      <div className="relative">
        <div className="items-center w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 flex flex-wrap md:flex-nowrap gap-10 justify-between py-16  border-white/10">
          <div className="space-y-4 max-w-4xl">
            <h2 className="md:text-4xl text-3xl font-bold  text-white capitalize text-center sm:text-left">
              Take Your Free Demo Now
            </h2>
            <p className="text-base text-white/70 font-light text-center sm:text-left">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying
            </p>
          </div>
          <div className="flex justify-center sm:justify-start w-full sm:w-auto">
            <button className="block shrink-0 text-sm font-semibold active text-white bg-linear-1 rounded-full p-px text-center hover:text-white  font-opensans cursor-pointer transition duration-300 relative uppercase">
              <span className="relative block bg-[#0D0C17] rounded-full px-6 lg:py-2.5 py-2">
                Try Plan now
              </span>
            </button>
          </div>
        </div>
        <div className="items-start w-11/12 mx-auto  2xl:w-9/12 xl:w-5/6 flex flex-col xl:grid xl:grid-cols-12 gap-4 md:gap-10 pb-10 border-b border-white/10">
          <div className="space-y-5 col-span-4">
            <Link href="/" passHref={true}>
              <h1 className="text-[2.5rem] font-bold text-white text-center sm:text-left">
                Effy<b className="font-bold text-[#6D3AFF]">AI</b>
              </h1>
            </Link>
            <p className="text-sm lg:pr-4 xl:w-5/6 text-center sm:text-left">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document o
              a typeface without relying
            </p>
          </div>
          <div className="col-span-7 w-full sm:w-auto flex flex-col sm:grid sm:grid-cols-12 gap-4 md:gap-10">
            <div className="sm:col-span-6 md:col-span-3 space-y-4 ">
              <p className="text-lg font-medium text-white whitespace-nowrap text-center sm:text-left">
                Navigation
              </p>
              <div className="space-y-3 text-sm capitalize">
                {About.map((elem) => {
                  const { title, url, num } = elem;
                  return (
                    <div
                      key={num}
                      className="flex transition duration-150 cursor-pointer itmes-center hover:text-gray-50 justify-center sm:justify-start text-center sm:text-left"
                    >
                      <Link href={url} passHref={true}>
                        {title}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="sm:col-span-6 md:col-span-3 space-y-3 ">
              <p className="text-lg font-medium text-white whitespace-nowrap text-center sm:text-left">
                What We Do
              </p>
              <div className="space-y-3 text-sm capitalize">
                {Services.map((elem) => {
                  const { title, url, num } = elem;
                  return (
                    <div
                      key={num}
                      className="flex transition duration-150 cursor-pointer itmes-center hover:text-gray-50 justify-center sm:justify-start text-center sm:text-left"
                    >
                      <Link href={url} passHref={true}>
                        {title}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="sm:col-span-6 md:col-span-3 space-y-3 ">
              <p className="text-lg font-medium text-white whitespace-nowrap text-center sm:text-left">
                LEGAL
              </p>
              <div className="space-y-3 text-sm capitalize">
                {Usefull.map((elem) => {
                  const { title, url, num } = elem;
                  return (
                    <div
                      key={num}
                      className="flex transition duration-150 cursor-pointer itmes-center hover:text-gray-50 justify-center sm:justify-start text-center sm:text-left"
                    >
                      <Link href={url} passHref={true}>
                        {title}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="sm:col-span-6 md:col-span-3 space-y-3 ">
              <p className="text-lg font-medium text-white text-center sm:text-left">
                TALK TO US
              </p>
              <div className="space-y-3 text-sm">
                {ContactDetails.map((elem) => {
                  const { icon, url, num, detail } = elem;
                  return (
                    <div
                      key={num}
                      className="flex space-x-2 itmes-center justify-center sm:justify-start text-center sm:text-left"
                    >
                      <span> {icon}</span>
                      <a href={url}> {detail}</a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col items-center gap-4 justify-between w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 py-8 md:py-12 text-sm border-t border-white/10">
          <p className="text-center md:text-left">
            &copy; 2023 EffyAi. All Rights Reserved. |{" "}
            <Link className="text-purple-500" href="/terms-and-conditions">
              Terms & Condition
            </Link>{" "}
            |{" "}
            <Link className="text-purple-500" href="/privacy-policy">
              Privacy Policy
            </Link>
          </p>

          <div className="flex gap-2 justify-center">
            {Contact.map((elem) => {
              const { icon, url, num } = elem;
              return (
                <a
                  key={num}
                  aria-label="this is linkdin office app"
                  href={url}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center w-10 h-10 duration-200 border border-white/10 rounded-full cursor-pointer  hover:bg-white/20 hover:text-white trasition"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
