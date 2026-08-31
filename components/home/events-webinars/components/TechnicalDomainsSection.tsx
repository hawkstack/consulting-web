import type { TechnicalDomainsData } from "@/components/home/events-webinars/types/events-webinars";

type TechnicalDomainsSectionProps = {
  data: TechnicalDomainsData;
};

const TechnicalDomainsSection = ({ data }: TechnicalDomainsSectionProps) => {
  return (
    <section className="bg-[#F4F6F8] font-lexend">
      <div className="mx-auto flex min-h-[223px] max-w-[1170px] flex-col items-center justify-center px-6 py-10 text-center sm:px-10 xl:min-h-[460px] xl:px-0">
        <h2 className="text-[24px] md:text-[30px] lg:text-[34px] font-semibold leading-[1.25] tracking-[-0.025em] text-[#191C1E] xl:text-[30px]">
          {data.title}
        </h2>

        <div className="mt-6 flex max-w-[410px] flex-wrap justify-center gap-x-2.5 gap-y-2.5 xl:mt-8 md:gap-y-3 md:max-w-[510px] lg:max-w-[610px] xl:max-w-[850px] xl:gap-x-4 xl:gap-y-6">
          {data.items.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="inline-flex h-[27px] items-center gap-1.5 rounded-full bg-white px-3 text-[16px] font-normal leading-none text-[#003CA3] xl:h-10 xl:gap-2 xl:px-5 xl:text-[16px]"
            >
              <Icon className="size-[20px] sm:size-[26px] shrink-0 xl:size-[20px]" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalDomainsSection;
