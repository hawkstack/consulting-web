import Image from "next/image";
import Link from "next/link";

import { RedHatAIHeroData } from "@/app/types/product-reseller/product-redhat/redhat-ai/redhat-ai";

interface Props {
  data: RedHatAIHeroData;
}

const RedHatAIHeroSection = ({ data }: Props) => {
  const {
    heading,
    highlightedText,
    titleSuffix = "to build anywhere.",
    variant = "default",
    description,
    image,
    imageAlt,
    buttons,
    features,
    mobileImage,
  } = data;
  const isLinuxHero = variant === "linux";

  return (
    <section className="relative overflow-hidden bg-black">
      {/* gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(238,0,0,0.35),_transparent_45%)]" />

      <div className="relative mx-auto w-full px-4 py-10 md:w-[810px] md:pl-10 xl:pl-24 md:pr-0 md:py-0 md:mb-4 lg:w-[1025px] lg:py-0 xl:py-0 xl:w-[1350px]">
        <div className="flex flex-col-reverse items-center gap-6 md:flex-row lg:justify-between md:gap-10">
          {/* left */}
          <div className="w-full text-center lg:max-w-[780px] md:text-left md:mt-4">
            <h1
              className={`text-[22px] font-bold leading-tight text-white md:text-[28px] lg:text-[30px] xl:text-[42px] ${
                isLinuxHero ? "md:w-[50%]" : ""
              }`}
            >
              {heading}{" "}
              <span className="text-[#EE0000]">{highlightedText}</span>
              {titleSuffix ? ` ${titleSuffix}` : ""}
            </h1>

            <p className="mx-auto mt-5 max-w-[620px] text-sm leading-relaxed text-[#CFCFCF] md:text-xs lg:mx-0 xl:text-lg hidden md:block">
              {description}
            </p>

            {/* buttons */}
            <div className="mt-8 flex flex-col items-center gap-4 flex-row md:items-start mx-auto items-center justify-center md:justify-start">
              {buttons.map((button) => (
                <Link
                  key={button.id}
                  href={button.link}
                  className={`flex items-center justify-center rounded-full text-xs lg:text-sm font-semibold transition-all duration-300 xl:text-base ${
                    isLinuxHero
                      ? "h-auto px-[10px] py-[10px]"
                      : "h-[30px] px-4 md:h-[46px] lg:h-[48px] lg:px-7 xl:h-[52px]"
                  } ${
                    button.variant === "primary"
                      ? "bg-[#EE0000] text-white hover:bg-[#d10000]"
                      : "border border-[#3A3A3A] bg-[#1A1A1A] text-white hover:bg-[#242424]"
                  }`}
                >
                  {button.label}
                </Link>
              ))}
            </div>

            {/* features */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:justify-start">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.id} className="flex items-center gap-2">
                    <Icon />

                    <p className="text-xs xl:text-sm text-[#E5E5E5]">
                      {feature.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* right image */}
          <div className="relative flex w-full justify-center lg:w-auto">
            {/* Mobile Image */}
            <Image
              src={mobileImage}
              alt={imageAlt}
              width={250}
              height={250}
              priority
              className="h-auto w-[180px] block md:hidden"
            />
              {/* Desktop Image */}
            <Image
              src={image}
              alt={imageAlt}
              width={400}
              height={400}
              priority
              className={`hidden md:block h-auto ${
                isLinuxHero
                  ? "w-[220px] md:w-[420px] lg:w-[600px] xl:w-[750px] xl: scale-110 md:-translate-x-10 lg:-translate-x-20"
                  : "w-[180px] md:w-[340px] lg:w-[500px] xl:w-[500px]"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedHatAIHeroSection;
