import { RedHatRecognitionSectionData } from "../types/awards-recognitions";

type RedHatRecognitionSectionProps = {
  data: RedHatRecognitionSectionData;
};

export default function RedHatRecognitionSection({
  data,
}: RedHatRecognitionSectionProps) {
  return (
    <section className="w-full bg-[#fbfaff] font-lexend">
      <div className="mx-auto max-w-[1440px] px-8 py-14 md:px-16 md:py-16 lg:px-20 xl:px-24 xl:py-[78px]">
        <div className="grid gap-5 text-center md:grid-cols-[1fr_330px] md:items-start md:text-left lg:grid-cols-[1fr_410px] xl:grid-cols-[1fr_440px]">
          <div>
            <p className="text-[11px] font-extrabold uppercase leading-none tracking-[0.18em] text-[#007a3d] md:text-[12px]">
              {data.eyebrow}
            </p>
            <h2 className="mt-4 text-[34px] font-bold leading-[1.08] tracking-[0] text-[#071847] md:text-[40px] lg:text-[44px] xl:text-[48px]">
              {data.title}
            </h2>
          </div>
          <p className="hidden max-w-[410px] text-[15px] font-normal leading-[1.48] tracking-[0] text-[#30354b] md:block md:justify-self-end md:text-right lg:text-[16px] xl:text-[17px]">
            {data.description}
          </p>
        </div>

        <div className="mt-10 grid gap-7 md:mt-12 md:grid-cols-2 md:gap-8 lg:gap-10 xl:gap-14">
          {data.cards.map((card) => (
            <article
              key={card.title}
              className="flex min-h-[245px] flex-col rounded-[14px] bg-[#eaf4ff] px-8 py-8 text-left md:min-h-[274px] md:px-9 md:py-9 lg:min-h-[252px] lg:px-11 lg:py-11"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-extrabold leading-none ${card.badgeClassName}`}
                >
                  {card.badge}
                </span>
                <span className="text-[11px] font-normal leading-none text-[#6b7284] md:text-[12px]">
                  {card.category}
                </span>
              </div>

              <h3 className="mt-6 text-[20px] font-bold leading-[1.25] tracking-[0] text-[#071847] md:text-[21px] lg:text-[24px]">
                {card.title}
              </h3>
              <p className="mt-5 max-w-[520px] text-[14px] font-normal leading-[1.5] tracking-[0] text-[#30354b] md:text-[15px] lg:text-[16px]">
                {card.description}
              </p>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
