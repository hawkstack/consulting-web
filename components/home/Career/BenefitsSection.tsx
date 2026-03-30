import { benefits } from "./Benefitsdata";

export default function BenefitsSection() {
  return (
    <section className="relative w-full bg-[#FFFFFF] xl:py-20 xl:px-30 md:px-16 md:py-16 overflow-hidden">
      {/* Gradient Blur Shape */}
      <div className="pointer-events-none absolute top-[80px] left-[100px] xl:w-[150px] xl:h-[150px] lg:w-[110px] lg:h-[110px] opacity-90 blur-[220px] bg-gradient-to-br from-[#002EA3] to-[#009DFF] rounded-full" />
      <div className="max-full mx-auto text-left">
        {/* Heading */}
        <h2 className="mb-12">
          <span className="text-[#0048FF] font-semibold xl:text-6xl lg:text-4xl">
            Benefits
          </span>{" "}
          <span className="text-[#676767] xl:text-5xl lg:text-4xl font-medium ml-2">
            that make a difference
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-12 lg:gap-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center hover:shadow-lg transition"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-blue-50">
                    <Icon className="text-blue-600 w-6 h-6" />
                  </div>
                </div>

                {/* Text */}
                <p className="text-[#000000] xl:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
