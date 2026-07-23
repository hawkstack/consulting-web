import type { HawkstackAdvantageSectionData } from "@/components/home/partner/types/partner";

type HawkstackAdvantageSectionProps = {
  data: HawkstackAdvantageSectionData;
};

const HawkstackAdvantageSection = ({
  data,
}: HawkstackAdvantageSectionProps) => {
  return (
    <section className="bg-[#053992] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto lg:max-w-[1000px] xl:max-w-[1220px] px-5 sm:px-8">
        <div className="max-w-[760px]">
          <p className="mb-3 h-1 w-16 rounded-full bg-[#1FD4FF]" />
          <h2 className="text-[24px] w-[200px] md:w-full md:text-[30px] xl:text-[40px] font-semibold leading-tight text-white">
            {data.heading}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[32px] bg-white px-5 py-5 shadow-[0_22px_60px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_28px_70px_rgba(0,0,0,0.14)]"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F2FF]">
                <card.icon className="h-6 w-6 text-[#0B3D91]" />
              </div>

              <h3 className="md:min-h-[50px] text-xl md:text-2xl lg:text-lg xl:text-xl font-semibold text-[#101828]">
                {card.title}
              </h3>
              <p className="mt-3 text-xs md:text-sm xl:text-base leading-6 text-[#475467]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HawkstackAdvantageSection;
