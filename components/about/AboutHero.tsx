import Image from "next/image";
import { AboutHeroContent } from "@/app/types/about-us";

type Props = {
  content: AboutHeroContent;
};

export default function AboutHero({ content }: Props) {
  return (
    <section className="w-full font-lexend pb-15">
      <div className="relative z-0 rounded-b-[28px] md:rounded-b-[50px] bg-[#EAF1F8] bg-gradient-to-br from-[#F0F5FA] to-[#EAF1F8] overflow-visible">

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_320px] lg:grid-cols-[minmax(0,1fr)_430px] items-center gap-6 md:gap-8 px-10 lg:px-25">

          {/* Left Content */}
          <div className="md:max-w-[800px] lg:max-w-[620px] pb-40 pt-5 md:pb-15 xl:pt-0 md:pt-15 items-center text-center md:items-start md:text-left">
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
          <div className="absolute bottom-[-140px] left-1/2 -translate-x-1/2 w-[280px] h-[350px] md:-top-3 lg:-top-18 z-10 md:bottom-auto md:left-auto md:translate-x-0 right-0 md:-right-[50px] lg:right-[90px] md:w-[520px] h-full pointer-events-none">
            <Image
              src={content.image}
              alt="About HawkStack"
              width={484}
              height={726}
              className="object-cover inset-0 pointer-events-none md:h-[580px] lg:h-[800px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}