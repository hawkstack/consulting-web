import Image from "next/image";
import { GlobalSectionData } from "@/types/home/home";

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
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.0168 6.07287C17.111 5.97667 17.2229 5.90039 17.3461 5.84837C17.4692 5.79636 17.6011 5.76964 17.7344 5.76973C17.8676 5.76982 17.9995 5.79672 18.1226 5.8489C18.2457 5.90108 18.3575 5.97752 18.4516 6.07384C18.5458 6.17017 18.6204 6.2845 18.6713 6.41031C18.7222 6.53612 18.7484 6.67093 18.7483 6.80707C18.7482 6.9432 18.7219 7.07799 18.6708 7.20373C18.6197 7.32946 18.5449 7.44369 18.4507 7.53989L17.0168 6.07287ZM16.6523 7.91031L15.9349 7.17729L15.9354 7.1768L16.6523 7.91031ZM12.5692 13.5482C12.3789 13.7426 12.1208 13.8519 11.8518 13.8519C11.5827 13.8519 11.3246 13.7426 11.1343 13.5482C10.9441 13.3538 10.8372 13.0902 10.8372 12.8152C10.8372 12.5403 10.9441 12.2766 11.1343 12.0822L12.5692 13.5482ZM11.1255 12.0912C11.3158 11.8968 11.5738 11.7876 11.8429 11.7876C12.112 11.7876 12.3701 11.8968 12.5603 12.0912C12.7506 12.2856 12.8575 12.5493 12.8575 12.8243C12.8575 13.0992 12.7506 13.3629 12.5603 13.5573L11.1255 12.0912ZM7.37884 18.8514C7.18857 19.0458 6.9305 19.155 6.66141 19.155C6.39233 19.155 6.13426 19.0458 5.94399 18.8514C5.75371 18.657 5.64682 18.3933 5.64682 18.1184C5.64682 17.8435 5.75371 17.5798 5.94399 17.3854L7.37884 18.8514ZM18.4507 7.53989L18.4327 7.55822L16.9986 6.09144L17.0168 6.07287L18.4507 7.53989ZM18.4327 7.55822L18.2199 7.77568L16.7862 6.30841L16.9986 6.09144L18.4327 7.55822ZM18.2199 7.77568L18.0075 7.99265L16.5736 6.52563L16.7862 6.30841L18.2199 7.77568ZM18.0075 7.99265L17.7944 8.20987L16.3608 6.74261L16.5736 6.52563L18.0075 7.99265ZM17.7944 8.20987L17.5818 8.4266L16.148 6.95958L16.3608 6.74261L17.7944 8.20987ZM17.5818 8.4266L17.3693 8.64382L15.9354 7.1768L16.148 6.95958L17.5818 8.4266ZM17.3697 8.64334L12.5692 13.5482L11.1343 12.0822L15.9349 7.17729L17.3697 8.64334ZM12.5603 13.5573L7.37884 18.8514L5.94399 17.3854L11.1255 12.0912L12.5603 13.5573Z" fill="#0048FF"/>
                  <path d="M6.66856 5.964L16.797 5.96424C17.0301 5.96423 17.261 6.01115 17.4765 6.10232C17.6919 6.19348 17.8877 6.32712 18.0525 6.49559C18.2174 6.66406 18.3482 6.86406 18.4375 7.08418C18.5267 7.3043 18.5726 7.54022 18.5726 7.77847L18.5724 18.127" stroke="#0048FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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