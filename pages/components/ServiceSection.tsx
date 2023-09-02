import Link from "next/link";
import Image from "next/image";
export default function ServiceSection(props: any) {
  return (
 
      <a
       href={props.url}
        key={props.key}
        className="p-8 space-y-4 bg-[#ffff] border  rounded-md cursor-pointer transition-all duration-300 hover:translate-y-2 group hover:bg-gradient-to-br from-blue-500/10 to-purple-500/20"
      >
        <div className="w-24 h-24 bg-[#ffffff]   rounded-full border flex justify-center items-center"> 
          <Image src={props.Icon} width={60} height={60} alt={props.title} />
        </div>
        <h3 className="text-xl font-bold text-[#0E1F51] transition-all duration-200">
          {props.title}
        </h3>
        <p className="text-black break-all transition duration-200 ease-in-out line-clamp-6">
          {props.Ptag}
        </p>
      </a>
 
  );
}
