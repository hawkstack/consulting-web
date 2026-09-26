import { technologyPartnerGroups } from "../data/TechnologyCoverage.data";
import TechnologyPartnerCard from "./TechnologyPartnerCard";

export default function TechnologyPartnerGroups() {
  return (
    <div className="rounded-2xl bg-white p-4 lg:rounded-[15px] lg:px-3 lg:py-3 xl:flex xl:min-h-[352px] xl:flex-col xl:justify-between xl:rounded-[24px] xl:px-5 xl:py-8">
      {technologyPartnerGroups.map((group) => (
        <div
          key={group.id}
          className="text-center [&+&]:mt-7 lg:[&+&]:mt-2.5 xl:[&+&]:mt-0"
        >
          <span className="inline-flex rounded-full bg-[#e7f1ff] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#137DD3] lg:px-2.5 lg:py-0.5 lg:text-[6px] lg:leading-[8px] lg:tracking-[0.18em] xl:px-4 xl:py-1.5 xl:text-[11px] xl:leading-3 xl:tracking-[0.16em]">
            {group.title}
          </span>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-2 lg:gap-1.5 xl:mt-5 xl:gap-3">
            {group.partners.map((partner) => (
              <TechnologyPartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
