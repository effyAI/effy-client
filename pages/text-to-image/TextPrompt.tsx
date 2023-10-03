import Image from "next/image"; 
import React, { useState } from "react";
// import Menu from "./menu";
const Menu = [
  {
    id: "Cinematic-1",
    image: "/images/cinematic-1.png",
    name: "Cinematic",
    category: "Cinematic",
     
  },
  {
    id: "Cinematic-2",
    image: "/images/cinematic-2.png",
    name: "Cinematic",
    category: "Cinematic",
     
  },
  {
    id: "Cinematic-3",
    image: "/images/cinematic-3.png",
    name: "Cinematic",
    category: "Cinematic",
     
  },
  {
    id: "Cinematic-4",
    image: "/images/cinematic-4.png",
    name: "Cinematic",
    category: "Cinematic",
     
  },
  {
    id: "Cinematic-5",
    image: "/images/cinematic-5.png",
    name: "Cinematic",
    category: "Cinematic",
     
  },
  {
    id: "Cinematic-6",
    image: "/images/cinematic-6.png",
    name: "Cinematic",
    category: "Cinematic",
     
  },
  {
    id: "Cinematic-7",
    image: "/images/cinematic-7.png",
    name: "Cinematic",
    category: "Cinematic",
     
  },
  {
    id: "Cinematic-8",
    image: "/images/cinematic-8.png",
    name: "Cinematic",
    category: "Cinematic",
     
  },
  {
    id: "Cinematic-9",
    image: "/images/cinematic-9.png",
    name: "Cinematic",
    category: "Cinematic",
     
  },
  {
    id: "Cinematic-10",
    image: "/images/cinematic-10.png",
    name: "Cinematic",
    category: "Cinematic",
     
  },
  {
    id: "Portrait",
    image: "/images/Portrait-1.jpg",
    name: "Portrait",
    category: "Portrait",
    
  },
  {
    id: "Portrait",
    image: "/images/Portrait-2.jpg",
    name: "Portrait",
    category: "Portrait",
    
  },
  {
    id: "Portrait",
    image: "/images/Portrait-3.jpg",
    name: "Portrait",
    category: "Portrait",
    
  },
  {
    id: "Portrait",
    image: "/images/Portrait-4.png",
    name: "Portrait",
    category: "Portrait",
    
  },
  {
    id: "Portrait",
    image: "/images/Portrait-5.png",
    name: "Portrait",
    category: "Portrait",
    
  },
  {
    id: "Portrait",
    image: "/images/Portrait-6.jpg",
    name: "Portrait",
    category: "Portrait",
    
  },
  {
    id: "Portrait",
    image: "/images/Portrait-7.jpg",
    name: "Portrait",
    category: "Portrait",
    
  },
  {
    id: 3,
    image: "/images/result-thumb-4.png",
    name: "Science Fiction",
    category: "Science Fiction",
     
  },
  {
    id: 4,
    image: "/images/result-thumb-5.png",
    name: "Fantasy",
    category: "Fantasy",
     
  },
  {
    id: 5,
    image: "/images/result-thumb-6.png",
    name: "Horror",
    category: "Horror",
    
  },
  {
    id: 6,
    image: "/images/result-thumb-7.png",
    name: "Romance",
    category: "Romance",
     
  },
  {
    id: 7,
    image: "/images/result-thumb-2.png",
    name: "CyberPunk",
    category: "CyberPunk",
     
  },
  {
    id: 8,
    image: "/images/result-thumb-3.png",
    name: "Comedy",
    category: "Comedy",
   
     
  },
  {
      id: 9,
      image: "/images/result-thumb-6.png",
      name: "Fantasy",
      category: "Fantasy",
      
    },
    {
      id: 10,
      image: "/images/result-thumb-7.png",
      name: "Cyberpunk",
      category: "Cyberpunk",
       
    },
];

export default function TextPrompt(props: any) {
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState(false);
  const filterItem = (categItem:any) => {
    const updateItems = Menu.filter((curElem:any) => {
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
                <div className="overflow-hidden flex" key={id}>
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
