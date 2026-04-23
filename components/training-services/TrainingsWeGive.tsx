import Link from "next/link";
import { RightArrow } from "@/components/icons/Home/Home";
import { TrainingsWeGiveContent } from "@/app/types/training-services";

type Props = {
  content: TrainingsWeGiveContent;
};

export default function TrainingPrograms({ content }: Props) {
  return (
    <section className="w-full bg-[#F8FAFC] font-lexend px-4 md:px-8 lg:px-12 xl:px-20 py-8 md:py-10">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Heading */}
        <div className="max-w-[900px]">
          <h5 className="text-[#2C56C9] text-[11px] md:text-[13px] font-bold uppercase tracking-[0.24em] mb-3 text-center xl:text-left">
            {content.subTitle}
          </h5>

          <h2 className="text-[#0F172A] text-[24px] md:text-[30px] lg:text-[35px] font-bold leading-tight text-center xl:text-left">
            {content.title}
          </h2>

          <p className="hidden xl:block text-[#64748B] text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed mt-4 text-center xl:text-left max-w-[860px]">
            {content.description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5 px-10 md:px-0">
          {content.programs.map((item) => (
            <div
              key={item.id}
              className="rounded-[20px] border border-[#E2E8F0] bg-white p-8 md:p-7 shadow-[0px_9.35px_28.05px_0px_#0F172A0D] h-full flex flex-col"
            >
              <span className="text-[#2C56C9] text-[12px] md:text-[14px] font-bold uppercase tracking-[0.24em]">
                {item.provider}
              </span>

              <h3 className="mt-3 mb-3 text-[#0F172A] text-[22px] md:text-[27px] lg:text-[30px] font-bold leading-tight">
                {item.title}
              </h3>

              <p className="mt-auto text-[#0F172A] text-[13px] md:text-[15px] lg:text-[16px] leading-relaxed">
                {item.description}
              </p>

              <Link
                href={item.buttonLink}
                className="inline-flex items-center gap-1 mt-6 text-[#2C56C9] text-[12px] md:text-[15px] font-semibold"
              >
                <span>Learn more </span>
                <span >
                    <RightArrow className="flex items-center justify-center h-[8px] w-[12px]"/>
                </span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}