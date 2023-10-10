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
                                                        
                            <div className={`col-span-6 lg:col-span-6 md:space-y-5 lg:max-w-md space-y-3 `} >
                             
                              <h3 className="text-white xl:text-4xl 2xl:text-[2.6rem] md:text-3xl text-2xl 2xl:leading-snug font-bold text-center md:text-left">
                              Meet EffyAi Dubbing
                              </h3>
                              <p className="md:text-lg text-white/70 font-light leading-[20px] text-center md:text-left ">
                              EffyDUB Dubbing can transform your video into over 100 languages and accents, producing voices that sound remarkably human. Whether it's the excitement of sports, the passion of documentaries, or other rich emotions, EffyDUB's dubbing enhances your video content, ensuring it delivers an engaging experience to your global audience."  
                              </p>
                              
                            </div>

                            <div className={`col-span-6 lg:col-span-6 flex `}  >
                              <Image
                                className="object-cover "
                                src="/images/meet-effyai-dubbing.png"
                                width={700}
                                height={519}
                                loading="eager"
                                alt=""
                              />
                            </div>

                          </div>
                        </div>
                      </div>
               
              </div>
    </>
  );
}
