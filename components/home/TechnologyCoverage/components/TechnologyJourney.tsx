import { technologyJourney } from "../data/TechnologyCoverage.data";
import TechnologyJourneyItem from "./TechnologyJourneyItem";

export default function TechnologyJourney() {
  return (
    <div className="mt-9 grid gap-5 border-y border-slate-100 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
      {technologyJourney.map((item, index) => (
        <TechnologyJourneyItem
          key={item.id}
          item={item}
          index={index}
          total={technologyJourney.length}
        />
      ))}
    </div>
  );
}
