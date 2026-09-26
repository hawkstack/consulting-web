import {
  JourneyBulbIcon,
  JourneyGearIcon,
  JourneyNetworkIcon,
  TrainingIcon,
} from "@/components/icons/Home/digital-transformation/DigitalTransformationIcons";
import type { TechnologyJourneyItem as JourneyItemData } from "../types/TechnologyCoverage.types";

const journeyIcons = {
  consulting: JourneyNetworkIcon,
  architecture: JourneyBulbIcon,
  integration: JourneyGearIcon,
  training: TrainingIcon,
};

export default function TechnologyJourneyItem({
  item,
  index,
  total,
}: {
  item: JourneyItemData;
  index: number;
  total: number;
}) {
  const Icon = journeyIcons[item.icon];

  return (
    <div className="relative flex min-w-0 items-center gap-3 pr-5">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#EFF6FF] text-[#0066FF]">
        <Icon className="h-6 w-6" />
      </span>
      <span className="max-w-48 text-sm font-medium leading-snug text-[#1E293B]">
        {item.label}
      </span>
      {index < total - 1 && (
        <span
          aria-hidden="true"
          className="absolute left-[calc(88%-12px)] top-1/2 hidden h-px w-12 bg-[#0066FF] lg:block"
        />
      )}
    </div>
  );
}
