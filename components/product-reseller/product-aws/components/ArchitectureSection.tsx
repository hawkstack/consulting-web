import Image from "next/image";
import ArchitectureCheckIcon from "@/components/icons/product-reseller/product-aws/ArchitectureCheckIcon";
import type { ProductAwsArchitectureContent } from "../types/product-aws";

type ArchitectureSectionProps = {
  content: ProductAwsArchitectureContent;
};

const ArchitectureSection = ({ content }: ArchitectureSectionProps) => {
  return (
    <section className="bg-[#F6F3F5] px-5 py-14 md:px-8 lg:px-10 lg:py-[86px]">
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-[72px]">
        <div>
          <h2 className="max-w-[510px] text-[28px] font-bold leading-[1.16] tracking-[-0.025em] text-[#111111] sm:text-[32px] lg:text-[38px]">
            {content.title}
          </h2>
          <p className="mt-7 max-w-[520px] text-[14px] leading-[1.55] text-[#4f5258] lg:text-[16px]">
            {content.description}
          </p>

          <ul className="mt-10 space-y-7">
            {content.benefits.map((benefit) => (
              <li key={benefit.title} className="flex gap-4">
                <ArchitectureCheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#0877ff]" />
                <div>
                  <h3 className="text-[14px] font-bold leading-tight text-[#16181c] lg:text-[15px]">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-[12px] leading-[1.45] text-[#5f636b] lg:text-[13px]">
                    {benefit.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[620px] pb-8 pr-0 sm:pr-6 lg:pb-10">
          <div className="relative aspect-[1.5/1] overflow-hidden rounded-[14px] border border-[#c7d1e0] bg-[#eef4ff]">
            <Image
              src={content.image}
              alt="AWS cloud infrastructure migration architecture"
              fill
              sizes="(max-width: 1023px) 100vw, 52vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 right-0 w-[180px] rounded-[8px] bg-white px-5 py-4 shadow-[0_4px_14px_rgba(20,28,45,0.18)] sm:w-[205px]">
            <p className="text-[10px] font-semibold tracking-[0.08em] text-[#1764df]">
              {content.metricLabel}
            </p>
            <p className="mt-1 text-[30px] font-bold leading-none text-[#101820]">
              {content.metricValue}
            </p>
            <p className="mt-1.5 text-[10px] leading-[1.25] text-[#626874] sm:text-[11px]">
              {content.metricDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
