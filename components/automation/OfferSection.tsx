import type { AutomationOfferSectionContent } from "@/app/types/automation";

function FitPoint({ point }: { point: string }) {
  return (
    <li className="flex items-start gap-[10px] text-[9px] leading-[1.7] text-[#D8E4FF] md:text-[11px] lg:text-[11px]">
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="mt-[1px] h-[11px] w-[11px] shrink-0 text-[#2D8CFF]">
        <path
          d="M4 8.5l2.2 2.2L12 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{point}</span>
    </li>
  );
}

function OfferingPill({ item }: { item: string }) {
  return (
    <div className="rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(36,45,70,0.96)_0%,rgba(27,35,58,0.96)_100%)] px-[14px] py-[10px] text-[9px] leading-[1.35] text-[#F5F7FF] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:px-5 md:py-[13px] md:text-[11px] lg:px-5 lg:py-[14px] lg:text-[16px]">
      {item}
    </div>
  );
}

export default function OfferSection({
  content,
}: {
  content: AutomationOfferSectionContent;
}) {
  return (
    <section className="bg-[#081126] font-lexend text-white">
      <div className="px-4 py-12 md:px-14 md:py-16 lg:px-20 lg:py-24 xl:px-24 xl:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[470px_minmax(0,1fr)] lg:items-start lg:gap-10">
          <div className="mx-auto max-w-[590px] text-center md:max-w-[690px] lg:mx-0 lg:max-w-[800px] lg:text-left">
            <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#2D8CFF] md:text-[10px]">
              {content.badge}
            </span>

            <h2 className="mx-auto mt-2 max-w-[310px] text-[18px] font-semibold leading-[1.12] tracking-[-0.04em] text-white md:mx-auto md:max-w-[600px] md:text-[30px] lg:mx-0 lg:max-w-[430px] lg:text-[45px]">
              {content.title}
            </h2>

            <p className="mx-auto mt-3 max-w-[320px] text-[11px] leading-[1.8] text-[#D2D8E7] md:max-w-[980px] md:text-[12px] lg:mx-0 lg:max-w-[480px] lg:text-[14px]">
              {content.description}
            </p>

            <div className="mx-auto mt-5 max-w-[318px] rounded-[15px] border border-[#23457B] bg-[linear-gradient(180deg,rgba(21,42,79,0.96)_0%,rgba(17,35,68,0.98)_100%)] px-4 py-4 text-left shadow-[0_16px_40px_rgba(0,0,0,0.22)] md:mx-auto md:max-w-[520px] md:px-6 md:py-6 lg:mt-6 lg:mx-0 lg:max-w-[500px]">
              <h3 className="text-[13px] font-semibold leading-[1.25] text-white md:text-[16px]">
                {content.fitTitle}
              </h3>

              <ul className="mt-2 space-y-[10px]">
                {content.fitPoints.map((point) => (
                  <FitPoint key={point} point={point} />
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto grid w-full max-w-[318px] gap-[10px] self-center md:mx-auto md:w-full md:max-w-[520px] lg:mx-0 lg:w-auto lg:max-w-none lg:gap-3 lg:pt-[2px]">
            {content.offerings.map((item) => (
              <OfferingPill key={item} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
