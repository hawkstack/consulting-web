import Image from "next/image";
import Link from "next/link";
import { PlatformJourneyContent } from "@/app/types/about-us";
import { CheckIcon } from "../icons/Home/Home";

type Props = {
  content: PlatformJourneyContent;
};

export default function PlatformJourney({ content }: Props) {
  return (
    <section className="w-full font-lexend px-4 md:px-12 lg:px-17 xl:px-30 py-10 md:py-14 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] md:grid-cols-[minmax(0,1fr)_350px] gap-8 lg:gap-10 items-center">

          {/* Left Content */}
          <div className="max-w-[700px] md:items-start items-center justify-center md:justify-start">
            <h2 className="text-[#0F172A] text-[24px] lg:text-[28px] xl:text-[40px] font-medium leading-[1.08] tracking-[-0.04em] uppercase text-center md:text-left">
              {content.title}
            </h2>

            <p className="mt-5 text-[#2D2D2D] text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] leading-relaxed font-light max-w-[600px] text-center md:text-left">
              {content.description}
            </p>

            <Link
              href={content.buttonLink}
              className="hidden md:inline-flex mt-7 h-[46px] px-6 rounded-[12px] bg-[#001A52] text-white md:text-[12px] xl:text-[15px] tracking-[0.04em] font-bold items-center justify-center"
            >
              {content.buttonText}
            </Link>
          </div>

          {/* Right Side */}
          <div className="relative w-full flex justify-center mt-7 md:mt-10 lg:mt-0">

            {/* Blue Feature Card */}
            <div className="relative z-10 w-full mx-auto max-w-[300px] md:max-w-[360px] rounded-[22px] border border-white/12 bg-[#001A52] px-6 py-6 shadow-[0px_18px_50px_rgba(15,23,42,0.14)]">
              <ul className="space-y-4">
                {content.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white text-[12px] md:text-[15px] leading-relaxed"
                  >
                    <span className="mt-2 text-white"><CheckIcon/></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Floating Image */}
            <div className="absolute -top-14 xl:-top-20 lg:-top-18 md:-top-16 -right-6 md:-right-16 lg:-right-12 xl:-right-20 z-20">
                <Image
                    src={content.image}
                    alt="Decorative object"
                    width={220}
                    height={332}
                    className="w-[160px] h-auto md:w-[190px] lg:w-[190px] xl:w-[250px]"
                />
            </div>
          </div>
          <Link
                href={content.buttonLink}
                className="inline-flex md:hidden mt-6 px-6 py-3 rounded-[12px] mx-auto max-w-[200px] bg-[#001A52] text-white text-[13px] tracking-[0.04em] font-bold items-center justify-center"
                >
                {content.buttonText}
            </Link>
        </div>
      </div>
    </section>
  );
}