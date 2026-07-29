import type { EngineeringToolkitData } from "@/components/home/blogs/types/blogs";

type EngineeringToolkitSectionProps = {
  data: EngineeringToolkitData;
};

const EngineeringToolkitSection = ({
  data,
}: EngineeringToolkitSectionProps) => {
  return (
    <section className="bg-[#F7F9FB] px-5 py-10 font-lexend sm:px-8 sm:py-14 lg:py-[58px]">
      <div className="mx-auto xl:max-w-[1160px]">
        <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-[#191C1E] sm:text-[20px] xl:text-[30px]">
          {data.title}
        </h2>

        <div className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-4">
          {data.items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="flex min-h-[45px] items-center rounded-xl border border-[#E8EBEF] bg-white px-3 py-3 sm:min-h-[46px] xl:min-h-[70px]"
              >
                <Icon className="size-4 shrink-0 text-[#0047BA]" />
                <div className="ml-3 min-w-0">
                  <h3 className="text-[9px] font-medium leading-none text-[#16191D] sm:text-[10px] xl:text-[14px]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[8px] leading-none text-[#5E6268] sm:text-[9px] xl:text-[14px]">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngineeringToolkitSection;
