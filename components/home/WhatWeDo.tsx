import Image from "next/image";
import { WhatWeDoSection } from "@/types/home/home";
import { ArrowIcon } from "@/components/icons/Home/Home";

type Props = {
  data: WhatWeDoSection;
}

export default function WhatWeDo({ data }: Props) {
  return (
    <section className="w-full bg-white py-10 md:pt-8 md:pb-12 font-['Lexend_Deca']">
      <div className="max-w-[1280px] mx-auto md:px-0 md:pr-8 px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between md:text-left text-center md:pl-8">
          <div>
            <h2 className="text-[24px] md:text-[36px] xl:text-[48px] font-semibold text-[#0048FF]">
             {data.title}
            </h2>
            <p className="text-[#848484] text-[12px] lg:text-[16px] font-bold">
              {data.description}
            </p>
          </div>
          <a href="/coming-soon" className="hidden md:flex mt-4 md:mt-0 text-[#0048FF] font-medium text-[14px] flex items-center gap-1 group">
            SEE ALL OFFERINGS 
            <span>
              <ArrowIcon className="w-[18px] h-[18px]"/>
            </span>
          </a>
        </div>        
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {data.cards.map((item) => (
            <div 
              key = {item.id}
              className="group pt-8 md:pl-8 md:px-0 px-3 text-center md:text-left"
            >
              {/* Vertical line for md  */}
              <div className="hidden md:block lg:hidden absolute top-8 -bottom-12 left-1/2 w-px bg-[#A4D6EB]" />

              {/* Vertical lines for lg  */}
              <div className="hidden lg:block absolute top-8 -bottom-12 left-1/3 w-px bg-[#A4D6EB]" />
              <div className="hidden lg:block absolute top-8 -bottom-12 left-2/3 w-px bg-[#A4D6EB]" />
              
              {/* Horizontal lines */}
              <div className="absolute left-1/2 -translate-x-1/2 w-screen h-px bg-[#A4D6EB] " />

              <div className="relative aspect-[16/10] overflow-hidden mt-10 mb-6">
                <Image 
                  src={item.image} 
                  alt="" 
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="md:text-[18px] xl:text-[20px] font-medium text-[#000000] mb-2">
                {item.title}
              </h3>
              
              <p className="text-[#6D6D6D] text-[12px] md:text-[13px] lg:text-[11.5px] xl:text-[14px] mb-2 md:mb-6 font-light">
                {item.desc}
              </p>
            {/* TODO : Implement CTA link */}
              {/* <div className="inline-block">
                <span className="text-[12px] xl:text-[14px] font-semibold text-[#000000]">
                  Read more
                </span>
              </div> */}
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center md:hidden">
          <a href="/coming-soon" className=" font-bold text-xs text-[#0048FF] font-medium text-[14px] flex items-center gap-1 group">
           SEE ALL OFFERINGS 
            <span>
              <ArrowIcon className="w-[18px] h-[18px]"/>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
