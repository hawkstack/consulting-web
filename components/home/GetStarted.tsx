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
      {/* ================= Second Section. ================= */}
      <div className="-mx-4 mt-10 w-screen overflow-hidden bg-gradient-to-br from-[#03070D] via-[#09173A] to-[#09173A] px-6 py-16 md:px-12">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[280px] w-[280px] rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-120px] left-[-120px] h-[240px] w-[240px] rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1100px] grid-cols-1 gap-12 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <h4 className="font-lexend text-[32px] font-semibold leading-[100%] text-white">
              Let’s Talk
            </h4>

            <h2 className="mt-4 font-lexend text-[20px] font-medium leading-[130%] text-white">
              Contact us to see how HawkStack accelerates your journey.
            </h2>

            <div className="relative mt-6 pl-5">
              {/* Left accent line */}
              <span className="absolute left-0 top-1 h-full w-[3px] bg-[#9B96FF]" />

              <p className="font-lexend text-[14px] font-normal leading-[160%] text-[#E5E7EB]">
                HawkStack delivers production-ready Red Hat OpenShift platforms
                with built-in security, automation, and lifecycle
                management—empowering teams to deploy, scale, and manage
                workloads with consistency across environments.
              </p>

              <p className="mt-4 font-lexend text-[14px] font-normal leading-[160%] text-[#E5E7EB]">
                Partner with HawkStack to modernize your cloud platforms.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-2xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* First Name */}
              <input
                className="
                rounded-xl
                border
                border-[#1E2B5C]
                px-4
                text-[14px]
                text-[#0F172A]
                placeholder:text-[#64748B]
                outline-none
                focus:border-[#09173A]
                h-[42px]
            "
                placeholder="First Name*"
              />

              {/* Last Name */}
              <input
                className="
                rounded-xl
                border
                border-[#A3A3A3]
                px-4
                text-[14px]
                placeholder:text-[#7A7A7A]
                outline-none
                focus:border-[#09173A]
                h-[42px]
            "
                placeholder="Last Name*"
              />

              {/* Phone */}
              <input
                className="
                rounded-xl
                border
                border-[#A3A3A3]
                px-4
                text-[14px]
                placeholder:text-[#7A7A7A]
                outline-none
                focus:border-[#09173A]
                h-[42px]
            "
                placeholder="Phone no.*"
              />

              {/* Job Title */}
              <input
                className="
                rounded-xl
                border
                border-[#A3A3A3]
                px-4
                text-[14px]
                placeholder:text-[#7A7A7A]
                outline-none
                focus:border-[#09173A]
                h-[42px]
            "
                placeholder="Job Title*"
              />

              {/* Company */}
              <input
                className="
                rounded-xl
                border
                border-[#A3A3A3]
                px-4
                text-[14px]
                placeholder:text-[#7A7A7A]
                outline-none
                focus:border-[#09173A]
                h-[42px]
            "
                placeholder="Company*"
              />

              {/* Country */}
              <input
                className="
                rounded-xl
                border
                border-[#A3A3A3]
                px-4
                text-[14px]
                placeholder:text-[#7A7A7A]
                outline-none
                focus:border-[#09173A]
                h-[42px]
            "
                placeholder="Country*"
              />

              {/* Message */}
              <textarea
                className="
                min-h-[160px]
                resize-none
                rounded-xl
                border
                border-[#A3A3A3]
                px-4
                py-3
                text-[14px]
                placeholder:text-[#7A7A7A]
                outline-none
                focus:border-[#09173A]
                col-span-full
            "
                placeholder="Let’s Talk what you’re planning......"
              />

              {/* Submit */}
              <button
                type="submit"
                className="
                mt-4
                h-[46px]
                rounded-full
                bg-gradient-to-r
                from-[#03070D]
                to-[#09173A]
                text-[14px]
                font-semibold
                tracking-wide
                text-white
                shadow-[0_8px_20px_rgba(0,0,0,0.35)]
                col-span-full
            "
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
