import { RedHatCTAData } from "@/app/types/product-reseller/product-redhat/product-redhat";

interface Props {
  data: RedHatCTAData;
}

const RedHatCTASection = ({ data }: Props) => {
  const { heading, description, buttonText } = data;

  return (
    <section className="bg-[#020617] px-4 md:px-20 lg:px-30 xl:px-20 pb-12 md:pb-16">
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-4xl px-6 py-4 md:px-10 md:py-5 lg:px-14 lg:py-6 xl:px-6 xl:py-12
          bg-gradient-to-r from-[#EE0000F2] via-[#D60000] to-[#081834F2]"
        >
          <div className="flex flex-col xl:flex-row items-center justify-between gap-6 text-center xl:text-left">
            {/* Left Content */}
            <div className="">
              <h2 className="text-xl md:text-2xl xl:text-5xl font-semibold text-white">
                {heading}
              </h2>

              <p className="mt-3 text-sm md:text-base text-white/80 leading-relaxed md:max-w-md lg:max-w-md xl:max-w-2xl">
                {description}
              </p>
            </div>

            {/* Button */}
            <div className="shrink-0">
              <a
                href={data.buttonLink}
                className="px-5 py-2.5 md:px-4 md:py-3 rounded-2xl 
                bg-white/10 border border-white/20 text-white text-sm
                hover:bg-white/20 transition-all duration-300"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedHatCTASection;
