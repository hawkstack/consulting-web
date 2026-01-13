import image from "next/image";
import Image from "next/image";

type DeliverCardProps = {
  title: string;
  discription: string;
};

export default function DeliverdCard({
  title,
  discription,
}: DeliverCardProps) {
  return (
    <div
      className="
        w-[1440px]
        h-[837px]
        bg-gradient-to-b
        from-[#03143E] from-[45%]
        to-[#010002] to-[100%]
        flex
        flex-col
        items-center
        gap-4
        relative
      "
    >
      <div className="font-lexend text-[40px] mt-6 text-white leading-[150%] tracking-[-0.03em]">
        {title}
      </div>

      <div className="font-lexend text-[16px] text-white leading-[150%] tracking-[-0.03em]">
        {discription}
      </div>

      {/* 🔴 FORCE VISIBILITY */}
      <div className="z-10 my-6">
      </div>

      {/* Image goes BEHIND */}
      <img
        // src={}
        alt="image"
        className="w-[1224px] h-[721px] absolute bottom-0 z-0"
      />
    </div>
  );
}
