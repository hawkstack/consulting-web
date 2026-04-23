import Image from "next/image";
import { TrainingEcosystemContent } from "@/app/types/training-services";

type Props = {
  content: TrainingEcosystemContent;
};

export default function TrainingEcosystem ({ content }: Props) {
  return (
    <section className="w-full bg-[#0A163A] font-lexend px-4 md:px-8 lg:px-12 py-10 md:py-14">
      <div className="max-w-[1280px] mx-auto text-center">
        
        <h5 className="text-[#BFDBFE] text-[12px] md:text-[14px] font-bold uppercase tracking-[0.28em] mb-3">
          {content.subTitle}
        </h5>

        <h2 className="text-white text-[24px] md:text-[27px] lg:text-[36px] font-bold leading-tight max-w-[340px] md:max-w-[950px] mx-auto">
          {content.title}
        </h2>

        <p className="hidden md:block text-[#DBE4F2] text-[13px] md:text-[13px] lg:text-[17px] leading-regular max-w-[930px] mx-auto mt-4">
          {content.description}
        </p>

        {/* <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
          {content.partners.map((item) => (
            <div
              key={item.id}
              className="h-[56px] md:h-[60px] rounded-[12px] bg-white px-2 flex items-center justify-center"
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={150}
                height={50}
                className="w-auto max-h-[40px] object-contain"
                style={{
    transform: `scale(${item.scale ?? 1})`,
  }}
              />
            </div>
          ))}
        </div> */}
<div className="mt-8 flex justify-center gap-3 md:gap-4 max-w-[1300px] mx-auto flex-wrap">
  {content.partners.map((item) => (
    <div
      key={item.id}
      className="h-[40px] w-[calc(50%-12px)] max-w-[70px] md:max-w-[140px] lg:max-w-[110px] xl:max-w-[140px] md:h-[60px] rounded-xl bg-white flex items-center justify-center shadow-sm"
    >
      <Image
        src={item.logo}
        alt={item.name}
        width={140}
        height={45}
        className="w-auto h-auto max-h-[30px] md:max-h-[34px] object-contain px-2 "
        style={{
          transform: `scale(${item.scale ?? ""})`,
        }}
      />
    </div>
  ))}
</div>
      </div>
    </section>
  );
}
