import { WhatWeDoContent } from "@/app/types/cloud-platform-operations";

type Props = {
    content: WhatWeDoContent;
};

export default function WhyChooseOpenShift({ content } : Props) {
    return(
        <section className="relative w-full overflow-hidden font-lexend py-12 md:py-20">   
           <div className="w-full mx-auto px-6 xl:px-20 lg:px-10 md:px-20">
                <div className="mb-3 md:mb-10 items-center text-center lg:items-start lg:text-start flex flex-col">
                    <h5 className="text-[#00B6CC] text-[14px] font-bold">
                        {content.highlightedTitle}
                    </h5>
                    <h2 className=" text-[#000000] text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-bold mb-6 md:mb-2 xl:mb-0">
                        {content.title}
                    </h2>
                    <p className="hidden md:block text-[#000000] md:text-[14px] lg:text-[16px] xl:text-[18px] font-regular md:max-w-[90%] lg:max-w-[65%]">
                        {content.desc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {content.cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative rounded-2xl border border-[#E2E8F0] p-5 md:p-6 lg:p-4 xl:p-6 flex flex-col md:items-start md:text-start items-center text-center
                                bg-[#FFFFFF]
                                style={{
                                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.03)'
                                }}`}
                            >
                            {/* ICON */}
                            <div className="group w-[35px] h-[35px] md:w-[54px] md:h-[54px] mb-4 p-2 flex-shrink-0 rounded-xl flex items-center justify-center bg-[linear-gradient(135deg,_rgba(34,211,238,0.18)_0%,_rgba(59,130,246,0.18)_100%)]">
                                <Icon className="text-[#155DFC]"/>
                            </div>
                            <h3 className="text-[16px] md:text-[18px] xl:text-[22px] text-[#000000] font-bold mb-2 leading-tight">
                                {card.title}
                            </h3>
                            <p className="text-[12px] md:text-[14px] lg:text-[12px] xl:text-[14px] text-[#000000] font-regular mt-auto leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
