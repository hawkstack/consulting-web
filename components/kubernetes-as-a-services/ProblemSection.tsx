import { ProblemData } from "@/app/types/kubernetes-as-a-services";

interface Props {
  data: ProblemData;
}

const ProblemSection = ({ data }: Props) => {
  const { header, items } = data;

  return (
    <section className="bg-[#020617] text-white py-12 md:py-16 lg:py-24 xl:py-20 px-4 md:px-14 lg:px-20 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <p className="text-[#22D3EE] text-xs xl:text-sm tracking-[2px] font-semibold mb-3 lg:mb-4 text-center md:text-left">
              {header.tag}
            </p>

            <h2 className="text-[22px] md:text-[24px] lg:text-[32px] xl:text-[42px] font-bold leading-none text-center md:text-left">
              {header.title}
            </h2>

            <p className="hidden md:block text-white/70 text-xs lg:text-sm xl:text-base mt-4 text-center md:text-left">
              {header.description}
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="flex flex-col gap-3 lg:gap-4 max-w-[480px] justify-self-end">
            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-[#1a2032] px-5 md:px-4 lg:px-6 xl:px-4 py-3 lg:py-4 text-center md:text-left text-xs lg:text-sm xl:text-base text-white/90"
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
