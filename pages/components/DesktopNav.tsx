import Link from "next/link";

import Image from "next/image";
import react, { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdMenuOpen, MdMenu } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import {
  TbApps,
  TbArtboard,
  TbArticle,
  TbMoon,
  TbSunHigh,
  TbX,
} from "react-icons/tb";
import { IoPricetagOutline } from "react-icons/io5";
import { IconMenuDeep, IconX } from "@tabler/icons-react";

const MobileApp = [
  { num: "1", name: "Effy AI Video", url: "/effy-video" },
  {
    num: "2",
    name: "Effy AI Image",
    url: "/effy-image",
  },

  {
    num: "3",
    name: "Effy AI Dubbing",
    url: "/android-app-development",
  },
  {
    num: "4",
    name: "Effy AI Avatar",
    url: "/flutter-development-company",
  },
  {
    num: "5",
    name: "Effy AI Voice",
    url: "/news-application-development",
  },
  {
    num: "6",
    name: "Effy AI Doc",
    url: "/live-line-cricket-mobile-app-development",
  },
];

export default function DesktopNav(props: any) {
  const [showNav, setShowNav] = useState(0);
  const [menu] = useState(false);
  function toggleSlideover(): void {
    const container = document.getElementById("slideover-container");
    const bg = document.getElementById("slideover-bg");
    const slideover = document.getElementById("slideover");

    if (container && bg && slideover) {
      container.classList.toggle("invisible");
      bg.classList.toggle("opacity-0");
      bg.classList.toggle("opacity-50");
      slideover.classList.toggle("translate-x-full");
    }
  }

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // To change color mode of the site
  const [colorMode, setColorMode] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("dark", colorMode);
  }, [colorMode]);

  return (
    <>
      <header
        className={`top-0 z-50 header-section inset-x-0 ease-in-out duration-300  ${
          scrollPosition > 50 ? "fixed bg-dark " : "absolute bg-transparent"
        }`}
      >
        <nav className="z-20 flex items-center justify-between w-full px-4 py-3 lg:py-0 mx-auto 2xl:w-9/12 xl:w-5/6">
          <Link
            passHref={true}
            href="/"
            className="relative flex items-center flex-shrink-0 text-white"
          >
            <h1 className="text-3xl lg:text-[2.5rem] font-bold text-white font-opensans">
              effy
              <b className="font-bold text-transparent bg-clip-text bg-linear-1 ">
                AI
              </b>
            </h1>
          </Link>

          <div
            className={
              "lg:flex hidden lg:w-auto w-full items-center text-white px-6 "
            }
          >
            <div className="block space-x-4 text-sm font-semibold 2xl:space-x-6 lg:flex lg:items-center lg:space-y-0 lg:p-0">
              <Link href="/" passHref={true}>
                <span className="relative block text-base leading-none  border-b-2 border-transparent cursor-pointer py-9 hover:text-white text-white/80 ease-in-out duration-300   ">
                  Home
                </span>
              </Link>
              <div className="relative group ">
                <button
                  onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                  className="inline-flex items-center py-8 text-base border-b-2 border-transparent hover:text-white text-white/80 space-x-2"
                >
                  <span className={showNav === 1 ? " text-white/80" : "  "}>
                    Products
                  </span>
                  <MdKeyboardArrowDown className="text-white/80" size={18} />
                </button>
                <div className="z-40 lg:pt-0 pt-2 mt-[10px] bg-dark bg-linear-3 rounded-2xl capitalize text-white lg:absolute top-20 shadow-2xl 
                lg:border border-white/10 relative -left-72 transform hidden group-hover:block  transition duration-200 ease-in-out origin-top w-[50rem]">
                  <div className="absolute -top-2 2xl:inset-x-[21rem] xl:inset-x-[20rem] bg-[#27252D] rotate-45  w-4 h-4"></div>
                  <div className="p-8 mx-auto text-sm">
                    <div className="grid grid-cols-2 gap-6">
                      <Link
                        href="/effy-video-dark"
                        className="flex items-start space-x-4 cursor-pointer hover:bg-white/5 p-4 rounded-xl ease-in-out duration-300"
                      >
                        <Image
                          src="/images/video-call.png"
                          alt={""}
                          width={50}
                          height={50}
                        />
                        <div className="space-y-1 ">
                          <h2 className="text-xl font-bold">EffyAI-Video</h2>
                          <p className="font-normal">
                            In publishing and graphic design, Lorem ipsum is
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/text-to-image"
                        className="flex items-start space-x-4 cursor-pointer hover:bg-white/5 p-4 rounded-xl ease-in-out duration-300"
                      >
                        <Image
                          src="/images/picture.png"
                          alt={""}
                          width={50}
                          height={50}
                        />
                        <div className="space-y-1 ">
                          <h2 className="text-xl font-bold">EffyAI-Image</h2>
                          <p className="font-normal">
                            In publishing and graphic design, Lorem ipsum is
                          </p>
                        </div>
                      </Link>
                      <div className="flex items-start space-x-4 cursor-pointer hover:bg-white/5 p-4 rounded-xl ease-in-out duration-300">
                        <Image
                          src="/images/voice-scanner.png"
                          alt={""}
                          width={50}
                          height={50}
                        />
                        <div className="space-y-1 ">
                          <h2 className="text-xl font-bold">EffyAI-Dubbing</h2>
                          <p className="font-normal">
                            In publishing and graphic design, Lorem ipsum is
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 cursor-pointer hover:bg-white/5 p-4 rounded-xl ease-in-out duration-300">
                        <Image
                          src="/images/lawyer.png"
                          alt={""}
                          width={50}
                          height={50}
                        />
                        <div className="space-y-1 ">
                          <h2 className="text-xl font-bold">EffyAI-Avatar</h2>
                          <p className="font-normal">
                            In publishing and graphic design, Lorem ipsum is
                          </p>
                        </div>
                      </div>
                      <Link href="/effy-voice-dark" className="flex items-start space-x-4 cursor-pointer hover:bg-white/5 p-4 rounded-xl ease-in-out duration-300">
                        <Image
                          src="/images/audio-message.png"
                          alt={""}
                          width={50}
                          height={50}
                        />
                        <div className="space-y-1 ">
                          <h2 className="text-xl font-bold">EffyAI-Voice</h2>
                          <p className="font-normal">
                            In publishing and graphic design, Lorem ipsum is
                          </p>
                        </div>
                      </Link>
                      <div className="flex items-start space-x-4 cursor-pointer hover:bg-white/5 p-4 rounded-xl ease-in-out duration-300">
                        <Image
                          src="/images/test.png"
                          alt={""}
                          width={50}
                          height={50}
                        />
                        <div className="space-y-1 ">
                          <h2 className="text-xl font-bold">EffyAI-Doc</h2>
                          <p className="font-normal">
                            In publishing and graphic design, Lorem ipsum is
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/" passHref={true}>
                <span className="relative block text-base leading-none transition duration-300 border-b-2 border-transparent cursor-pointer py-9 hover:text-white text-white/80 ">
                  Feature
                </span>
              </Link>
              <Link href="/" passHref={true}>
                <span className="relative block text-base leading-none transition duration-300 border-b-2 border-transparent cursor-pointer py-9 hover:text-white text-white/80 ">
                  About
                </span>
              </Link>
              <Link href="/" passHref={true}>
                <span className="relative block text-base leading-none transition duration-300 border-b-2 border-transparent cursor-pointer py-9 hover:text-white text-white/80 ">
                  Pricing
                </span>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-10">
            <button
              onClick={() => setColorMode(!colorMode)}
              className="relative flex items-center justify-center gap-1 leading-none transition duration-300 rounded-full bg-white/10 md:border md:border-white/10 cursor-pointer h-9 w-9 lg:w-auto lg:h-auto lg:py-1.5 lg:px-3 font-semibold font-opensans text-white/80"
            >
              {colorMode ? (
                <TbMoon size={20} className="lg:text-[#6D3AFF]" />
              ) : (
                <TbSunHigh size={20} className="lg:text-[#6D3AFF]" />
              )}
              <span className="hidden lg:inline-block">
                {colorMode ? "Dark" : "Light"}
              </span>
            </button>
            {/* Mobile menu button */}
            <button
              onClick={() => toggleSlideover()}
              className="flex items-center rounded cursor-pointer text-white lg:hidden"
            >
              {/* {menu ? <MdMenuOpen size={26} /> : <MdMenu size={26} />} */}
              <IconMenuDeep size={35} className="-mt-1.5" />
            </button>
            <div className="hidden lg:flex items-center gap-10">
              <Link href="/" passHref={true}>
                <span className="relative block text-base font-opensans leading-none transition duration-300 border-b-2 border-transparent cursor-pointer py-9 hover:text-white text-white/80 font-semibold ">
                  Blog
                </span>
              </Link>

              <Link href="/contact-us" passHref={true}>
                <span className="block text-sm font-semibold active text-white bg-linear-1 rounded-full p-px text-center hover:text-white lg:mt-0 font-opensans cursor-pointer transition duration-300 relative uppercase ">
                  <span className="relative block bg-[#0D0C17] rounded-full px-6 lg:py-2.5 py-2">
                    Contact us
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        id="slideover-container"
        className="fixed inset-0 invisible w-full h-full z-50"
      >
        <span
          onClick={() => toggleSlideover()}
          id="slideover-bg"
          className="absolute inset-0 w-full h-full transition-all duration-500 ease-out bg-gray-900 "
        ></span>
        <div
          id="slideover"
          className="md:w-96 w-80 bg-gradient-to-b from-[#1CB9F7] to-[#AF65C0]  h-full absolute right-0 duration-300 ease-out transition-all translate-x-full overflow-scroll"
        >
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-2 bg-transparent">
            <div className="text-[#FFFFFF] text-lg font-semibold">Menu</div>
            <span
              onClick={() => toggleSlideover()}
              className="p-2 rounded-full bg-slate-100/20"
            >
              <TbX size={24} className="text-white" />
            </span>
          </div>
          <div className="font-medium text-white divide-y divide-white/10">
            <div>
              <Link onClick={() => toggleSlideover()} href="/" passHref={true}>
                {" "}
                <div className="flex justify-start p-3 px-6 space-x-2 hover:bg-white/10">
                  <FiHome className="text-[#fff]" size={22} />
                  <span>Home</span>
                </div>
              </Link>
            </div>
            <div>
              <div
                onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                className={
                  showNav === 1
                    ? "flex justify-between p-3 items-center px-6 bg-white/10"
                    : "flex justify-between p-3 items-center px-6 bg-transparent "
                }
              >
                <div className="flex items-center space-x-2 ">
                  <TbArtboard className="text-[#fff]" size={22} />
                  <span>Products</span>
                </div>
                <MdKeyboardArrowDown
                  size={30}
                  className={showNav === 1 ? "rotate-180" : "rotate-0"}
                />
              </div>
              <div
                className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${
                  showNav === 1 ? "max-h-full" : "max-h-0"
                } `}
              >
                <ul className="grid grid-cols-1 gap-2 p-4">
                  <div className="p-2 space-y-2 text-sm  ">
                    {MobileApp.map((elem: any) => {
                      const { icon, name, num, url } = elem;
                      return (
                        <li
                          key={num}
                          className="  py-1.5 text-white whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                        >
                          <Link
                            onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                            href={url}
                            passHref={true}
                          >
                            {name}
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                </ul>
              </div>
            </div>
            <div
              onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
              className={
                showNav === 2
                  ? "flex justify-between p-3 items-center px-6 bg-white/10"
                  : "flex justify-between p-3 items-center px-6 bg-transparent "
              }
            >
              <div className="flex items-center space-x-2 ">
                <TbApps className="text-[#fff]" size={22} />
                <span> Feature</span>
              </div>
            </div>

            <div>
              <div
                onClick={() => setShowNav(showNav === 3 ? 0 : 3)}
                className={
                  showNav === 3
                    ? "flex justify-between p-3 items-center px-6 bg-white/10"
                    : "flex justify-between p-3 items-center px-6 bg-transparent "
                }
              >
                <p className="flex items-center space-x-2 ">
                  <HiOutlineUserGroup className="text-[#fff]" size={22} />
                  <span> About</span>
                </p>
              </div>
            </div>
            <div>
              <div
                onClick={() => setShowNav(showNav === 4 ? 0 : 4)}
                className={
                  showNav === 4
                    ? "flex justify-between p-3 items-center px-6 bg-white/10"
                    : "flex justify-between p-3 items-center px-6 bg-transparent "
                }
              >
                <p className="flex items-center space-x-2 ">
                  <IoPricetagOutline className="text-[#fff]" size={22} />
                  <span> Pricing</span>
                </p>
              </div>
            </div>
            <div>
              <div
                onClick={() => setShowNav(showNav === 5 ? 0 : 5)}
                className={
                  showNav === 5
                    ? "flex justify-between p-3 items-center px-6 bg-white/10"
                    : "flex justify-between p-3 items-center px-6 bg-transparent "
                }
              >
                <p className="flex items-center space-x-2 ">
                  <TbArticle className="text-[#fff]" size={22} />
                  <span>Our Blog</span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center py-10">
              <Link
                onClick={() => toggleSlideover()}
                href="/quote"
                passHref={true}
              >
                <div className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-white rounded-full cursor-pointer bg-white/30 w-fit group">
                  Contact us
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
