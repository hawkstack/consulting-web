import { RedHatOverviewData } from "@/app/types/product-reseller/product-redhat/redhat";

interface Props {
  data: RedHatOverviewData;
}

const RedHatOverviewSection = ({ data }: Props) => {
  const { badge, title, highlightTitle, description } = data;

  return (
    <section className="w-full bg-[#f5f5f5] py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="relative inline-block text-sm md:text-xs xl:text-sm font-bold text-[#EE0000] tracking-wide mb-3">
            {badge}
            <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-[#EE0000]"></span>
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-[32px] xl:text-[48px] font-bold leading-none text-gray-900 w-full md:w-[200px] lg:w-[280px] xl:w-[460px] text-left">
            {title}
          </h2>

          <h2 className="text-2xl md:text-3xl lg:text-[32px] xl:text-[48px] font-bold text-[#EE0000] mt-1 text-left lg:max-w-[300px] xl:max-w-[400px]">
            {highlightTitle}
          </h2>
        </div>

        {/* VERTICAL DIVIDER */}
        <div className="hidden md:block w-px h-34 bg-[#CFD3D5] mx-auto"></div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-[#272D30] mt-[-1rem] md:mt-0 text-base xl:text-lg leading-relaxed max-w-md">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default RedHatOverviewSection;
