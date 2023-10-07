import React, {useRef, useEffect}  from "react";
import Image from "next/image";
import Link from "next/link";
 
// const { useRef, useEffect } = React;

 

export default function EffyImageGenerator(props: any) {
   
  return (
    <>
  <div className="space-y-5 md:space-y-20">
              
                      <div className="relative" >
                        <div className={`absolute  `}>
                          <Image
                            className="object-cover "
                            src="/images/bg-circle-glow.svg"
                            width={1200}
                            height={1200}
                            loading="eager"
                            alt="bg-circle-glow.svg"
                          />
                        </div>
                        <div className="flex flex-col px-4 mx-auto 2xl:w-9/12 xl:w-5/6 md:items-center gap-10 relative">
                          <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-10 2xl:gap-20 items-center border border-white/10 rounded-md p-3 md:p-0 md:border-none md:rounded-none">
                            
                            <div
                              className={`col-span-6 lg:col-span-6 flex `}
                                >
                              <Image
                                className="object-cover "
                                src="/images/effyimages.png"
                                width={700}
                                height={519}
                                loading="eager"
                                alt=""
                              />
                            </div>

                            <div className={`col-span-6 lg:col-span-6 md:space-y-5 lg:max-w-md `} >
                             
                              <h3 className="text-white xl:text-4xl 2xl:text-[2.6rem] md:text-3xl text-2xl 2xl:leading-snug font-bold text-center md:text-left">
                              Introducing EffyAi Image Generator
                              </h3>
                              <p className="md:text-lg text-white/70 font-light leading-[20px] text-center md:text-left py-2">
                              EffyAI introduces a groundbreaking approach to video creation with our avatar-based personalized videos. Imagine having an animated representation of yourself or your brand, seamlessly integrated into engaging narratives. Our AI and ML algorithms meticulously craft avatars that closely resemble real individuals, providing a truly personalized touch. 
                              </p>
                              
                            </div>

                          </div>
                        </div>
                      </div>
               
              </div>
    </>
  );
}
