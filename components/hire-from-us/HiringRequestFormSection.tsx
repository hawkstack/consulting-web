import HiringRequestForm from "./HiringRequestForm";

export default function HiringRequestFormSection() {
  return (
    <section
      id="hiring-request-form"
      className="w-full py-12 lg:py-24 xl:py-18 lg:scroll-mt-8 md:scroll-mt-[-300px] scroll-mt-[-360px]"
    >
      <div className="mx-auto max-w-[1050px] px-4">
        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:items-center lg:justify-center xl:gap-26">
          <div className="w-full md:w-[530px] lg:w-[400px]">
            <HiringRequestForm />
          </div>

          <div className="flex w-full flex-col items-center text-center lg:w-[500px] lg:items-start lg:text-left">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[2px] text-[#2155FF] lg:text-[12px] xl:text-[13px]">
              Hire From HawkStack
            </p>

            <h2 className="mx-auto md:max-w-[550px] lg:max-w-[450px] text-[24px] font-bold leading-[120%] text-[#2155FF] md:text-[32px] lg:mx-0 lg:text-[40px] xl:text-[48px]">
              Find job-ready professionals for real enterprise work
            </h2>

            <p className="max-w-[600px] mt-5 text-xs leading-6 text-[#5F6B84] xl:text-base">
              Our talent pool is vetted across skills, communication, DevOps
              execution, business acumen, Domain, leadership management and
              enterprise implementation. Every candidate is selected through
              top-tier technical and behavioral assessments.
            </p>

            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              <div className="min-w-[120px] rounded-xl border border-[#E6EAF2] bg-white p-4 shadow-sm">
                <h3 className="text-2xl font-bold text-[#2155FF]">80%</h3>
                <p className="mt-1 text-xs text-[#5F6B84]">
                  Less hiring effort
                </p>
              </div>

              <div className="min-w-[120px] rounded-xl border border-[#E6EAF2] bg-white p-4 shadow-sm">
                <h3 className="text-2xl font-bold text-[#2155FF]">Day 1</h3>
                <p className="mt-1 text-xs text-[#5F6B84]">
                  Ready to contribute
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
