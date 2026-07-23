import { CommunityPresenceMilestone } from "../types/awards-recognitions";

type CommunityTimelineSectionProps = {
  milestones: CommunityPresenceMilestone[];
};

export default function CommunityTimelineSection({
  milestones,
}: CommunityTimelineSectionProps) {
  return (
    <div className="bg-[#fbfaff]">
      <div className="mx-auto max-w-[1440px] px-5 py-4 sm:px-8 sm:py-12 md:px-16 md:py-8 lg:px-20 xl:px-24 xl:pb-10">
        <div className="relative mx-auto max-w-[920px]">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#bdd7ee]" />

          <div className="relative grid gap-y-0 sm:gap-y-12 md:gap-y-2">
            {milestones.map((milestone) => {
              const isLeft = milestone.side === "left";

              return (
                <article
                  key={`${milestone.quarter}-${milestone.title}`}
                  className="grid min-h-[70px] grid-cols-[minmax(0,1fr)_22px_minmax(0,1fr)] items-start gap-x-2 sm:grid-cols-[minmax(0,1fr)_32px_minmax(0,1fr)] sm:gap-x-5 md:min-h-[104px] md:gap-x-5"
                >
                  <div
                    className={`min-w-0 ${
                      isLeft ? "col-start-1 text-right" : "col-start-3 text-left"
                    }`}
                  >
                    <p
                      className={`text-[15px] font-extrabold leading-[1.15] tracking-[0] md:text-[17px] ${milestone.accentTextClassName}`}
                    >
                      {milestone.quarter}
                    </p>
                    <h3 className="mt-2 text-[14px] font-bold leading-[1.35] tracking-[0] text-[#061f4b] sm:text-[18px] sm:leading-[1.2] md:text-[22px]">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 hidden text-[12px] font-normal leading-[1.45] tracking-[0] text-[#30354b] sm:block md:text-[15px]">
                      {milestone.description}
                    </p>
                  </div>

                  <div className="col-start-2 row-start-1 flex h-full justify-center pt-2 sm:pt-12">
                    <span
                      aria-hidden="true"
                      className={`relative z-10 size-[6px] rounded-full sm:size-[7px] ${milestone.accentDotClassName}`}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
