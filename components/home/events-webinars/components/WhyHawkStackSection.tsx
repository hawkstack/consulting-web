import type { WhyAttendEventsData } from "@/components/home/events-webinars/types/events-webinars";

type WhyHawkStackSectionProps = {
  data: WhyAttendEventsData;
};

const WhyHawkStackSection = ({ data }: WhyHawkStackSectionProps) => {
  return (
    <section className="bg-white font-lexend">
      <div className="mx-auto w-full max-w-[1170px] px-4 py-10 sm:px-9 sm:py-16 lg:px-10 lg:py-[72px] xl:px-0">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[24px] font-semibold leading-[1.25] tracking-[-0.035em] text-[#191C1E] sm:text-[30px] lg:text-[34px] xl:text-[30px]">
            {data.title}
          </h2>
          <span className="mt-2 h-[2px] w-8 rounded-full bg-[#0140AA] sm:mt-3 sm:w-10" />
        </div>

        <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-[18px] lg:mt-10 lg:grid-cols-3 lg:gap-5">
          {data.items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="min-h-[200px] rounded-[5px] border border-[#E3EAF3] px-4 py-4 sm:min-h-[174px] sm:px-5 sm:py-5 xl:min-h-[232px] lg:px-[15px] lg:py-[15px]"
              >
                <span className="flex size-[40px] items-center justify-center rounded-[5px] bg-[#F2F6FC] text-[#003CA3]">
                  <Icon className="size-[26px] sm:size-[24px] lg:size-[26px]" />
                </span>
                <h3 className="mt-3 text-[22px] font-medium leading-[1.25] tracking-[-0.035em] text-[#191C1E] sm:mt-4 sm:text-[24px] lg:mt-3 xl:text-[24px]">
                  {item.title}
                </h3>
                <p className="w-[260px] xl:w-[280px] mt-2 text-[12px] font-normal leading-[1.45] text-[#363A46] sm:mt-2.5 sm:text-[14px] lg:mt-2 xl:text-16px]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyHawkStackSection;
