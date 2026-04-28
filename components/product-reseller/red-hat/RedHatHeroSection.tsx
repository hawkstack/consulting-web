import { RedHatHeroData } from "@/app/types/product-reseller/red-hat";
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
    <section className="w-full bg-[#ffffff] py-16 md:py-20 lg:py-10 xl:py-4">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 xl:px-0 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="w-full lg:max-w-[450px] lg:ml-[40px] xl:ml-[70px]">
          <h1 className="text-3xl md:text-4xl lg:text-[24px] xl:text-[48px] font-bold leading-none text-gray-900 lg:w-[200px] xl:max-w-[400px]">
            {title} <span className="text-[#E40000]">{highlightText}</span>
          </h1>

          <h2 className="text-3xl md:text-4xl lg:text-[24px] font-bold text-gray-900 mt-1">
            {subtitle}
          </h2>

          <p className="text-gray-600 text-base lg:text-sm xl:text-lg mt-4 leading-normal lg:w-[300px] xl:max-w-[400px]">
            {description}
          </p>

          <div className="flex items-center gap-4 mt-6">
            <a
              href={ctaPrimary.link}
              className="bg-[#E40000] text-white px-6 py-3 rounded-md text-xs xl:text-sm font-medium transition"
            >
              {ctaPrimary.text}
            </a>

            <a
              href={ctaSecondary.link}
              className="border border-[#E40000] text-[#E40000] px-6 py-3 rounded-md text-xs xl:text-sm font-medium transition"
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
