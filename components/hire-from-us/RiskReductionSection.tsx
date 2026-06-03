import { RiskReductionSectionData } from "@/app/types/hire-from-us/hire-from-us";

interface RiskReductionSectionProps {
  data: RiskReductionSectionData;
}

export default function RiskReductionSection({
  data,
}: RiskReductionSectionProps) {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8 lg:px-10">
        <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
          <span className="mb-3 text-[10px] font-bold uppercase tracking-[2px] text-[#0048FF] md:text-xs">
            {data.badge}
          </span>

          <h2 className="w-full md:max-w-[600px] lg:max-w-[660px] xl:max-w-[760px] text-[24px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#0048FF] md:text-[32px] lg:text-[34px] xl:text-[48px]">
            {data.title}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-6">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-[26px] xl:rounded-[24px] border p-6 lg:p-8 shadow-[0_12px_30px_rgba(15,23,42,0.08)]
                ${
                  card.variant === "dark"
                    ? "border-[#071D5A] bg-[#061B4B] text-[#FFFFFF]"
                    : "border-[#DCE4F5] bg-white text-[#101828]"
                }`}
            >
              <h3 className="mb-5 text-[20px] md:text-[21px] lg:text-[22px] xl:text-[24px] font-semibold leading-tight">
                {card.title}
              </h3>

              <ul className="space-y-3">
                {card.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`flex items-start text-[13px] xl:text-[16px] leading-[1.5]
                      ${
                        card.variant === "dark"
                          ? "text-[#DCE7FF]"
                          : "text-[#667085]"
                      }`}
                  >
                    <span className="mr-3 mt-[9px] h-[4px] w-[4px] rounded-full bg-current" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
