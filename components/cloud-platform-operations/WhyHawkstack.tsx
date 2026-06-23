import { WhyHawkstackContent } from "@/app/types/cloud-platform-operations";

type Props = {
    content: WhyHawkstackContent;
};

export default function WhyHawkstack({ content }: Props) {
  
    return (
        <section className="bg-[#020817] text-white font-lexend py-12 md:py-16 lg:py-24 xl:py-20 px-4 md:px-14 lg:px-20 xl:px-24 overflow-hidden">
            
            {/* 1. Operate Smarter Section */}
            <div className="max-w-7xl mx-auto mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-6 md:items-start items-center">
                    <div>
                        <h5 className="text-[#00B6CC] text-[13px] text-center md:text-left font-bold mb-4">
                            {content.hawkstack.subTitle}
                        </h5>
                        <h2 className="text-[24px] md:text-[28px] lg:text-[40px] xl:text-[48px] text-center mb-2 lg:mb-0 md:text-left font-bold leading-tight">
                            {content.hawkstack.title}
                        </h2>
                        <p className="text-white/60 text-[11.5px] md:text-[14px] xl:text-[16px] text-center md:text-left font-regular leading-relaxed md:max-w-[800px]">
                            {content.hawkstack.description}
                        </p>
                    </div>

                    {/* Badge Grid */}
                    <div className="grid grid-cols-2 gap-4 mt-4 md:mt-6">
                        {content.hawkstack.badges.map((badge, idx) => (
                            <div 
                                key={idx} 
                                className="bg-[#0F172A]/70 border border-[#FFFFFF]/10 rounded-full py-3 px-2 lg:px-6 text-center text-[11.5px] md:text-[12px] lg:text-[13px] xl:text-[16px] font-medium"
                            >
                                {badge}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative">
                <hr className="absolute left-1/2 -translate-x-1/2 w-screen border-white/5" />
            </div>

            {/* 3. Proven Cloud Operations Model */}
            <div className="mt-20">
                <div className="max-w-7xl mx-auto items-center lg:items-start">
                    <h5 className="text-[#A5F3FC] text-[13px] font-bold mb-1 text-center lg:text-left">
                        {content.cloudOperations.subTitle}
                    </h5>
                    <h2 className="text-[24px] md:text-[32px] xl:text-[48px] max-w-[500px] lg:max-w-none mx-auto lg:mx-0 font-bold mb-8 text-center lg:text-left">
                        {content.cloudOperations.title}
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 md:mb-16 md:px-0 px-13 ">
                        {content.cloudOperations.steps.map((step) => (
                            <div key={step.id} className="bg-[#FFFFFF]/5 py-6 xl:pl-6 lg:px-3 md:px-8 px-4 rounded-2xl border border-white/10">
                                <span className="text-[#A5F3FC] font-bold text-[13px] lg:text-[14px] block mb-0 uppercase">
                                    {step.stepNumber}
                                </span>
                                <h4 className="text-[18px] lg:text-[22px] font-bold mb-2">{step.title}</h4>
                                <p className="text-white/68 font-regular text-[14px] lg:text-[16px] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="md:hidden flex relative mb-10">
                        <hr className="absolute left-1/2 -translate-x-1/2 w-screen border-white/5" />
                    </div>

                    {/* Metrics Footer */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center md:items-left items-stretch">
                        {content.cloudOperations.metrics.map((metric) => (
                            <div key={metric.id} className="h-full bg-[linear-gradient(117.96deg,_rgba(34,211,238,0.08)_0%,_rgba(59,130,246,0.1)_100%)] px-7 py-6 md:p-4 xl:p-6 rounded-3xl border border-white/10">
                                <span className="text-white/50 text-[13px] font-medium block mb-1 text-center md:text-left">
                                    {metric.label}
                                </span>
                                <div className="text-[24px] xl:text-[34px] font-bold text-white tracking-tight text-center md:text-left">
                                    {metric.value}
                                </div>
                                <p className="text-white/68 text-[13px] lg:text-[14px] xl:text-[16px] font-regular leading-relaxed text-center md:text-left">
                                    {metric.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
