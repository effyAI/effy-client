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
      title: "Virtual Events and Webinars",
      descrip:
        "Participants can create personalised avatars for virtual conferences, webinars, and online social gatherings, making the experience more interactive and enjoyable.",
    },
    {
      id: 2,
      counter: "2",
      title: "Virtual Gaming",
      descrip:
        "Gamers can generate custom avatars that resemble their real-life appearance and animate them using lip-syncing technology, adding a personal touch to multiplayer gaming sessions.",
    },
    {
      id: 3,
      counter: "3",
      title: "E-Learning and Language Learning Platforms",
      descrip:
        "Language learners can create avatars that mimic their pronunciation, providing a visual representation of their speaking progress and assisting with language practice.",
    },
    {
      id: 4,
      counter: "4",
      title: "Social Media and Online Forums",
      descrip:
        "Users can use custom avatars with lip-syncing to communicate with friends, followers, or community members in a fun and creative manner.",
    },
    {
      id: 5,
      counter: "5",
      title: "Augmented Reality (AR) Applications",
      descrip:
        "AR-based mobile apps can allow users to project their custom avatars onto real-world environments and communicate using lip-synced voiceovers.",
    },
  ];
  
  const TextSpeechTab = [
    {
      id: 1,
      counter: "1",
      title: "Customer Support and Chatbots",
      descrip:
        "Online businesses use platform avatars with text-to-speech capabilities to interact with customers, providing a more engaging and personalized support experience.",
    },
    {
      id: 2,
      counter: "2",
      title: "Multilingual News Delivery",
      descrip:
        "Text-to-speech technology enables news reader apps to deliver news content in different languages, catering to a diverse audience and providing access to international news sources.",
    },
    {
      id: 3,
      counter: "3",
      title: "Virtual Assistants and Voice-Activated Devices",
      descrip:
        "Voice-enabled devices like smart speakers use platform avatars to display relevant information while responding to user queries using text-to-speech technology.",
    },
    {
      id: 4,
      counter: "4",
      title: "Educational Apps and Learning Platforms",
      descrip:
        "Educational apps employ platform avatars with text-to-speech to narrate lessons, stories, or explanations, enhancing the learning experience for students.",
    },
    {
      id: 5,
      counter: "5",
      title: "Entertainment and Gaming Platforms",
      descrip:
        "Interactive platforms and games feature platform avatars with text-to-speech to guide users through game play or narrate storytelling elements.",
    },
  ];
  const videoConversionTab = [
    {
      id: 1,
      counter: "1",
      title: "Virtual Gaming",
      descrip:
        "Gamers can generate custom avatars that resemble their real-life appearance and animate them using lip-syncing technology, adding a personal touch to multiplayer gaming sessions.",
    },
  
    {
      id: 2,
      counter: "2",
      title: "Virtual Events and Webinars",
      descrip:
        "Participants can create personalised avatars for virtual conferences, webinars, and online social gatherings, making the experience more interactive and enjoyable.",
    },
    {
      id: 3,
      counter: "3",
      title: "Augmented Reality (AR) Applications",
      descrip:
        "AR-based mobile apps can allow users to project their custom avatars onto real-world environments and communicate using lip-synced voiceovers.",
    },
    {
      id: 4,
      counter: "4",
      title: "Social Media and Online Forums",
      descrip:
        "Users can use custom avatars with lip-syncing to communicate with friends, followers, or community members in a fun and creative manner.",
    },
    {
      id: 5,
      counter: "5",
      title: "E-Learning and Language Learning Platforms",
      descrip:
        "Language learners can create avatars that mimic their pronunciation, providing a visual representation of their speaking progress and assisting with language practice.",
    },
  ];

