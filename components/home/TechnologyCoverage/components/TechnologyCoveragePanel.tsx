import { technologyCoverageCopy as copy } from "../data/TechnologyCoverage.data";
import TechnologyCoverageList from "./TechnologyCoverageList";
import TechnologyPartnerGroups from "./TechnologyPartnerGroups";

export default function TechnologyCoveragePanel() {
  return (
    <div className="mt-8 rounded-[28px] bg-[#EFF8FF] p-5 sm:p-7 lg:rounded-[20px] lg:p-4 xl:mt-10 xl:min-h-[402px] xl:rounded-[24px] xl:p-6">
      <div className="grid gap-8 lg:grid-cols-[0.52fr_1fr] lg:items-stretch lg:gap-6 xl:gap-[6.5%]">
        <div className="lg:py-0.5 xl:flex xl:flex-col xl:justify-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#137DD3] lg:text-[7px] lg:leading-[9px] lg:tracking-[0.2em] xl:text-[10px] xl:leading-4">
            {copy.coverageEyebrow}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#0A182E] sm:text-3xl lg:mt-1 lg:text-[16px] lg:leading-5 xl:mt-1.5 xl:text-[28px] xl:leading-[34px]">
            {copy.coverageTitle}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#475569] lg:mt-1.5 lg:max-w-[230px] lg:text-[8px] lg:leading-[10px] xl:mt-2 xl:max-w-[390px] xl:text-[13px] xl:leading-[17px]">
            {copy.coverageDescription}
          </p>
          <TechnologyCoverageList />
        </div>
        <TechnologyPartnerGroups />
      </div>
    </div>
  );
}
