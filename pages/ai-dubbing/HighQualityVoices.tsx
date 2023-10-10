import Image from "next/image";
import { IconPlayerPlay } from "@tabler/icons-react";
const languageButton = [
  {
    image: "/images/HighQualityVoices-1.png",
    title: "Advertisements",
    description:"Transform Your Content with AI Dubbing. Effortlessly Localize and Engage Audiences in Multiple Languages for Maximum Impact."
  },
  {
    image: "/images/HighQualityVoices-2.png",
    title: "Audio Books",
    description:"Elevate Your Reading Experience with AI Dubbing. Transform your favorite books into immersive audio adventures, narrated by lifelike voices."
  },
  {
    image: "/images/HighQualityVoices-3.png",
    title: "Documentaries",
    description:"Enhance Documentaries with AI Dubbing Services. Elevate storytelling in 30+ languages, utilizing high-quality AI voices for captivating narratives."
  },
  {
    image: "/images/HighQualityVoices-4.png",
    title: "E-learning",
    description:"Unlock Seamless AI Dubbing Services: Elevate Your Content with Precision Voiceovers. Experience the Future of Multilingual Engagement."
  },
  {
    image: "/images/HighQualityVoices-5.png",
    title: "Explainer Videos",
    description:"Unlock the Power of AI Dubbing Services: Transform Your Content with High-Quality, Multilingual Explainer Videos in Just a Few Clicks."
  },
  {
    image: "/images/HighQualityVoices-6.png",
    title: "Video Narration",
    description:"Enhance Your Content with AI Video Narration: Transform text into engaging audio with lifelike voices. Elevate your message with ease."
  },
  {
    image: "/images/HighQualityVoices-7.png",
    title: "Podcasts",
    description:"Enhance Your Podcasts with AI Dubbing Services. Transform Content into Multiple Languages, Expanding Your Listener Base and Global Reach."
  },

  
  
];

export default function HighQualityVoices(props: any) {
  return (
    <>
      
       
       
          <div className="flex flex-col sm:flex-row sm:flex-wrap -m-3 justify-center ">
            {languageButton.map((item, index) => {
              return (
                <div className="p-3 sm:w-1/2 lg:w-1/3 xl:w-1/4" key={index}>
                    <div className="overflow-hidden">
                        <div className="overflow-hidden rounded-t-2xl">
                        <Image
                                    className="object-cover "
                                    src={item.image}
                                    width={700}
                                    height={519}
                                    loading="eager"
                                    alt={item.image}
                                />
                        </div>
                        <div className="bg-white rounded-2xl p-5 -mt-5 relative z-10 text-center space-y-2">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
              );
            })}

            
          </div>

        
     
     
    </>
  );
}
