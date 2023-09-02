import { useState } from "react";
import Image from "next/image"; 


export default function FaqSection(props:any, ) { 

  let {faqData} = props;
  const [currentCount, setCurrentCount] = useState(faqData);
  const data = faqData;
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <section className="">
      <div className=" w-11/12 mx-auto 2xl:w-4/6 xl:w-5/6   lg:px-0  px-6 lg:py-20 py-10 flex md:flex-row gap-10 justify-between ">
        <div className="space-y-6  ">
        <Image src="/images/faq-shape.png" width={200} height={200} alt="faq-shape" />
        <div className="space-y-4 ">
        <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51]  ">
            Frequently Asked Questions !
          </h2>
          <p>Still need to Help chat with us ?</p>
        </div>
         <div>
         <a href="/quote" className="flex "><span className="block text-sm font-semibold  active text-white  bg-gradient-to-r from-[#7E44F0] to-[#BB4BD9] rounded-sm px-6 lg:py-2.5 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative uppercase">Chat with us</span></a>
         </div>
        </div>
        <div className="md:space-y-10 space-y-6  w-full">
          <div className="w-full py-4 space-y-4">
            {faqData.map((elem: any, index: any) => {
              const { title, desc } = elem;
              return (
                <div
                  key={index}
                  className="bg-white border cursor-pointer w-full rounded-lg"
                  onClick={() =>
                    setCurrentCount(currentCount === index ? false : index)
                  }
                >
                  <div className="flex items-start justify-center w-full px-4 py-4 text-base font-medium text-left md:items-center md:px-6 text-slate-800 md:text-lg">
                    <h3 className="w-full text-base font-semibold md:text-lg">
                      {title}
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={
                        currentCount === index
                          ? "icon icon-tabler icon-tabler-chevron-down rotate-180 transition-all duration-200"
                          : "icon icon-tabler icon-tabler-chevron-down rotate-0 transition-all duration-200"
                      }
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  <div
                    className={
                      currentCount === index
                        ? "py-6 px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200 min-h-40"
                        : "pt-0 px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200 min-h-0 h-0 overflow-hidden"
                    }
                  >
                    <p>{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