export default function RealLifeAppliaction(props: any) {
    const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
 <div className="flex flex-col md:grid md:grid-cols-12 gap-10 lg:gap-20 items-center">
                  <div className="col-span-6 md:flex flex-col gap-5 font-opensans hidden">
                    <button
                      className={
                        "text-white text-xl rounded-xl p-px overflow-hidden " +
                        (openTab === 1 ? "bg-linear-1" : "")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                    >
                      <div
                        className={
                          "text-left p-4 py-5 rounded-xl relative before:absolute before:inset-0 before:rounded-xl " +
                          (openTab === 1
                            ? "bg-dark before:bg-white/5"
                            : "before:bg-transparent")
                        }
                      >
                        <span className="relative text-2xl">
                          Creating a Custom Avatar with Lip Syncing
                        </span>
                      </div>
                    </button>
                    <button
                      className={
                        "text-white text-xl rounded-xl p-px overflow-hidden " +
                        (openTab === 2 ? "bg-linear-1" : "")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                    >
                      <div
                        className={
                          "text-left p-4 py-5 rounded-xl relative before:absolute before:inset-0 before:rounded-xl " +
                          (openTab === 2
                            ? "bg-dark before:bg-white/5"
                            : "before:bg-transparent")
                        }
                      >
                        <span className="relative text-2xl">
                          Choosing Platform Avatar with Text-to-Speech
                        </span>
                      </div>
                    </button>
                    <button
                      className={
                        "text-white text-xl rounded-xl p-px overflow-hidden " +
                        (openTab === 3 ? "bg-linear-1" : "")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                    >
                      <div
                        className={
                          "text-left p-4 py-5 rounded-xl relative before:absolute before:inset-0 before:rounded-xl " +
                          (openTab === 3
                            ? "bg-dark before:bg-white/5"
                            : "before:bg-transparent")
                        }
                      >
                        <span className="relative text-2xl">
                          Text to Video Conversion
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="col-span-6 space-y-5 md:space-y-0">
                  <div className="space-y-0">
                      <button
                        className={
                          "text-white text-lg p-px overflow-hidden w-full md:hidden md:border-none " +
                          (openTab === 1
                            ? "bg-linear-1 border-none rounded-t-md"
                            : "border border-white/10 rounded-md")
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(1);
                        }}
                      >
                        <div
                          className={
                            "text-left p-3 relative flex justify-between items-center gap-3 before:absolute before:inset-0 before:rounded-md " +
                            (openTab === 1
                              ? "bg-dark before:bg-white/5 rounded-t-md"
                              : "before:bg-transparent rounded-md")
                          }
                        >
                          <span className="relative text-lg font-semibold leading-tight">
                            Creating a Custom Avatar with Lip Syncing
                          </span>
                          <span className="flex shrink-0 w-5 h-5 justify-center items-center">
                                <IconChevronDown size={20} className={`ease-in-out duration-300 ${openTab === 1 && 'rotate-180' }`} />
                            </span>
                        </div>
                      </button>

                      {openTab === 1 && (
                        <div className="relative space-y-10 border border-white/10 rounded-b-md p-3 md:p-0 md:border-none md:rounded-none">
                          {lipSyncingTab.map((item, index) => {
                            return (
                              <div key={item.id} className="flex gap-5">
                                <div className="md:text-xl text-white">
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
                      )}
                    </div>
                    <div className="space-y-0">
                      <button
                        className={
                          "text-white text-lg p-px overflow-hidden w-full md:hidden md:border-none " +
                          (openTab === 2
                            ? "bg-linear-1 border-none rounded-t-md"
                            : "border border-white/10 rounded-md")
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(2);
                        }}
                      >
                        <div
                          className={
                            "text-left p-3 relative flex justify-between items-center gap-3 before:absolute before:inset-0 before:rounded-md " +
                            (openTab === 2
                              ? "bg-dark before:bg-white/5 rounded-t-md"
                              : "before:bg-transparent rounded-md")
                          }
                        >
                          <span className="relative text-lg font-semibold">
                            Choosing Platform Avatar with Text-to-Speech
                          </span>
                          <span className="flex shrink-0 w-5 h-5 justify-center items-center">
                                <IconChevronDown size={20} className={`ease-in-out duration-300 ${openTab === 2 && 'rotate-180' }`} />
                            </span>
                        </div>
                      </button>

                      {openTab === 2 && (
                        <div className="relative space-y-10 border border-white/10 rounded-b-md p-3 md:p-0 md:border-none md:rounded-none">
                          {TextSpeechTab.map((item, index) => {
                            return (
                              <div key={item.id} className="flex gap-5">
                                <div className="md:text-xl text-white">
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
                      )}
                    </div>
                    <div className="space-y-0">
                      <button
                        className={
                          "text-white text-lg p-px overflow-hidden w-full md:hidden md:border-none " +
                          (openTab === 3
                            ? "bg-linear-1 border-none rounded-t-md"
                            : "border border-white/10 rounded-md")
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(3);
                        }}
                      >
                        <div
                          className={
                            "text-left p-3 flex justify-between items-center gap-3 relative before:absolute before:inset-0 before:rounded-md " +
                            (openTab === 3
                              ? "bg-dark before:bg-white/5 rounded-t-md"
                              : "before:bg-transparent rounded-md")
                          }
                        >
                          <span className="relative text-lg font-semibold">
                            Text to Video Conversion
                          </span>
                            <span className="flex shrink-0 w-5 h-5 justify-center items-center">
                                <IconChevronDown size={20} className={`ease-in-out duration-300 ${openTab === 3 && 'rotate-180' }`} />
                            </span>

                        </div>
                      </button>
                      {openTab === 3 && (
                        <div className="relative space-y-10 border border-white/10 rounded-b-md p-3 md:p-0 md:border-none md:rounded-none">
                          {videoConversionTab.map((item, index) => {
                            return (
                              <div key={item.id} className="flex gap-5">
                                <div className="md:text-xl text-white">
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
                      )}
                    </div>
                  </div>
                </div>
    </>
  );
}