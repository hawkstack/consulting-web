import Link from "next/link";
import { AwardsRecognitionsSectionData } from "../types/awards-recognitions";

type AwardsRecognitionsSectionProps = {
  data: AwardsRecognitionsSectionData;
};

export default function AwardsRecognitionsSection({
  data,
}: AwardsRecognitionsSectionProps) {
  return (
    <section className="w-full overflow-hidden bg-[linear-gradient(116deg,#f7f8fc_0%,#eef6ff_48%,#8fc4ff_100%)] font-lexend xl:bg-[linear-gradient(116deg,#f8f8fd_0%,#edf5ff_47%,#92c7ff_100%)]">
      <div className="mx-auto flex min-h-[314px] max-w-[1440px] flex-col items-center justify-center px-10 py-12 text-center md:min-h-[399px] md:px-16 lg:min-h-[390px] lg:px-20 xl:min-h-[470px] xl:justify-start xl:px-24 xl:pt-[136px] xl:pb-[77px]">
        <h2 className="text-[26px] font-bold leading-[1.08] text-[#071847] md:text-[31px] lg:text-[42px] xl:text-[72px] xl:leading-[1.08]">
          {data.title}
          <br />
          <span className="text-[#0647d4]">{data.highlightedTitle}</span>
        </h2>

        <p className="mt-[18px] max-w-[530px] text-[12px] font-normal leading-[1.55] text-[#142548] md:max-w-[590px] md:text-[12px] lg:max-w-[565px] xl:mt-[17px] xl:max-w-[730px] xl:text-[18px] xl:leading-[1.55]">
          {data.description}
        </p>

        <div className="mt-6 flex w-full max-w-[338px] items-center justify-center gap-3 md:mt-8 md:max-w-[401px] md:gap-3 lg:max-w-[315px] xl:mt-[32px] xl:max-w-none xl:gap-[12px]">
          {data.actions.map((action) => {
            const isPrimary = action.variant === "primary";

            return (
              <Link
                key={action.label}
                href={action.href}
                className={`flex h-[41px] min-w-0 flex-1 items-center justify-center rounded-[7px] px-3 text-[12px] font-bold leading-none transition-colors md:h-[49px] md:text-[14px] lg:h-[38px] lg:text-[12px] xl:h-[49px] xl:flex-none xl:text-[18px] ${
                  isPrimary
                    ? "bg-[#065bd4] text-white hover:bg-[#044fbb] xl:w-[250px]"
                    : "border border-[#aab7cf] bg-white/15 text-[#0756c9] hover:border-[#0756c9] hover:bg-white/35 xl:w-[250px]"
                }`}
              >
                {action.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
