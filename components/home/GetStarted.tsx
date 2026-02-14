import GradientTick from "../icons/GradientTick";

const GetStarted = () => {
  return (
    <section className="bg-gradient-to-b from-[#050B16] to-[#09173A] px-4 py-10 text-white">
      {/* Heading */}
      <h1
        className="
        w-[95%]
        mx-auto
        text-center
        font-lexend
        text-[22px]
        font-medium
        leading-[100%]
        tracking-[0]
        text-[#FFFFFF]
       "
      >
        Get Started With Hawkstack’s
        <br />
        <span className="inline-block mt-2">Technology Solutions</span>
      </h1>

      <div className="mt-10 space-y-12">
        {/* ================= CARD 1 ================= */}
        <div
          className="
          overflow-visible
          rounded-2xl
          border
          border-[#569F4C]
          bg-gradient-to-b
          from-[#0A1A33]
          to-[#050B16]
          px-4
          pb-6
          pt-10
          relative
          shadow-[-9.36px_9.36px_30px_rgba(152,249,255,0.32)]
        "
        >
          {/* Top pill */}
          <div className="absolute -top-4 left-1/2 flex w-full -translate-x-1/2 items-center gap-2 px-4">
            <span className="h-px w-full bg-[#3AFF7C]/40" />
            <div className="whitespace-nowrap rounded-full bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] px-4 py-1.5 text-[12px] font-semibold text-black">
              HawkStack Technical Consulting
            </div>
            <span className="h-px w-full bg-[#3AFF7C]/40" />
          </div>

          <div className="text-center">
            <h3 className="font-lexend text-[12px] font-medium leading-[100%] tracking-[0] text-white flex items-center justify-center">
              Connect with Technical Consultants
            </h3>

            <p
              className="
              mt-3
              text-[13px]
              font-normal
              leading-[100%]
              tracking-[0]
              text-white
              flex
              items-center
              font-lexend
              "
            >
              Our technical consultants don’t just recommend—they design,
              deploy, & operate alongside your teams.
            </p>

            <div className="mt-6 space-y-4">
              <div
                className="
                bg-[#0E2547]
                px-4
                py-3
                text-center
                font-lexend
                text-[12px]
                font-normal
                leading-[100%]
                tracking-[0]
                text-[#FFFFFF]
                rounded-xl
                "
              >
                Validate your current stack and identify gaps before they become
                outages
                <div
                  className="
                  font-lexend
                  text-[12px]
                  font-semibold
                  leading-[19.63px]
                  tracking-[0]
                  text-[#8EC5FF]
                  mt-1
                "
                >
                  Hands-on Implementation
                </div>
              </div>

              <div
                className="
                rounded-xl
                px-4
                py-3
                text-center
                font-lexend
                text-[12px]
                font-normal
                leading-[100%]
                tracking-[0]
                bg-[#0E2547]
                text-[#FFFFFF]
                "
              >
                Help your teams adopt GitOps, SRE, and cloud-native operating
                models.
                <div
                  className="
                  font-lexend
                  text-[12px]
                  font-semibold
                  leading-[19.63px]
                  tracking-[0]
                  text-[#8EC5FF]
                  mt-1
                "
                >
                  Production Readiness & Optimization
                </div>
              </div>
            </div>

            <div className="mt-6 text-left">
              <p
                className="
                font-lexend
                text-[12px]
                font-normal
                leading-[100%]
                tracking-[0]
                text-white
                flex
                mb-3
                "
              >
                Performance tuning, reliability improvements, and cost
                optimization.Ideal for:
              </p>
              <ul className="space-y-2 text-[12px] font-lexend text-white">
                <li className="flex items-center gap-2">
                  <GradientTick />
                  Cloud & Kubernetes adoption
                </li>

                <li className="flex items-center gap-2">
                  <GradientTick />
                  Platform engineering teams
                </li>

                <li className="flex items-center gap-2">
                  <GradientTick />
                  DevOps & SRE transformation
                </li>

                <li className="flex items-center gap-2">
                  <GradientTick />
                  Migration & modernization projects
                </li>
              </ul>
            </div>

            <button
              className="
              mx-auto
              flex
              h-[37.3px]
              w-[246.37px]
              items-center
              justify-center
              rounded-[19.63px]
              bg-gradient-to-r
              from-[#09173A]
              to-[#03070D]
              font-lexend
              text-[12px]
              font-medium
              leading-[100%]
              tracking-[0]
              text-white
              shadow-[5px_5px_10px_0px_#132943]
              mt-6
            "
            >
              Talk to a Technical Consultant
            </button>
          </div>
        </div>

        {/* ================= CARD 2 ================= */}
        <div
          className="overflow-visible
          rounded-2xl
          border
          border-[#569F4C]
          bg-gradient-to-b
          from-[#0A1A33]
          to-[#050B16]
          px-4
          pb-6
          pt-10
          relative
          shadow-[-9.36px_9.36px_30px_rgba(152,249,255,0.32)]"
        >
          {/* Top pill */}
          <div className="absolute -top-4 left-1/2 flex w-full -translate-x-1/2 items-center gap-2 px-4">
            <span className="h-px w-full bg-[#3AFF7C]/40" />
            <div className="whitespace-nowrap rounded-full bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] px-4 py-1.5 text-[12px] font-semibold text-black">
              HawkStack OEM Connect
            </div>
            <span className="h-px w-full bg-[#3AFF7C]/40" />
          </div>

          <div className="text-center">
            <h3 className="font-lexend text-[12px] font-medium leading-[100%] tracking-[0] text-white flex items-center justify-center">
              Connect with OEM Partners
            </h3>

            <p
              className="mt-3
              text-[13px]
              font-normal
              leading-[100%]
              tracking-[0]
              text-white
              flex
              items-center
              font-lexend"
            >
              Direct, friction-free access to leading technology OEMs—powered by
              Hawkstack
            </p>

            <div className="mt-6 space-y-4">
              <div
                className="
              bg-[#0E2547]
                px-4
                py-3
                text-center
                font-lexend
                text-[12px]
                font-normal
                leading-[100%]
                tracking-[0]
                text-[#FFFFFF]
                rounded-xl
              "
              >
                Reduce evaluation and procurement cycles with pre-aligned
                solution blueprints.
                <div
                  className="
                  font-lexend
                  text-[12px]
                  font-semibold
                  leading-[19.63px]
                  tracking-[0]
                  text-[#8EC5FF]
                  mt-1
                "
                >
                  Enterprise-Ready Implementations
                </div>
              </div>

              <div
                className="
                rounded-xl
                px-4
                py-3
                text-center
                font-lexend
                text-[12px]
                font-normal
                leading-[100%]
                tracking-[0]
                bg-[#0E2547]
                text-[#FFFFFF]
              "
              >
                Security, scalability, compliance, & performance built-in from
                day one.
                <div
                  className="
                  font-lexend
                  text-[12px]
                  font-semibold
                  leading-[19.63px]
                  tracking-[0]
                  text-[#8EC5FF]
                  mt-1
                "
                >
                  Single Point of Accountability
                </div>
              </div>
            </div>

            <div className="mt-6 text-left">
              <p
                className="
                font-lexend
                text-[12px]
                font-normal
                leading-[100%]
                tracking-[0]
                text-white
                flex
                mb-3
              "
              >
                One partner for design, deployment, and post-implementation
                success.Ideal for:
              </p>
              <ul className="space-y-2 text-[12px] font-lexend text-white">
                <li className="flex items-center gap-2">
                  <GradientTick />
                  Platform modernization
                </li>

                <li className="flex items-center gap-2">
                  <GradientTick />
                  Kubernetes & cloud platforms
                </li>

                <li className="flex items-center gap-2">
                  <GradientTick />
                  AI / GPU infrastructure
                </li>

                <li className="flex items-center gap-2">
                  <GradientTick />
                  Enterprise open-source stacks
                </li>
              </ul>
            </div>

            <button
              className="
              mx-auto
              flex
              h-[37.3px]
              w-[246.37px]
              items-center
              justify-center
              rounded-[19.63px]
              bg-gradient-to-r
              from-[#09173A]
              to-[#03070D]
              font-lexend
              text-[12px]
              font-medium
              leading-[100%]
              tracking-[0]
              text-white
              shadow-[5px_5px_10px_0px_#132943]
              mt-6
            "
            >
              Connect with OEM Experts
            </button>
          </div>
        </div>

        {/* ================= CARD 3 ================= */}
        <div
          className="overflow-visible rounded-2xl
          border
          border-[#569F4C]
          bg-gradient-to-b
          from-[#0A1A33]
          to-[#050B16]
          px-4
          pb-6
          pt-10
          relative
          shadow-[-9.36px_9.36px_30px_rgba(152,249,255,0.32)]"
        >
          {/* Top pill */}
          <div className="absolute -top-4 left-1/2 flex w-full -translate-x-1/2 items-center gap-2 px-4">
            <span className="h-px w-full bg-[#3AFF7C]/40" />
            <div className="whitespace-nowrap rounded-full bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] px-4 py-1.5 text-[12px] font-semibold text-black">
              HawkStack Solution Advisory
            </div>
            <span className="h-px w-full bg-[#3AFF7C]/40" />
          </div>

          <div className="text-center">
            <h3 className="font-lexend text-[12px] font-medium leading-[100%] tracking-[0] text-white flex items-center justify-center">
              Strategic Technology Advisory
            </h3>

            <p
              className="mt-3
              text-[13px]
              font-normal
              leading-[100%]
              tracking-[0]
              text-white
              flex
              items-center
              font-lexend"
            >
              Align your cloud, platforms, and teams with measurable business
              outcomes.
            </p>

            <div className="mt-6 space-y-4">
              <div
                className="
              bg-[#0E2547]
                px-4
                py-3
                text-center
                font-lexend
                text-[12px]
                font-normal
                leading-[100%]
                tracking-[0]
                text-[#FFFFFF]
                rounded-xl
              "
              >
                Clear, phased plans aligned to growth, scale, and budget.
                <div
                  className="
                  font-lexend
                  text-[12px]
                  font-semibold
                  leading-[19.63px]
                  tracking-[0]
                  text-[#8EC5FF]
                  mt-1
                "
                >
                  Use-Case Driven Solutions
                </div>
              </div>

              <div
                className="
                rounded-xl
                px-4
                py-3
                text-center
                font-lexend
                text-[12px]
                font-normal
                leading-[100%]
                tracking-[0]
                bg-[#0E2547]
                text-[#FFFFFF]
              "
              >
                Every recommendation tied to measurable outcomes.
                <div
                  className="
                  font-lexend
                  text-[12px]
                  font-semibold
                  leading-[19.63px]
                  tracking-[0]
                  text-[#8EC5FF]
                  mt-1
                "
                >
                  Cost & Value Optimization
                </div>
              </div>
            </div>

            <div className="mt-6 text-left">
              <p
                className="
                font-lexend
                text-[12px]
                font-normal
                leading-[100%]
                tracking-[0]
                text-white
                flex
                mb-3
              "
              >
                From advisory to execution — we stay with you post go-live.Ideal
                for:
              </p>
              <ul className="space-y-2 text-[12px] font-lexend text-white">
                <li className="flex items-center gap-2">
                  <GradientTick />
                  CTOs & Engineering leaders
                </li>

                <li className="flex items-center gap-2">
                  <GradientTick />
                  Enterprises scaling platforms
                </li>

                <li className="flex items-center gap-2">
                  <GradientTick />
                  Startups moving to production
                </li>

                <li className="flex items-center gap-2">
                  <GradientTick />
                  AI / Cloud / Kubernetes strategy
                </li>
              </ul>
            </div>

            <button
              className="
              mx-auto
              flex
              h-[37.3px]
              w-[246.37px]
              items-center
              justify-center
              rounded-[19.63px]
              bg-gradient-to-r
              from-[#09173A]
              to-[#03070D]
              font-lexend
              text-[12px]
              font-medium
              leading-[100%]
              tracking-[0]
              text-white
              shadow-[5px_5px_10px_0px_#132943]
              mt-6
            "
            >
              Start a Strategy Discussion
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
