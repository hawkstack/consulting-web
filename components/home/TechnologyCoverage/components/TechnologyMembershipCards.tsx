import Image from "next/image";
import { membershipCards } from "../data/TechnologyCoverage.data";

export default function TechnologyMembershipCards() {
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
      {membershipCards.map((card) => (
        <div key={card.id} className="relative pt-5">
          <span
            className={`absolute left-1/2 top-0 z-10 max-w-[calc(100%-24px)] -translate-x-1/2 whitespace-nowrap rounded-t-md px-4 py-1 text-center text-[7px] font-semibold uppercase tracking-[0.12em] text-white sm:px-6 sm:text-[8px] sm:tracking-[0.16em] xl:text-[9px] ${card.tone === "purple" ? "bg-[#9B49ED]" : "bg-[#0066FF]"}`}
          >
            {card.badge}
          </span>
          <article
            className={`grid min-h-[98px] grid-cols-[minmax(0,36%)_minmax(0,1fr)] items-stretch rounded-[20px] border border-slate-100 border-t-2 bg-[#FEFFFF] px-3 shadow-[0_3px_4px_rgba(15,23,42,0.14)] sm:px-6 ${card.tone === "purple" ? "border-t-[#9B49ED]" : "border-t-[#0066FF]"}`}
          >
            <div className="flex min-w-0 items-center justify-center border-r border-[#D5E2F5] pr-3 sm:pr-4">
              {card.logo && (
                <Image
                  src={card.logo}
                  alt={`${card.name} logo`}
                  width={220}
                  height={72}
                  className="h-12 w-full max-w-[205px] object-contain"
                />
              )}
            </div>
            <div className="flex min-w-0 flex-col justify-center pl-3 sm:pl-5">
              <h3 className="text-sm font-semibold leading-snug text-[#0A182E] sm:text-base xl:text-[19px]">
                {card.name}
              </h3>
              <p className="mt-0.5 text-[11px] leading-relaxed text-[#526782] sm:text-xs xl:text-[13px]">
                {card.description}
              </p>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
