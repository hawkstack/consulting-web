import { SolutionsShowcaseSectionData } from "@/app/types/hire-from-us/hire-from-us";
import Image from "next/image";

interface SolutionsShowcaseSectionProps {
  data: SolutionsShowcaseSectionData;
}

export default function SolutionsShowcaseSection({
  data,
}: SolutionsShowcaseSectionProps) {
  const { tag, title, description, solutions } = data;

  return (
    <section className="px-4 md:px-6 lg:px-0 py-8 lg:py-10">
      <div className="mx-auto lg:max-w-[940px] xl:max-w-[1160px] rounded-[28px] bg-[#001437] px-5 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-[720px] text-center xl:mx-0 lg:max-w-[650px] xl:max-w-[1010px] xl:text-left">
          <p className="mb-3 text-[10px] lg:text-[12px] xl:text-[14px] font-semibold uppercase tracking-[2px] text-[#5F8CFF]">
            {tag}
          </p>

          <h2 className="text-[24px] font-semibold leading-[110%] text-[#FFFFFF] md:text-[28px] lg:text-[30px] xl:text-[48px]">
            {title}
          </h2>

          <p className="hidden md:block mt-4 text-sm leading-6 text-[#DCE7FF] text-xs lg:text-sm xl:text-base">
            {description}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => (
            <div key={item.id} className="rounded-2xl bg-white p-5 md:p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5F8FF]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={18}
                  height={18}
                />
              </div>

              <h3 className="text-sm xl:text-base font-semibold text-[#101828]">
                {item.title}
              </h3>

              <p className="mt-2 text-xs xl:text-sm leading-6 text-[#667085]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
