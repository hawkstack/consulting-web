import Image from "next/image";
import { infrastructurePlatformsContent as content } from "@/components/distribution-channel/data/distributionChannelData";

export default function InfrastructurePlatformsSection() {
  return (
    <section className="bg-[#eaf2fd] px-5 py-10 font-lexend text-[#172a47] sm:px-8 lg:min-h-[650px] lg:px-12 lg:py-[40px] xl:px-[5%]">
      <div className="mx-auto max-w-[1170px]">
        <p className="text-[10px] font-bold tracking-[0.12em] text-[#3454ff]">
          {content.eyebrow}
        </p>
        <h2 className="mt-3 text-[28px] font-semibold leading-[1.25] tracking-[-0.02em] sm:text-[34px]">
          {content.heading}
        </h2>

        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:mt-[34px] lg:gap-7">
          {content.items.map((platform) => (
            <article
              key={platform.brand}
              className="flex min-w-0 flex-col rounded-[13px] bg-white px-6 py-7 sm:px-8 lg:min-h-[450px] lg:px-7 lg:py-7"
            >
              <div className="flex min-h-[38px] items-center gap-4">
                <Image
                  src={platform.logo}
                  alt={`${platform.brand} logo`}
                  width={120}
                  height={48}
                  className="h-8 w-[72px] shrink-0 object-contain object-left"
                />
                <h3 className="text-[17px] font-semibold leading-tight">
                  {platform.brand}
                </h3>
              </div>
              <p className="mt-2 text-[10px] xl:text-[11px] font-bold leading-[1.5] tracking-[0.12em] text-[#3454ff]">
                {platform.category}
              </p>

              <h4 className="mt-8 text-[20px] font-semibold leading-[1.35] tracking-[-0.01em]">
                {platform.heading}
              </h4>
              <p className="mt-4 text-[12px] xl:text-[13px] leading-[1.65] text-[#40536f]">
                {platform.description}
              </p>

              <div className="mt-5">
                <p className="text-[9px] xl:text-[11px] font-bold tracking-[0.13em] text-[#3454ff]">
                  KEY TECHNOLOGIES
                </p>
                <p className="mt-2 text-[11px] xl:text-[13px] leading-[1.6] text-[#40536f]">
                  {platform.technologies.join(" · ")}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-[9px] xl:text-[11px] font-bold tracking-[0.13em] text-[#3454ff]">
                  HOW HAWKSTACK HELPS
                </p>
                <p className="mt-2 text-[11px] xl:text-[13px] leading-[1.6] text-[#40536f]">
                  {platform.hawkstackHelps.join(", ")}
                </p>
              </div>

              <a
                href={platform.discussionHref}
                className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-[10px] xl:text-[11px] font-medium text-[#304cff] hover:underline"
              >
                {platform.discussionLabel}
                <span aria-hidden="true">{"→"}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
