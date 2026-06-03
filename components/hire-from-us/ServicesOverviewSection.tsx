import { ServicesOverviewSectionData } from "@/app/types/hire-from-us/hire-from-us";

interface ServicesOverviewSectionProps {
  data: ServicesOverviewSectionData;
}

export default function ServicesOverviewSection({
  data,
}: ServicesOverviewSectionProps) {
  return (
    <section className="w-full bg-white py-12 md:py-16 xl:py-14">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col items-center xl:items-start">
          <h2 className="text-center xl:text-left text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#0048FF]">
            {data.title}
          </h2>

          <p className="mt-3 max-w-[700px] text-center xl:text-left text-[13px] md:text-[14px] xl:text-[16px] leading-[1.7] text-[#344054]">
            {data.description}
          </p>

          <span className="mt-8 text-[10px] font-bold uppercase tracking-[2px] text-[#0048FF] md:text-xs">
            {data.badge}
          </span>
        </div>

        {/* Cards */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {data.categories.map((category, index) => (
            <div
              key={index}
              className="rounded-[18px] border border-[#DCE4F5] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)] overflow-hidden"
            >
              <div className="h-[3px] w-full bg-[#0048FF]" />

              <div className="p-5 xl:p-6">
                <h3 className="text-[18px] font-semibold leading-[1.2] text-[#101828]">
                  {category.title}
                </h3>

                <p className="mt-3 text-[13px] leading-[1.7] text-[#667085]">
                  {category.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-start text-[13px] text-[#667085]"
                    >
                      <span className="mr-3 mt-[8px] h-[4px] w-[4px] rounded-full bg-current" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap justify-center xl:justify-start gap-3">
          {data.technologies.map((tech, index) => (
            <div
              key={index}
              className="rounded-full border border-[#DCE4F5] bg-white px-4 py-2 text-[12px] font-semibold text-[#0048FF] shadow-[0_4px_12px_rgba(15,23,42,0.06)]"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
