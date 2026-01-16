import Image from "next/image";
import WhyHackstackCircle from "./WhyHackstackSVG";

type DeliverCardProps = {
  title: string;
  description: string;
};

export default function WhyHackstackSction({
  title,
  description,
}: DeliverCardProps) {
  return (
    <div className="w-full h-[824px] bg-gradient-to-b from-[#03143E] from-[45%] to-[#010002] to-[100%] flex flex-col items-center  gap-4 relative">
      <div className="font-lexend text-[40px] mt-4 mb-[-8] text-white  ">
        {title}
      </div>

      <div className="font-lexend  text-[16px] text-white ">{description}</div>

      {/* 🔴 FORCE VISIBILITY */}
      <div className=" my-8"></div>

      {/* Image goes BEHIND */}
      <Image
        src={"/images/map.webp"}
        alt="image"
        className="absolute bottom-0 z-0"
        width={1224}
        height={721}
      />
      <WhyHackstackCircle />
    </div>
  );
}
