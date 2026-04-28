import { EndtoEndServicesContent } from "@/app/types/about-us";
          
type Props = {
    content: EndtoEndServicesContent;
};
          
export default function EndtoEndServices ({ content }: Props) {
            
return (
    <section className=" w-full bg-[#F8FAFC] font-lexend py-10 lg:pt-18 lg:pb-8 px-4 md:px-10 xl:px-18 overflow-hidden z-0">
        <div className="max-w-[1200px] mx-auto ">
            <div className="items-center">
                <h2 className="text-[20px] md:text-[27px] xl:text-[40px] max-w-[780px] xl:max-w-[900px] mx-auto font-bold mb-8 text-center">
                    {content.title}
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-3 md:max-w-[650px] lg:max-w-[1030px] mx-auto items-center md:items-start">
                    {content.items.map((item) => (
                        <div key={item.id} className="bg-[#F8FAFC] px-4 py-8 md:px-5 rounded-4xl border border-[#64748B]/80 items-stretch h-full flex flex-col">
                            <span className="text-[#0019FF] font-bold text-[16px] xl:text-[24px] block mb-2 uppercase text-center md:text-start">
                                {item.number}
                            </span>
                            <h4 className="text-[17px] xl:text-[22px] text-[#000000] font-bold mb-2 text-center md:text-start">
                                {item.title}
                            </h4>
                            <p className="text-[#475569]/600 font-regular text-[14px] xl:text-[16px] leading-relaxed text-center md:text-start">
                                {item.description}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    </section>
    );
}