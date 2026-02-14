import Image from "next/image";
import WhyHawkstackCircle from "./WhyHawkstackSVG";

type DeliverCardProps = {
  title: string;
  description: string;
};

export default function WhyHawkstackSection({
  title,
  description,
}: DeliverCardProps) {
  return (
    <div className="w-full h-[650px] md:h-[824px] bg-gradient-to-b from-[#03143E] from-[45%] to-[#010002] to-[100%] flex flex-col items-center  gap-4 relative">
      <div className="font-lexend text-[40px] mt-4 mb-[-8] text-white  ">
        {title}
      </div>

      <div className="font-lexend text-center text-[16px] text-white ">{description}</div>

      {/* 🔴 FORCE VISIBILITY */}
      <div className="  my-6 md:my-10 lg:my-13 xl:my-15 "></div>

      {/* Image goes BEHIND */}
      <Image
        src={"/images/map.webp"}
        alt="image"
        className="absolute z-0 top-25 w-[500px] h-[500px] md:top-22 md:w-[800px] md:h-[650px] lg:top-23 lg:w-[950px] lg:h-[650px] xl:top-23 xl:w-[1224px] xl:h-[721px]"
        width={1224}
        height={721}
      />
      <WhyHawkstackCircle />
    </div>
  );
}
