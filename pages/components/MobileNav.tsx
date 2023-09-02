import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdMenuOpen, MdMenu, } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
import { FiHome } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbApps, TbArtboard, TbArticle } from "react-icons/tb";
import { IoPricetagOutline } from "react-icons/io5";
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
 
 
 
 
export default function MobileNav(props: any) {
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



  return (
    <header className={`top-0 z-50 header-section inset-x-0 ease-in-out duration-300  ${scrollPosition > 50 ? "fixed bg-dark " : "absolute bg-transparent"}`}>  
      <nav className="z-20 flex items-center justify-between w-full px-4 py-0 mx-auto 2xl:w-9/12 xl:w-10/12 lg:w-11/12 md:px-0 ">
        <div className="flex items-center flex-shrink-0 text-white ">
        <Link
          passHref={true}
          href="/"
          className="relative flex items-center flex-shrink-0 text-white"
        >
          <h1 className="text-[2.5rem] font-bold text-white font-opensans">
            effy<b className="font-bold text-transparent bg-clip-text bg-linear-1">AI</b>
          </h1>
        </Link>
        </div>
        <button
          onClick={() => toggleSlideover()}
          className="flex items-center p-2 m-2 my-4 rounded cursor-pointer bg-slate-100 text-slate-600 xl:hidden"
        >
          {menu ? <MdMenuOpen size={26} /> : <MdMenu size={26} />}
        </button>
        <div id="slideover-container"
          className="fixed inset-0 invisible w-full h-full" >
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
              <div className="text-[#FFFFFF] text-lg font-semibold">
                Menu
              </div>
              <span
                onClick={() => toggleSlideover()}
                className="p-2 rounded-full bg-slate-100/20"
              >
                <VscChromeClose size={24} className="text-white" />
              </span>
            </div>
            <div className="font-medium text-white divide-y divide-white/10">
              <div>
                <Link
                  onClick={() => toggleSlideover()}
                  href="/"
                  passHref={true}
                >
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
                  <MdKeyboardArrowDown size={30} className={showNav === 1 ? "rotate-180" : "rotate-0"} />
                </div>
                <div
                  className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 1 ? "max-h-full" : "max-h-0"
                    } `}
                >
                  <ul className="grid grid-cols-1 gap-2 p-4">
                    
                    <div className="p-2 space-y-2 text-sm  ">
                      {MobileApp.map((elem: any) => {
                        const { icon, name, num, url } = elem;
                        return (
                          <li key={num} className="  py-1.5 text-white whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                            <Link onClick={() => setShowNav(showNav === 1 ? 0 : 1)} href={url} passHref={true} > 
                              {name}
                            </Link>
                          </li>);
                      })}
                    </div> 
                  </ul>
                </div>
              </div>
              <div onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                className={
                  showNav === 2
                    ? "flex justify-between p-3 items-center px-6 bg-white/10"
                    : "flex justify-between p-3 items-center px-6 bg-transparent "
                }>
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
                  } >
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
                  } >
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
      </nav>
    </header>
  );
}
