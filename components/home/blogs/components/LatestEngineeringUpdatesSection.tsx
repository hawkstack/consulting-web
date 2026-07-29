import type { LatestEngineeringUpdatesData } from "@/components/home/blogs/types/blogs";

type LatestEngineeringUpdatesSectionProps = {
  data: LatestEngineeringUpdatesData;
};

const imagePositionClasses = {
  left: "bg-left",
  center: "bg-center",
  right: "bg-right",
};

const LatestEngineeringUpdatesSection = ({
  data,
}: LatestEngineeringUpdatesSectionProps) => {
  return (
    <section className="bg-[#F7F9FB] px-5 py-12 font-lexend sm:px-8 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1160px]">
        <div className="flex items-end justify-between gap-5">
          <div>
            <h2 className="text-[22px] font-semibold leading-tight tracking-[-0.03em] text-[#191C1E] sm:text-[28px] xl:text-[30px]">
              {data.title}
            </h2>
            <p className="mt-1 text-[11px] leading-[1.45] text-[#5E5E5E] sm:text-[12px] xl:text-[16px]">
              {data.description}
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {data.updates.map((update) => (
            <article
              key={update.title}
              className="overflow-hidden rounded-[11px] border border-[#d7dce5] bg-white p-2 shadow-[0_1px_2px_rgba(18,31,53,0.02)]"
            >
              <div
                role="img"
                aria-label={update.imageAlt}
                className={`relative h-[132px] overflow-hidden rounded-[7px] bg-cover bg-no-repeat sm:h-[145px] lg:h-[170px] ${imagePositionClasses[update.imagePosition]}`}
                style={{
                  backgroundImage: `url(${update.image})`,
                  backgroundSize: "100% auto",
                }}
              >
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[9px] xl:text-[12px] font-semibold text-[#003CA3] shadow-[0_1px_3px_rgba(18,31,53,0.07)]">
                  {update.category}
                </span>
              </div>

              <div className="px-1 pb-2 pt-4 sm:px-2 sm:pb-3">
                <h3 className="xl:min-h-[100px] text-[14px] font-semibold leading-[1.35] tracking-[-0.018em] text-[#191C1E] sm:text-[15px] xl:text-[24px]">
                  {update.title}
                </h3>
                <p className="mt-3 text-[10px] leading-[1.55] text-[#5E5E5E] sm:text-[11px] xl:text-[14px]">
                  {update.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestEngineeringUpdatesSection;
