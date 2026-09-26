import {
  ConsultingIcon,
  IntegrationIcon,
  SolutionDesignIcon,
} from "@/components/icons/Home/digital-transformation/DigitalTransformationIcons";
import type { CoverageItem } from "../types/TechnologyCoverage.types";

const coverageIcons = {
  platform: SolutionDesignIcon,
  cloud: ConsultingIcon,
  infrastructure: IntegrationIcon,
};

export default function TechnologyCoverageItemCard({
  item,
}: {
  item: CoverageItem;
}) {
  const Icon = coverageIcons[item.icon];

  return (
    <div className="flex items-center gap-3 rounded-xl border-l-[3px] border-[#0066FF] bg-white px-4 py-3 shadow-sm lg:h-[39px] lg:gap-2 lg:rounded-md lg:px-2.5 lg:py-1 xl:h-[69px] xl:gap-4 xl:rounded-[11px] xl:px-5 xl:py-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 lg:h-5 lg:w-5 lg:rounded-none lg:bg-transparent xl:h-9 xl:w-9">
        <Icon className="h-5 w-5 lg:h-3.5 lg:w-3.5 xl:h-7 xl:w-7" />
      </span>
      <div>
        <h3 className="text-sm font-semibold text-slate-800 lg:text-[9px] lg:leading-[11px] xl:text-[14px] xl:leading-[18px]">
          {item.title}
        </h3>
        <p className="mt-0.5 text-xs leading-relaxed text-slate-500 lg:mt-0 lg:text-[7px] lg:leading-[9px] xl:mt-0.5 xl:text-[11px] xl:leading-[15px]">
          {item.description}
        </p>
      </div>
    </div>
  );
}
