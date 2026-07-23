import type { PartnerTabsData } from "@/components/home/partner/types/partner";

type PartnerTabsProps = {
  data: PartnerTabsData;
};

const PartnerTabs = ({ data }: PartnerTabsProps) => {
  return (
    <section className="overflow-x-auto border-y border-[#e8e8e8] bg-white">
      <div className="grid min-h-[76px] min-w-[680px] grid-cols-6 items-center px-3 sm:min-h-[92px] sm:min-w-[790px] sm:px-6 lg:min-h-[114px] lg:min-w-0 lg:px-[30px]">
        {data.tabs.map((tab) => (
          <span
            key={tab}
            className="text-center font-lexend whitespace-nowrap text-[17px] font-semibold tracking-[-0.02em] text-[#929397] sm:text-[22px] lg:text-[30px]"
          >
            {tab}
          </span>
        ))}
      </div>
    </section>
  );
};

export default PartnerTabs;
