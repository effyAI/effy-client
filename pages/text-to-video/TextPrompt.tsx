import Image from "next/image"; 
import React, { useState } from "react";
// import Menu from "./menu";

const Menu = [
  {
    id: 1,
    image: "/images/video-1.mp4",
    name: "Cinematic",
    category: "Cinematic",
     
  },
  {
    id: 2,
    image: "/images/video-2.mp4",
    name: "Cities",
    category: "Cities",
    
  }, 
];
export default function TextPrompt(props: any) {
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState(false);
  const filterItem = (categItem:any) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
  };

 
  return (
    <>
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2 xl:gap-3 ">
          
          <button
                className={"rounded-full border py-2 px-5 text-center flex-1 whitespace-nowrap text-white/70 ease-in-out duration-300 text-sm xl:text-base " + (active ? "border-white/10 bg-purple/10" : "bg-white/10 border-transparent hover:bg-white/5")}
                onClick={() => setItems(Menu)}
              >
                All
              </button>
              <button
                className={"rounded-full border py-2 px-5 text-center flex-1 whitespace-nowrap text-white/70 ease-in-out duration-300 text-sm xl:text-base " + (active ? "border-white/10 bg-purple/10" : "bg-white/10 border-transparent hover:bg-white/5") }              
                onClick={() => filterItem("Cinematic")}
              >
                Cinematic
              </button>
            
              <button
                className={"rounded-full border py-2 px-5 text-center flex-1 whitespace-nowrap text-white/70 ease-in-out duration-300 text-sm xl:text-base " + (active ? "border-white/10 bg-purple/10" : "bg-white/10 border-transparent hover:bg-white/5")}                      
                onClick={() => filterItem("Cities")}
              >
                Cities
              </button>
          
            <button
                className={"rounded-full border py-2 px-5 text-center flex-1 whitespace-nowrap text-white/70 ease-in-out duration-300 text-sm xl:text-base " + (active ? "border-white/10 bg-purple/10" : "bg-white/10 border-transparent hover:bg-white/5")}
                onClick={() => filterItem("Science Fiction")}
              >
               Science Fiction
              </button>
             
              <button
                className={"rounded-full border py-2 px-5 text-center flex-1 whitespace-nowrap text-white/70 ease-in-out duration-300 text-sm xl:text-base " + (active ? "border-white/10 bg-purple/10" : "bg-white/10 border-transparent hover:bg-white/5")}
                onClick={() => filterItem("Fantasy")}
              >
                Fantasy
              </button>
              <button
                className={"rounded-full border py-2 px-5 text-center flex-1 whitespace-nowrap text-white/70 ease-in-out duration-300 text-sm xl:text-base " + (active ? "border-white/10 bg-purple/10" : "bg-white/10 border-transparent hover:bg-white/5")}
                onClick={() => filterItem("Horror")}
              >
                Horror
              </button>
              <button
                className={"rounded-full border py-2 px-5 text-center flex-1 whitespace-nowrap text-white/70 ease-in-out duration-300 text-sm xl:text-base " + (active ? "border-white/10 bg-purple/10" : "bg-white/10 border-transparent hover:bg-white/5")}
                onClick={() => filterItem("Romance")}
              >
                Romance
              </button>
              <button
                className={"rounded-full border py-2 px-5 text-center flex-1 whitespace-nowrap text-white/70 ease-in-out duration-300 text-sm xl:text-base " + (active ? "border-white/10 bg-purple/10" : "bg-white/10 border-transparent hover:bg-white/5")}
                onClick={() => filterItem("CyberPunk")}
              >
                CyberPunk
              </button>
              <button
                className={"rounded-full border py-2 px-5 text-center flex-1 whitespace-nowrap text-white/70 ease-in-out duration-300 text-sm xl:text-base " + (active ? "border-white/10 bg-purple/10" : "bg-white/10 border-transparent hover:bg-white/5")}
                onClick={() => filterItem("Comedy")}
              >
                Comedy
              </button>
            
             
          
      </div>
        
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3">
            {items.map((elem) => {
              const { id, name, image,  } = elem;
  
              return (
                <div className="overflow-hidden flex" key={id}>
                  {/* <Image
                    className="object-cover w-full"
                    src={image}
                    width={215}
                    height={249}
                    loading="eager"
                    alt={name}
                  /> */}
                    
                    <video width={'100%'}
                    height={350} controls>
                      <source src={image} type="video/mp4" /> 
                    </video>
                  
                </div>
              );
            })}
      </div>
    </div>
    </>
  );
}
