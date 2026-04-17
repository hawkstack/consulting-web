import Image from "next/image";
import { GlobalSectionData } from "@/types/home/home";
import ArrowIcon from "@/components/icons/Home/arrow";

type GlobalProps = {
  data: GlobalSectionData;
}

export default function OurSolutions({ data }: GlobalProps) {
  return (
    <section className="relative w-full py-10 md:py-15 bg-white text-center">
      <div className="absolute pointer-events-none rounded-full z-0 md:w-[926px] md:h-[792px] w-[449px] h-[278px] lg:-top-[236px] -top-[156px] left-[9px] lg:left-[253px] md:-top-[277px] md:-left-[67px] bg-[#0059FF] md:opacity-[7%] opacity-[26%] blur-[250px]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-6 xl:px-15 z-10">
        <span className="px-6 py-1 rounded-full bg-[#F6FBFF] border border-[#2B7FFF] text-[#2B7FFF] text-[12px] xl:text-[16px] font-medium">
          {data.highlightText}
        </span>
        <h2 className="text-[20px] md:text-[36px] xl:text-[48px] font-bold mt-6 text-[#000000] mb-1">
          {data.title}
        </h2>
        <p className="hidden md:block text-[#686868] text-[14px] xl:text-[16px] font-normal md:max-w-xl xl:max-w-2xl mx-auto">
          {data.desc}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 md:mt-10 text-left md:px-25 lg:px-0">
          {data.items.map((partner) => (
            <div key={partner.id} className={`group relative bg-white p-8 rounded-3xl border border-[#E5E5E5] transition-all duration-300 hover:-translate-y-1 overflow-hidden 
              hover:bg-[linear-gradient(100.57deg,rgba(0,140,255,0.376)_0.77%,rgba(179,221,255,0.376)_39.52%,rgba(0,140,255,0.376)_99.06%)]
              `} 
            style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
            >
              <div 
                className="absolute top-0 left-3 right-3 h-[4px] rounded-t-[20px]"
                style={{ background: 'linear-gradient(90deg, #4E80EE 0%, #64CBE1 100%)' }}
              />
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-[17px] md:text-[24px] font-semibold text-[#000000]">{partner.partnerName}</h3>
                  <p className="text-[#0048FF] text-[12px] md:text-[16px] font-medium">{partner.status}</p>
                </div>
                <Image src={partner.logo} alt={partner.partnerName} width={66} height={67} className="w-[66px] h-[67px] object-contain" />
              </div>
              
              <div className="flex flex-wrap gap-1 md:gap-3 mt-4 mb-10 md:mb-8">
                {partner.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-[#F8FAFC] text-[#686868] rounded-full text-[12px] md:text-[16px] border border-[#E2E8F0]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-6 right-6 w-10 h-10 bg-[#D8E3FF] rounded-full flex items-center justify-center">
                <ArrowIcon/>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 md:mt-16">
          <button 
            className="px-8 py-3 bg-[#21A3E8] text-white font-semibold rounded-full text-[13px]"
          >
            Explore open Roles
          </button>
        </div>
      </div>
    </section>
  );
};