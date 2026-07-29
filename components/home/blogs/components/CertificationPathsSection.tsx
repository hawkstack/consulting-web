import type { CertificationPathsData } from "@/components/home/blogs/types/blogs";

type CertificationPathsSectionProps = {
  data: CertificationPathsData;
};

const CertificationPathsSection = ({
  data,
}: CertificationPathsSectionProps) => {
  return (
    <section className="bg-[#F2F4F6] px-4 py-14 font-lexend sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1160px]">
        <div className="text-center">
          <h2 className="text-[19px] font-semibold tracking-[-0.03em] text-[#191C1E] sm:text-[28px] xl:text-[30px]">
            {data.title}
          </h2>
          <p className="mx-auto mt-2 max-w-[600px] text-[9px] leading-[1.55] text-[#616871] sm:text-[12px] xl:text-[16px]">
            {data.description}
          </p>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-12 lg:gap-6">
          {data.paths.map((path) => {
            const Icon = path.icon;
            return (
              <article
                key={path.title}
                className="min-h-[150px] rounded-[10px] border border-[#E4E8EE] bg-white px-3 py-5 text-center sm:min-h-[190px] xl:min-h-[230px] sm:px-5 sm:py-7"
              >
                <span className="mx-auto flex size-9 items-center justify-center rounded-full bg-[#F0F4FB] text-[#263B50] sm:size-12">
                  <Icon className="size-4 sm:size-5" />
                </span>
                <h3 className="mt-4 text-[12px] font-medium tracking-[-0.02em] text-[#24282D] sm:text-[15px] xl:text-[24px]">
                  {path.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[180px] text-[8px] leading-[1.45] text-[#68707A] sm:text-[10px] xl:text-[14px]">
                  {path.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationPathsSection;
