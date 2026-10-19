import type {
  SolutionExpertiseContent,
  SolutionExpertiseIcon,
} from "@/data/solutions/types";

type SolutionsExpertiseSectionProps = {
  content: SolutionExpertiseContent;
  textDirection?: "ltr" | "rtl";
};

function ExpertiseIcon({ name }: { name: SolutionExpertiseIcon }) {
  const common = {
    className: "h-5 w-5 text-[#147dff]",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "people":
      return (
        <svg {...common}>
          <path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" />
          <circle cx="9.5" cy="7.5" r="3.5" />
          <path d="M17 11a3.5 3.5 0 0 0 0-7m4 16v-1.5a4 4 0 0 0-3-3.87" />
        </svg>
      );
    case "server":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="6" rx="1.5" />
          <rect x="3" y="14" width="18" height="6" rx="1.5" />
          <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common}>
          <path d="M7.5 18h9a4.5 4.5 0 0 0 .6-8.96A6 6 0 0 0 5.4 8.2 5 5 0 0 0 7.5 18Z" />
        </svg>
      );
    case "chip":
      return (
        <svg {...common}>
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <path d="M9 9h6v6H9zM9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 20 6v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6l8-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M12 6.5C10.2 5.1 7.2 4.5 3 5v14c4.2-.5 7.2.1 9 1.5m0-14C13.8 5.1 16.8 4.5 21 5v14c-4.2-.5-7.2.1-9 1.5m0-14v14" />
        </svg>
      );
    case "certificate":
      return (
        <svg {...common}>
          <circle cx="10" cy="8" r="4" />
          <path d="m7 12-1 9 4-2 4 2-1-9M16 5h5m-5 4h5m-5 4h4" />
        </svg>
      );
  }
}

export default function SolutionsExpertiseSection({
  content,
  textDirection = "ltr",
}: SolutionsExpertiseSectionProps) {
  return (
    <section
      aria-labelledby="solutions-expertise-heading"
      className="mx-auto w-full bg-white px-5 pb-10 text-[#0a1934] sm:px-8 lg:px-10 xl:h-[610px] xl:max-w-[1440px] xl:px-0 xl:pb-0"
    >
      <div className="mx-auto flex min-h-[138px] max-w-[1280px] flex-col items-center justify-center text-center xl:h-[150px] xl:min-h-0">
        <h2
          id="solutions-expertise-heading"
          dir={textDirection}
          className="font-lexend text-[clamp(22px,2.3vw,33px)] font-semibold leading-[1.15] tracking-[-0.025em]"
        >
          {content.heading}
        </h2>
        <p dir={textDirection} className="mt-2 max-w-[940px] font-lexend text-[11px] leading-[1.35] text-[#7789a8] sm:text-[13px]">
          {content.description}
        </p>
      </div>

      <div className="mx-auto mt-3 grid max-w-[1160px] grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4 xl:mt-5">
        {content.cards.map((card) => (
          <article
            key={card.id}
            className="flex min-h-[74px] items-center gap-3 rounded-lg border border-[#dce6f2] bg-white px-3 py-2 sm:min-h-[84px] sm:px-5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e7f3ff] sm:h-12 sm:w-12">
              <ExpertiseIcon name={card.icon} />
            </span>
            <div className="min-w-0">
              <h3 dir={textDirection} className="text-left font-lexend text-[13px] font-medium leading-[1.2] sm:text-lg">
                {card.title}
              </h3>
              <p dir={textDirection} className="mt-1 text-left font-lexend text-[11px] leading-[1.3] text-[#7b8ca7] sm:text-[14px]">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
