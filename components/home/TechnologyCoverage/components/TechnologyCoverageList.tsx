import { coverageItems } from "../data/TechnologyCoverage.data";
import TechnologyCoverageItemCard from "./TechnologyCoverageItemCard";

export default function TechnologyCoverageList() {
  return (
    <div className="mt-6 space-y-3 lg:mt-2.5 lg:space-y-1 xl:mt-4 xl:space-y-[5px]">
      {coverageItems.map((item) => (
        <TechnologyCoverageItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
