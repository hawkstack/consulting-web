import { TrainingPortfolioContent } from "@/app/types/training-services";

type Props = {
  content: TrainingPortfolioContent;
};

export default function TrainingPortfolio({ content }: Props) {
  return (
    <section className="w-full bg-[#F8FAFC] font-lexend px-6 md:px-8 lg:px-12 xl:px-20 py-10 md:py-14">
      <div className="max-w-[1280px] mx-auto">

        {/* Heading */}
        <div className="text-center md:text-left max-w-[800px]">
          <h5 className="text-[#2C56C9] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.22em] mb-3">
            {content.subTitle}
          </h5>

          <h2 className="text-[#0F172A] text-[24px] md:text-[24px] lg:text-[34px] font-bold leading-tight">
            {content.title}
          </h2>

          <p className="text-[#64748B] text-[14px] md:text-[14px] lg:text-[16px] leading-relaxed mt-3 max-w-[360px] mx-auto md:mx-0 md:max-w-[800px]">
            {content.description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {content.items.map((item) => (
            <div
              key={item.id}
              className="relative rounded-[18px] border border-[#E2E8F0] bg-[#F8FAFC] p-5 md:p-8 shadow-[0px_9.35px_28.05px_0px_#0F172A0D]"
            >
              <h3 className="text-[#0F172A] text-[18px] lg:text-[30px] font-bold">
                {item.title}
              </h3>

              <p className="text-[#2C56C9] text-[15px] font-bold mt-4 md:mt-2 leading-relaxed max-w-[520px]">
                {item.highLightedText}
              </p>

              <button className="absolute top-5 right-5 md:static mt-0 md:mt-3 h-[34px] px-3 md:px-4 rounded-full bg-[#2C56C9] text-white text-[12px] md:text-[13px] font-medium">
                View Programs
              </button>

              <p className="text-[#0F172A] text-[12px] lg:text-[15px] font-light leading-relaxed mt-3">
                {item.desc}
              </p>

              <ul className="hidden xl:block mt-4 space-y-2">
                {item.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-[#0F172A] text-[13px] md:text-[15px] font-light leading-relaxed"
                  >
                    <span className="mt-[10px] h-[5px] w-[5px] rounded-full bg-[#000000] shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex justify-center">
          <button className="h-[38px] px-5 rounded-full bg-[#2C56C9] text-white text-[13px] md:text-[13px] font-medium">
            Explore More
          </button>
        </div>

      </div>
    </section>
  );
}
