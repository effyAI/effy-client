import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs"; 

export default function HeroSection(props: any) { 

  let {heading, ptag, btnLink, btnName, imgSrc, Width, Height, altTag} = props;

 
  return (
    <div className="flex flex-col-reverse w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 md:flex-row md:items-center md:space-x-20">
      <div className="w-full">
        <div className="space-y-6">
          <h1 className="text-[#222] xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
            {heading}
          </h1>

          <p className="w-full mx-auto text-base  text-black/80 lg:text-lg font-medium">
            {ptag}
          </p>
        </div>
        <div className="py-10">
        <Link href="/contact-us" passHref={true}  >
            <div className="px-10 py-4 text-lg rounded-md relative inline-flex group items-center justify-center  cursor-pointer  bg-white text-black overflow-hidden font-medium">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
              <span className="relative"> {btnName}</span>
              <BsArrowRight className="ml-2 transition-all duration-200 ease-out " />
            </div>
          </Link>
        </div>
      </div>

      <div className="  w-full flex justify-center">
        <Image
          className="object-cover "
          src={imgSrc}
          width={Width}
          height={Height}
          loading="eager"
          priority
          alt={altTag}
        />
      </div>
    </div>
  );
}
 
