import Image from "next/image"; 
import React, { useState } from "react";
import Menu from "./menu";

export default function TextPrompt(props: any) {
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState(false);
  const filterItem = (categItem) => {
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
                onClick={() => filterItem("Portrait")}
              >
                Portrait
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
        
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {items.map((elem) => {
              const { id, name, image,  } = elem;
  
              return (
                <div className="overflow-hidden flex" id={id}>
                  <Image
                    className="object-cover w-full"
                    src={image}
                    width={215}
                    height={249}
                    loading="eager"
                    alt={name}
                  />
                    
                  
                </div>
              );
            })}
      </div>
    </div>
    </>
  );
}
