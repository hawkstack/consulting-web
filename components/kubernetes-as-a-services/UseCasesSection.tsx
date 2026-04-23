import { UseCaseItem } from "@/app/types/kubernetes-as-a-services";

interface Props {
  data: UseCaseItem[];
}

const UseCasesSection = ({ data }: Props) => {
  return (
    <section className="bg-[#020617] text-white py-16 md:py-20 lg:py-24 xl:py-20 px-6 lg:px-20 xl:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            {/* Tag */}
            <p className="text-[#22D3EE] text-xs xl:text-sm tracking-[2px] font-semibold mb-4">
              USE CASES
            </p>

            {/* Heading */}
            <h2 className="text-[24px] md:text-[24px] lg:text-[28px] xl:text-[44px] xl:max-w-[520px] font-semibold leading-none mb-4">
              Designed for teams building and scaling cloud-native applications.
            </h2>

            {/* Description */}
            <p className="text-[#9BA3AF] text-sm md:text-base max-w-[520px] mx-auto md:mx-0">
              KaaS supports engineering teams that need reliable Kubernetes
              infrastructure without diverting valuable time into platform
              maintenance and operational firefighting.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 grid-cols-2 gap-4 md:gap-5">
            {data.map((item) => (
              <div
                key={item.id}
                className="
                  w-full
                  rounded-3xl
                  border border-white/10
                  bg-[#1a2032]
                  px-5 py-4 xl:px-4 xl:py-4 
                  text-sm md:text-base
                  text-[#C9D1D9]
                  leading-relaxed
                  transition-all duration-300
                  hover:border-white/20
                "
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
