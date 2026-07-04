import Link from "next/link";
import type { ProductAwsInfrastructureContent } from "../types/product-aws";

type CoreInfrastructureSolutionsSectionProps = {
  content: ProductAwsInfrastructureContent;
};

const CoreInfrastructureSolutionsSection = ({
  content,
}: CoreInfrastructureSolutionsSectionProps) => {
  return (
    <section className="bg-[#F8FAFD] px-5 py-10 md:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto w-full max-w-[1180px]">
        <h2 className="text-[26px] xl:text-[32px] font-bold leading-tight tracking-[-0.02em] text-[#111827]">
          {content.title}
        </h2>
        <p className="mt-4 max-w-[690px] text-[14px] xl:text-[16px] leading-[1.6] text-[#6B7280]">
          {content.description}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.solutions.map((solution) => (
            <article
              key={solution.title}
              className="flex min-h-[238px] flex-col rounded-lg border border-[#D6DCE5] bg-white px-7 py-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F1F4F8] text-[#0051D5]">
                <solution.icon className="h-[18px] w-[18px]" />
              </div>
              <h3 className="mt-6 text-[16px] xl:text-[18px] font-bold leading-tight text-[#111827]">
                {solution.title}
              </h3>
              <p className="mt-3 text-[12px] xl:text-[14px] leading-[1.55] text-[#6B7280]">
                {solution.description}
              </p>
              <Link
                href={solution.href}
                className="mt-auto inline-flex items-center gap-2 pt-5 text-[12px] font-semibold text-[#0051D5] transition-colors hover:text-[#003fa8]"
              >
                Explore Solution <span aria-hidden="true">›</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreInfrastructureSolutionsSection;
