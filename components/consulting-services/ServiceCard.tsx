import type { ConsultingServiceItem } from "@/app/types/consulting-services";

import ServiceIcon from "@/components/consulting-services/ServiceIcon";

type ServiceCardProps = {
  service: ConsultingServiceItem;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[20px] border border-[#E4ECF7] bg-white px-5 py-7 shadow-[0_10px_30px_rgba(19,58,114,0.08)]">
      <ServiceIcon icon={service.icon} />

      <h3 className="mt-4 max-w-[260px] text-[22px] font-semibold leading-[1.18] tracking-[-0.03em] text-[#18233A] md:text-[24px] lg:text-[18px] xl:mt-6 xl:min-h-[44px] xl:w-[200px] xl:text-[18px]">
        {service.title}
      </h3>

      <p className="mt-2 w-70 text-[13px] leading-[1.85] text-[#596579] md:w-[300px] md:text-[14px] lg:w-[400px] lg:text-[14px] xl:mt-5 xl:min-h-[122px] xl:w-60 xl:text-[15px]">
        {service.description}
      </p>

      <ul className="mt-2 space-y-3">
        {service.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex w-70 items-start gap-3 text-[12px] leading-[1.55] text-[#30435F] md:text-[13px] lg:text-[13px] xl:text-[14px]"
          >
            <span className="mt-[7px] h-[5px] w-[5px] flex-none rounded-full bg-[#35A8FF]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
