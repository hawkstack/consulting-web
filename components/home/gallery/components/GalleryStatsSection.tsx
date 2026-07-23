import { GalleryStatsSectionData } from "../types/awards-recognitions";

type GalleryStatsSectionProps = {
  data: GalleryStatsSectionData;
};

export default function GalleryStatsSection({ data }: GalleryStatsSectionProps) {
  return (
    <section
      aria-label="HawkStack impact metrics"
      className="w-full bg-[#eaf4ff] font-lexend"
    >
      <div className="mx-auto grid min-h-[190px] max-w-[1440px] grid-cols-2 items-center gap-y-7  gap-x-5 px-8 py-9 text-center min-[560px]:min-h-[158px] min-[560px]:grid-cols-4 min-[560px]:gap-y-0 md:px-16 lg:px-20 xl:px-24">
        {data.stats.map((stat) => (
          <div
            key={stat.label}
            className={`${stat.mobileOrder} ${stat.desktopOrder} flex min-w-0 flex-col items-center justify-center`}
          >
            <p
              className={`text-[28px] font-extrabold leading-none tracking-[0] md:text-[30px] lg:text-[32px] xl:text-[36px] ${stat.valueClassName}`}
            >
              {stat.value}
            </p>
            <p className="mt-3 text-[10px] font-medium uppercase leading-none tracking-[0.22em] text-[#253049] md:text-[10px] lg:text-[11px] xl:text-[12px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
