import type { SusePriorityIcon } from "../types/susePriorities";
import type { SusePageData } from "@/lib/product-reseller/getLocalizedSusePageData";

const iconPaths: Record<SusePriorityIcon, string> = {
  enterprise:
    "M3 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M3 21h18M7 7h2m-2 4h2m-2 4h2m4-8h2m-2 4h2m-2 4h2m-5 6v-4h4v4",
  government: "m2 8 10-5 10 5H2Zm2 3v8m5-8v8m6-8v8m5-8v8M2 22h20M3 19h18",
  distributed:
    "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0 0c2.5-2.7 4-6.1 4-10s-1.5-7.3-4-10c-2.5 2.7-4 6.1-4 10s1.5 7.3 4 10ZM2 12h20",
};

export default function BuildAroundYourPriorities({ data: content }: { data: SusePageData["priorities"] }) {
  return (
    <section
      aria-labelledby="suse-priorities-heading"
      className="bg-[#EAF6F0] text-[#142725]"
    >
      <div className="mx-auto max-w-[1170px] px-6 py-12 sm:px-9 lg:py-[66px] xl:px-0">
        <h2
          id="suse-priorities-heading"
          className="text-[30px] font-bold leading-[1.2] tracking-[-0.02em] lg:text-[34px]"
        >
          {content.heading}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-6">
          {content.items.map((priority) => (
            <article
              key={priority.title}
              className="border-t border-[#C5DACD] pt-6"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 text-[#318D60]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={iconPaths[priority.icon]} />
              </svg>
              <h3 className="mt-7 text-[18px] font-semibold leading-[1.35]">
                {priority.title}
              </h3>
              <p className="mt-4 max-w-[390px] text-[14px] leading-[1.65] text-[#637871]">
                {priority.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
