"use client";
import { RedHatHeroData } from "@/app/types/product-reseller/product-redhat/redhat";
import Image from "next/image";

interface Props {
  data: RedHatHeroData;
}

const RedHatHeroSection = ({ data }: Props) => {
  const {
    title,
    highlightText,
    subtitle,
    description,
    ctaPrimary,
    ctaSecondary,
    image,
  } = data;

  return (
    <section className="w-full bg-[#ffffff] py-10 md:py-20 lg:py-10 xl:py-4">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 xl:px-0 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="w-full lg:max-w-[450px] xl:max-w-[500px] md:ml-[14px] lg:ml-[40px] xl:ml-[70px]">
          <h1 className="text-xl md:text-2xl lg:text-[24px] xl:text-[48px] font-bold leading-none text-gray-900 md:w-[200px] lg:w-[200px] xl:w-[400px] text-center md:text-left">
            {title} <span className="text-[#E40000]">{highlightText}</span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-[24px] xl:text-[48px] font-bold text-gray-900 mt-1 text-center md:text-left">
            {subtitle}
          </h2>

          <p className="text-gray-600 text-xs lg:text-sm xl:text-lg mt-4 leading-normal md:w-[260px] lg:w-[300px] xl:w-[400px] text-center md:text-left">
            {description}
          </p>

          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={() => {
                const section = document.getElementById("redhat-products");
                section?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="bg-[#E40000] text-white px-4 py-2 lg:px-6 lg:py-3 rounded-md text-[11px] md:text-xs xl:text-sm font-medium transition cursor-pointer"
            >
              {ctaPrimary.text}
            </button>

            <a
              href={ctaSecondary.link}
              className="border border-[#E40000] text-[#E40000] px-4 py-2 lg:px-6 lg:py-3 rounded-md text-[11px] md:text-xs xl:text-sm font-medium transition"
            >
              {ctaSecondary.text}
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:max-w-[700px] flex justify-end ml-auto">
          <Image
            src={image}
            alt="Red Hat Hero"
            width={700}
            height={525}
            className="w-full max-w-[700px] h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default RedHatHeroSection;
