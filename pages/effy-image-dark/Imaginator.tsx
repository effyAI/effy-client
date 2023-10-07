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
      title: "Write your prompt or get inspired by one from our gallery",
      descrip:
        "Feel free to modify, change and re-interpret your own narrative.",
    },
    {
      id: 2,
      counter: "2",
      title: "Choose the format and style",
      descrip:
        "Your image can be like a photo, Digital Art, 3D, a painting, or even… a surprise! Play around with the options to achieve your desired outcome.",
    },
    {
      id: 3,
      counter: "3",
      title: "Select the one that suits you best, or try again for other results",
      descrip:
        "Once you’ve got your four images, tweak some final details with a few clicks.",
    },
    {
      id: 4,
      counter: "4",
      title: "Share them wherever you like!",
      descrip:
        "Download or edit your image with Wepik’s editor. You can even publish and schedule it with the Social Media Scheduler!",
    },
     
  ]; 

export default function RealLifeAppliaction(props: any) {
    const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
        <div className="flex flex-col md:grid md:grid-cols-12 gap-10 lg:gap-20 items-start">
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
                     
 
                        <div className="relative space-y-10 xl:space-y-20 border border-white/10 rounded-b-md p-3 md:p-0 md:border-none md:rounded-none">
                          {lipSyncingTab.map((item, index) => {
                            return (
                              <div key={item.id} className="flex gap-5 items-start">
                                <div className="md:text-xl text-[#596EED] shrink-0 w-14 h-14 rounded-xl flex justify-center items-center bg-white bg-gradient-to-t from-[#B5BCF8] to-[#98D9F4]">
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
