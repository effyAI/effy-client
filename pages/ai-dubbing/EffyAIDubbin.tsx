import React, {useRef, useEffect}  from "react";
import Image from "next/image";
import Link from "next/link";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
// const { useRef, useEffect } = React;
 // Real Life Application Tabs
// Tab 1
const lipSyncingTab = [
    {
      id: 1,
      counter: "1",
      title: "Flexible Upload Options:",
      descrip: "Effortlessly upload your video, text, or audio files in any format for seamless integration with our AI dubbing tool.",
    },
    {
      id: 2,
      counter: "2",
      title: "Efficient Dubbing in Minutes",
      descrip: "Our AI Dubbing Editor utilizes advanced technology for high-quality dubbing, analyzing the original audio and delivering synchronized and natural results",
    },
    {
      id: 3,
      counter: "3",
      title: "Instant Preview & Download:",
      descrip: "With a single click, preview and download your dubbed video and voiceovers, including video, vocals, both the original and dubbed languages.",
    }, 
     
  ]; 

export default function RealLifeAppliaction(props: any) {
    const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
        <div className="flex flex-col md:grid md:grid-cols-12 gap-10 lg:gap-20 items-start border border-white/10 rounded-b-md p-3 md:p-0 md:border-none md:rounded-none">
                <div className="col-span-6 space-y-5 md:space-y-0">
                        <div className="overflow-hiddne">
                        <Image
                            className="object-cover "
                            src="/images/imaginator.png"
                            width={1200}
                            height={1200}
                            loading="eager"
                            alt=""
                          />
                        
                        </div>                     
                  </div>


                  <div className="col-span-6 space-y-5 md:space-y-0">
                  <div className="space-y-0">
                     
 
                        <div className="relative space-y-10 xl:space-y-20 ">
                          {lipSyncingTab.map((item, index) => {
                            return (
                              <div key={item.id} className="flex gap-5 items-start">
                                <div className="md:text-xl text-[#596EED] shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-lg flex justify-center items-center bg-white bg-gradient-to-t from-[#B5BCF8] to-[#98D9F4]">
                                    {item.counter}.
                                </div>
                                <div className="space-y-2">
                                  <h2 className="md:text-xl text-white font-semibold md:font-bold font-opensans">
                                    {item.title}
                                  </h2>
                                  <p className="text-white/70">
                                    {item.descrip}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                  
                    </div>
                   
                  
                  </div>




        </div>
    </>
  );
}
