import type {
  ConsultingServiceItem,
  ConsultingServicesWhatWeDoSectionContent,
} from "@/app/types/consulting-services";
import {
  AdvisoryIcon,
  ImplementationIcon,
  OptimizationIcon,
  TransformationIcon,
} from "@/components/icons/consulting-services/ServiceIcons";

function sortServices(
  services: ConsultingServiceItem[],
  mode: "mobileOrder" | "tabletOrder" | "desktopOrder",
) {
  return [...services].sort((a, b) => {
    const aOrder =
      a[mode] ?? a.tabletOrder ?? a.mobileOrder ?? a.desktopOrder ?? 0;
    const bOrder =
      b[mode] ?? b.tabletOrder ?? b.mobileOrder ?? b.desktopOrder ?? 0;

    return aOrder - bOrder;
  });
}

function ServiceIcon({ icon }: { icon: ConsultingServiceItem["icon"] }) {
  const iconClassName = "h-5 w-5 text-[#1D6DFF]";

  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#EAF3FF]">
      {icon === "advisory" ? <AdvisoryIcon className={iconClassName} /> : null}
      {icon === "optimization" ? (
        <OptimizationIcon className={iconClassName} />
      ) : null}
      {icon === "transformation" ? (
        <TransformationIcon className={iconClassName} />
      ) : null}
      {icon === "implementation" ? (
        <ImplementationIcon className={iconClassName} />
      ) : null}
    </div>
  );
}

function ServiceCard({ service }: { service: ConsultingServiceItem }) {
  return (
    <article className="flex h-full flex-col rounded-[20px] border border-[#E4ECF7] bg-white px-5 py-7 shadow-[0_10px_30px_rgba(19,58,114,0.08)]">
      <ServiceIcon icon={service.icon} />

      <h3 className="xl:mt-6 mt-4 max-w-[260px] text-[22px] font-semibold leading-[1.18] tracking-[-0.03em] text-[#18233A] md:text-[24px] xl:min-h-[44px] xl:text-[18px] xl:w-[200px] lg:text-[18px]">
        {service.title}
      </h3>

      <p className="xl:mt-5 mt-2 text-[13px] leading-[1.85] text-[#596579] md:text-[14px] xl:min-h-[122px]  md:w-[300px] xl:w-60  w-70 xl:text-[15px] lg:w-[400px] lg:text-[14px]">
        {service.description}
      </p>

      <ul className=" space-y-3 mt-2 ">
        {service.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-3 text-[12px] leading-[1.55] text-[#30435F] w-70 md:text-[13px] xl:text-[14px] lg:text-[13px]"
          >
            <span className="mt-[7px] h-[5px] w-[5px] flex-none rounded-full bg-[#35A8FF]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function WhatWeDoSection({
  content,
}: {
  content: ConsultingServicesWhatWeDoSectionContent;
}) {
  const mobileServices = sortServices(content.services, "mobileOrder");
  const tabletServices = sortServices(content.services, "tabletOrder");
  const desktopServices = sortServices(content.services, "desktopOrder");

  return (
    <section className="bg-white font-lexend">
      <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:px-8 md:py-16 lg:px-12 xl:py-18">
        <div className="mx-auto max-w-[1140px] ">
          <div className="mx-auto max-w-[760px] text-center xl:mx-0 xl:max-w-[820px] xl:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0A8BFF] md:text-[12px] xl:text-[12px]">
              {content.badge}
            </p>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.14] tracking-[-0.04em] text-[#18233A] md:text-[42px] xl:max-w-[780px] xl:text-[42px]">
              {content.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[690px] text-[13px] leading-[1.9] text-[#5F6B80] md:text-[14px] xl:mx-0 xl:max-w-[780px] xl:text-[18px]">
              {content.description}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:hidden">
            {mobileServices.map((service) => (
              <ServiceCard key={`mobile-${service.title}`} service={service} />
            ))}
          </div>

          <div className="mt-12 hidden grid-cols-2 gap-6 md:grid xl:hidden">
            {tabletServices.map((service) => (
              <ServiceCard key={`tablet-${service.title}`} service={service} />
            ))}
          </div>

          <div className="mt-8 hidden grid-cols-4 gap-4 xl:grid">
            {desktopServices.map((service) => (
              <ServiceCard key={`desktop-${service.title}`} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
