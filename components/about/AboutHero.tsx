import Image from "next/image";
import { AboutHeroContent } from "@/app/types/about-us";

type Props = {
  content: AboutHeroContent;
};

export default function AboutHero({ content }: Props) {
  return (
    <section className="w-full font-lexend pb-10 bg-[#F8FAFC] ">
      <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src = {content.bgImage}
            alt="Background"
            fill
            priority
            className="object-cover max-h-[400px] md:max-h-[360px] lg:max-h-[410px] xl:max-h-[500px] rounded-b-[28px] md:rounded-b-[50px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_320px] lg:grid-cols-[minmax(0,1fr)_430px] items-center gap-6 md:gap-8 px-10 lg:px-25 ">

          {/* Left Content */}
          <div className="md:max-w-[800px] lg:max-w-[620px] pb-40 pt-5 md:pb-15 xl:pt-0 md:pt-15 items-center text-center md:items-start md:text-left z-10">
            <span className="text-[#7487A3] text-[12px] md:text-[14px] xl:text-[20px] font-medium">
              {content.subTitle}
            </span>

            <h2 className="mt-3 text-[#0F172A] text-[20px] md:text-[28px] lg:text-[30px] xl:text-[48px] font-regular leading-[1.02] tracking-[-0.04em]">
              {content.title}
              <span className="text-[#1D4ED8]">
                {" "}{content.highlightedText}
              </span>
            </h2>
          </div>

          {/* Right Image */}
          <div className="absolute bottom-[-210px] left-1/2 -translate-x-1/2 w-[280px] h-[350px] md:top-10 xl:top-13 z-10 md:bottom-auto md:left-auto md:translate-x-0 right-0 md:-right-[50px] lg:right-[50px] xl:right-[90px] md:w-[520px] h-full pointer-events-none">
            <Image
              src={content.image}
              alt="About HawkStack"
              width={484}
              height={726}
              className="object-cover md:h-[580px] lg:h-[650px] xl:h-[750px]"
            />
          </div>
        </div>
    </section>
  );
}