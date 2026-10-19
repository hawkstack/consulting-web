import type { SolutionBusinessEnablementContent } from "@/data/solutions/types";

type SolutionsBusinessSectionProps = {
  content: SolutionBusinessEnablementContent;
  textDirection?: "ltr" | "rtl";
};

const accentStyles = {
  blue: {
    bar: "bg-[#1766ff]",
    badge: "bg-[#e4eeff] text-[#1766ff]",
  },
  cyan: {
    bar: "bg-[#12aeda]",
    badge: "bg-[#e2f6fa] text-[#0a9fc9]",
  },
  green: {
    bar: "bg-[#12b990]",
    badge: "bg-[#e0f7ef] text-[#10a982]",
  },
} as const;

export default function SolutionsBusinessSection({
  content,
  textDirection = "ltr",
}: SolutionsBusinessSectionProps) {
  return (
    <section className="relative isolate mx-auto w-full max-w-[1440px] overflow-hidden bg-gradient-to-br from-white via-[#f8fbff] to-[#e8f5ff] px-5 py-16 text-[#0a1934] sm:px-8 sm:py-20 lg:px-10 xl:min-h-[520px] xl:px-0 xl:py-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-160px] top-[-220px] -z-10 h-[520px] w-[520px] rounded-full bg-[#d8f0ff]/60 blur-3xl"
      />
      <div className="mx-auto grid max-w-[1160px] items-center gap-12 xl:min-h-[520px] xl:grid-cols-[360px_minmax(0,1fr)] xl:gap-6">
        <div className="border-l-4 border-[#1766ff] py-1 pl-7 sm:pl-8">
          <p dir={textDirection} className="text-left font-lexend text-xs font-bold tracking-[0.12em] text-[#1766ff] sm:text-sm">
            {content.eyebrow}
          </p>
          <h2 dir={textDirection} className="mt-4 text-left max-w-[440px] font-lexend text-[clamp(32px,3vw,36px)] font-semibold leading-[1.12] tracking-[-0.03em]">
            {content.heading}
          </h2>
          <p dir={textDirection} className="mt-4 text-left max-w-[370px] font-lexend text-sm leading-[1.55] text-[#7183a0] sm:text-base">
            {content.description}
          </p>
          <div className="mt-4 inline-flex max-w-full items-center gap-3 rounded-full border border-[#d8e5f7] bg-white/80 px-4 py-3 font-lexend text-[11px] md:text-xs font-medium text-[#233653]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#1766ff]" />
            <span dir={textDirection} className="text-left">{content.takeaway}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
          {content.cards.map((card, index) => {
            const colors = accentStyles[card.accent];

            return (
              <article
                key={card.number}
                className={`relative flex min-h-[230px] flex-col overflow-hidden rounded-[20px] border border-[#d9e6f5] bg-white/90 p-6 shadow-[0_14px_32px_rgba(17,53,94,0.1)] sm:min-h-[248px] sm:p-6 xl:min-h-[252px] ${index === 1 ? "xl:translate-y-4" : "xl:-translate-y-1"}`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-6 top-0 h-[3px] w-12 rounded-b-full ${colors.bar}`}
                />
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-[15px] font-lexend text-sm font-semibold ${colors.badge}`}
                >
                  {card.number}
                </span>
                <h3 dir={textDirection} className="mt-5 text-left font-lexend text-lg font-semibold leading-[1.25] sm:text-xl">
                  {card.title}
                </h3>
                <p dir={textDirection} className="mt-2 text-left border-b border-[#e3ebf5] pb-4 font-lexend text-sm leading-[1.55] text-[#7789a6]">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
