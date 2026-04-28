import Link from "next/link";
import { DeliverOptionContent } from "@/app/types/training-services";

type Props = {
  content: DeliverOptionContent;
};

export default function DeliveryOptions({ content }: Props) {
  return (
    <section className="w-full bg-[#EEF4FF] font-lexend px-4 md:px-8 lg:px-22 xl:px-20 py-10 md:py-14">
      <div className="max-w-[1280px] mx-auto">
        
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_420px] gap-6 lg:gap-8 items-start">

          {/* Left Side */}
          <div>
            <h5 className="text-[#2C56C9] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.24em] mb-3 text-center xl:text-left">
              {content.subTitle}
            </h5>

            <h2 className="text-[#0F172A] text-[24px] md:text-[34px] lg:text-[34px] font-bold leading-tight text-center xl:text-left xl:mx-0 mx-auto max-w-[700px]">
              {content.title}
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[700px] mx-0 md:mx-auto xl:mx-0 items-start">
              {content.options.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[20px] bg-white border border-[#E2E8F0] p-5 md:p-6 shadow-[0px_9px_28px_0px_#0F172A0D]"
                >
                  <h3 className="text-[#0F172A] text-[20px] md:text-[24px] font-bold leading-tight xl:text-left text-center">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[#334155] text-[14px] md:text-[15px] font-regular leading-relaxed xl:text-left text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right CTA Card */}
          <div className="items-start rounded-[28px] bg-[#1F2D5A] text-white p-6 md:p-8 shadow-[0px_21.04px_46.75px_0px_#0F172A29] max-w-[700px] mx-auto xl:mx-0">
            <h5 className="text-[#BFDBFE] text-[11px] md:text-[14px] font-bold uppercase tracking-[0.24em] xl:text-left text-center">
              {content.cta.badge}
            </h5>

            <h3 className="mt-4 text-[22px] md:text-[34px] font-bold text-[#FFFFFF] leading-tight xl:text-left text-center max-w-[650px] mx-auto xl:mx-0">
              {content.cta.title}
            </h3>

            <p className="mt-4 text-[12px] md:text-[15px] text-[#FFFFFF] font-regular leading-relaxed xl:text-left text-center max-w-[600px] mx-auto xl:mx-0">
              {content.cta.description}
            </p>

            <div className="mt-7 flex flex-row gap-3 xl:items-start items-center justify-center xl:justify-start">
              <Link
                href={content.cta.primaryButton.href}
                className="h-[46px] px-3 md:px-5 rounded-full bg-[#2C56C9] text-white text-[12px] md:text-[14px] font-semibold inline-flex items-center justify-center"
              >
                {content.cta.primaryButton.label}
              </Link>

              <Link
                href={content.cta.secondaryButton.href}
                className="h-[46px] px-3 md:px-5 rounded-full border-1 border-white/20 text-white text-[12px] md:text-[14px] font-semibold inline-flex items-center justify-center"
              >
                {content.cta.secondaryButton.label}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}