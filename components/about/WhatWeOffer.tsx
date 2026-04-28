import Image from "next/image";
import { WhatWeOfferContent } from "@/app/types/about-us";
import { CrossDownArrow } from "@/components/icons/Home/Home";

type Props = {
  content: WhatWeOfferContent;
};

export default function WhatWeOffer({ content }: Props) {
  return (
    <section className="w-full bg-[#F8FAFC] font-lexend px-4 md:px-8 lg:px-12 xl:px-20 py-10 md:py-7">
      <div className="max-w-[1280px] mx-auto">

        {/* Heading */}
        <h2 className="text-center text-[#001A52] text-[24px] md:text-[26px] xl:text-[40px] font-medium uppercase">
          {content.title}
        </h2>

        {/* Main Box */}
        <div className="mt-8 overflow-hidden rounded-[28px] bg-[#0F172A]">

          {content.rows.map((row, index) => (
            <div
              key={row.id}
              className={`grid grid-cols-1 lg:grid-cols-[56px_240px_minmax(0,1fr)] md:grid-cols-[56px_160px_minmax(0,1fr)] gap-8 lg:gap-15 px-6 md:px-8 py-6 md:py-7 ${
                index !== 0 ? "border-t border-white" : ""
              }`}
            >
              {/* Arrow */}
              <div className="hidden md:flex items-start justify-center lg:pt-2">
                <span className="text-white text-[20px]"><CrossDownArrow/></span>
              </div>

              {/* Left Title / Logo */}
              <div className="flex md:items-start items-center justify-center md:justify-start w-full">
                {row.logo ? (
                  <div className="relative h-auto">
                    <Image
                      src={row.logo}
                      alt={row.title}
                      width={280}
                      height={66}
                      className="object-contain md:object-left object-center w-auto h-auto max-w-full"
                    />
                  </div>
                ) : (
                  <h3 className="text-white text-[24px] md:text-[30px] xl:text-[38px] font-medium leading-tight">
                    {row.title}
                  </h3>
                )}
              </div>

              {/* Right Content */}
              <div>
                {row.description && (
                  <p className="text-white text-[12px] xl:text-[17px] leading-tight md:max-w-[400px] xl:max-w-[480px] text-center md:text-left">
                    {row.description}
                  </p>
                )}

                {row.partners && (
                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-3 lg:gap-10">
                    {row.partners.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-[12px] bg-[#394A57] border border-[#3B3B3B] py-2 pl-2 md:py-4 md:pl-5 flex items-center gap-3"
                      >

                        <div className="relative shrink-0 h-10 w-10 bg-[#E5E5E5] rounded-xl flex items-center justify-center">
                            <div className="relative w-[28px] h-[23px]">
                                <Image
                                src={item.logo}
                                alt={item.name}
                                fill
                                className="object-contain"
                                />
                            </div>
                        </div>

                        <div>
                          <div className="text-white text-[15px] md:text-[17px] font-medium leading-none">
                            {item.name}
                          </div>
                          <div className="text-white text-[10px] md:text-[12px] mt-2 font-regular">
                            Technology partner
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}