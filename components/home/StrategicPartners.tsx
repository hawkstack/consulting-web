import Image from "next/image";
import { JSX } from "react";

const logos: readonly string[] = [
  "/images/partners/Hawkstack-Logo.webp",
  "/images/partners/Cloudnative-Logo.webp",
  "/images/partners/Mirantis-Logo.webp",
  "/images/partners/Linux-Logo.webp",
  "/images/partners/Advance-Logo.webp",
];

export default function StrategicPartners(): JSX.Element {
  return (
    <section className="xl:py-20 lg:py-16 md:py-8 py-8 bg-white w-full">
      {/* TOP CONTENT */}
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="font-lexend xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-normal leading-[150%] tracking-[-0.02em] text-[#213174] mb-4">
          Our Strategic Partners
        </h2>

        {/* Subtitle */}
        <p className="font-lexend xl:text-base lg:text-base md:text-base text-xs font-normal leading-[150%] tracking-[-0.025em] text-[#213174] xl:max-w-[666px] mt-[-18]">
          We partner with leading technology providers to deliver scalable
          cloud-native solutions.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="w-full overflow-hidden mt-12">
        <div className="partner-track">
          {[...logos, ...logos].map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt="Strategic partner logo"
              className="
              h-[80px] w-auto
              md:h-[110px]
              lg:h-[130px]
              xl:h-[156px] xl:w-[250px]
              flex-shrink-0
            "
              width={250}
              height={156}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
