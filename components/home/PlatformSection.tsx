import { PlatformSectionData } from "@/types/home/home";
import Link from "next/link";
import Image from "next/image";
import { PLATFORM_ICONS } from"@/components/icons/Home/PlatformIcons";
import { RightArrow } from "@/components/icons/Home/Home";

type PlatformProps = {
  data: PlatformSectionData;
}

export default function PlatformSection({ data } : PlatformProps) {
  return (
    <section className="bg-[#040B10] py-10 md:py-15 px-6 lg:px-10 xl:px-15 text-white font-lexend overflow-hidden relative">
    <div className="absolute inset-0 left-0 w-full z-10 pointer-events-none">
        <Image
          src={data.bgImage}
          alt="Background Decoration"
          fill
          className="object-contain object-top md:object-left opacity-50" 
          priority 
        />
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:gap-4 z-30">      
        <div className="w-full lg:w-[35%] text-center lg:text-left z-10 lg:px-0 px-8 md:mb-6">
          <h2 className="text-white text-[20px] md:text-[32px] lg:text-[30px] xl:text-[40px] font-bold tracking-tight mb-4">
            {data.title.map((line, index) => (
              <span key={index}>
                {line}
                <br className="hidden lg:block" />
                <span className="lg:hidden"> </span> 
              </span>
            ))}
          </h2>
          <p className="hidden md:block md:text-[14px] lg:text-[13px] xl:text-[16px] font-light leading-relaxed lg:max-w-[450px]">
            {data.description}
          </p>
        </div>

        <div className="w-full lg:w-[70%] md:w-[70%] grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-4 z-30">
          {data.features.map((feature) => (
            <div 
              key={feature.id}
              className="group py-3 px-2 md:p-4 xl:p-3 rounded-2xl border border-[#2B7FFF]/40 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 43, 0.5) 0%, rgba(29, 41, 61, 0.3) 100%)'
              }}
            >
              <div>
                <div className="mb-4">
                  {PLATFORM_ICONS[feature.icon as keyof typeof PLATFORM_ICONS]}
                </div>
                <h3 className="text-[12px] md:text-[16px] lg:text-[13px] xl:text-[18px] font-semibold mb-3">
                  {feature.title}
                </h3>
              </div>
              
              <div className="border border-[#90A1B9] flex items-center justify-between mb-3"/>

              <div className="flex items-center justify-between">
                <Link href={feature.link} className="text-[12px] text-white font-Regular ">
                  Know more
                </Link>
                <span>
                  <RightArrow className="text-[#2E85FF]"/>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}