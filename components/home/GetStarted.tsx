"use client";
import { useRef } from "react";
import GradientTick from "../icons/GradientTick";

const GetStarted = () => {
  const formRef = useRef<HTMLDivElement | null>(null);

  const scrollToForm = () => {
    if (!formRef.current) return;

    const navbarHeight = document.querySelector("nav")?.offsetHeight || 80;

    const y =
      formRef.current.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight -
      16;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-gradient-to-b from-[#09173A] to-[black] text-white">
      <div className="xl:min-h-[900px] px-4 py-10 md:px-12 md:py-16">
        {/* Heading */}
        <h1 className="w-[95%] mx-auto text-center font-lexend text-[22px] md:text-[30px] lg:text-[40px] xl:text-[42px] font-medium leading-[100%] tracking-[0] text-[#FFFFFF] ">
          Get Started With Hawkstack’s
          <br />
          <span className="inline-block mt-2 mb-10">Technology Solutions</span>
        </h1>

        <div className="mt-10 space-y-12  xl:space-y-0 xl:grid xl:grid-cols-3 xl:gap-12 xl:max-w-[1320px] xl:mx-auto xl:items-stretch ">
          {/* ================= CARD 1 ================= */}
          <div className=" overflow-visible rounded-2xl border border-[#569F4C] md:border-[#569F4C] lg:border-[#8DEAF0] bg-gradient-to-b from-[#0A1A33] to-[#050B16] px-4 pb-6 pt-10 relative shadow-[-9.36px_9.36px_30px_rgba(152,249,255,0.32)] md:px-10 md:pb-10 xl:scale-100 lg:border-[#8DEAF0] lg:shadow-[0_20px_60px_rgba(74,222,128,0.35)] ">
            {/* Top pill */}
            <div className="absolute -top-4 left-1/2 flex w-full -translate-x-1/2 items-center gap-2 px-4 md:px-10">
              <span className="h-0 w-full bg-[#3AFF7C]/40" />
              <div className="whitespace-nowrap rounded-full bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] px-4 py-1.5 md:px-6 md:py-2 text-[12px] md:text-[14px] font-semibold text-black">
                HawkStack Technical Consulting
              </div>
              <span className="h-0 w-full bg-[#3AFF7C]/40" />
            </div>

            <div className="text-center">
              <h3 className="font-lexend text-[12px] md:text-[18px] font-medium leading-[100%] text-white flex justify-center">
                Connect with Technical Consultants
              </h3>

              <p className="mt-3 text-[13px] md:text-[15px] md:max-w-[700px] md:mx-auto leading-[140%] text-white font-lexend">
                Our technical consultants don’t just recommend—they design,
                deploy, & operate alongside your teams.
              </p>

              <div className="mt-6 space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 xl:block xl:space-y-4">
                <div className="bg-[#0E2547] px-4 py-3 text-center font-lexend text-[12px] font-normal leading-[100%] tracking-[0] text-[#FFFFFF] rounded-xl">
                  Validate your current stack and identify gaps before they
                  become outages
                  <div className="font-lexend text-[12px] font-semibold leading-[19.63px] tracking-[0] text-[#8EC5FF] mt-1">
                    Hands-on Implementation
                  </div>
                </div>

                <div className="rounded-xl px-4 py-3 text-center font-lexend text-[12px] font-normal leading-[100%] tracking-[0] bg-[#0E2547] text-[#FFFFFF]">
                  Help your teams adopt GitOps, SRE, and cloud-native operating
                  models.
                  <div className="font-lexend text-[12px] font-semibold leading-[19.63px] tracking-[0] text-[#8EC5FF] mt-1">
                    Production Readiness & Optimization
                  </div>
                </div>
              </div>

              <div className="mt-6 text-left">
                <p className="font-lexend text-[12px] md:text-[14px] leading-[140%] text-white mb-4">
                  Performance tuning, reliability improvements, and cost
                  optimization.Ideal for:
                </p>
                <ul className="text-[12px] md:text-[14px] font-lexend text-white md:grid md:grid-cols-2 md:gap-x-10 space-y-2 md:gap-y-3 xl:grid-cols-1 xl:gap-x-0">
                  <li className="flex items-center gap-2 xl:text-[12px]">
                    <GradientTick />
                    Cloud & Kubernetes adoption
                  </li>

                  <li className="flex items-center gap-2 xl:text-[12px]">
                    <GradientTick />
                    Platform engineering teams
                  </li>

                  <li className="flex items-center gap-2 xl:text-[12px]">
                    <GradientTick />
                    DevOps & SRE transformation
                  </li>

                  <li className="flex items-center gap-2 xl:text-[12px]">
                    <GradientTick />
                    Migration & modernization projects
                  </li>
                </ul>
              </div>

              <button
                onClick={scrollToForm}
                className="flex h-[36px] md:h-[38px] w-[246.37px] md:w-[280px] items-center justify-center rounded-full bg-gradient-to-r from-[#09173A] to-[#03070D] font-lexend text-[12px] md:text-[14px] font-medium text-white shadow-[5px_5px_10px_0px_#132943] mt-8 mx-auto"
              >
                Talk to a Technical Consultant
              </button>
            </div>
          </div>

          {/* ================= CARD 2 ================= */}
          <div className="overflow-visible rounded-2xl border border-[#569F4C] bg-gradient-to-b from-[#0A1A33] to-[#050B16] px-4 pb-6 pt-10 relative shadow-[-9.36px_9.36px_30px_rgba(152,249,255,0.32)] md:px-10 md:pb-10 xl:scale-110">
            {/* Top pill */}
            <div className="absolute -top-4 left-1/2 flex w-full -translate-x-1/2 items-center gap-2 px-4 md:px-10">
              <span className="h-0 w-full bg-[#3AFF7C]/40" />
              <div className="whitespace-nowrap rounded-full bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] px-4 py-1.5 md:px-6 md:py-2 text-[12px] md:text-[14px] font-semibold text-black">
                HawkStack OEM Connect
              </div>
              <span className="h-0 w-full bg-[#3AFF7C]/40" />
            </div>

            <div className="text-center">
              <h3 className="font-lexend text-[12px] md:text-[18px] font-medium leading-[100%] text-white flex justify-center">
                Connect with OEM Partners
              </h3>

              <p className="mt-3 text-[13px] md:text-[15px] md:max-w-[700px] md:mx-auto leading-[140%] text-white font-lexend">
                Direct, friction-free access to leading technology OEMs—powered
                by Hawkstack
              </p>

              {/* Feature cards */}
              <div className="mt-6 space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 xl:block xl:space-y-4">
                <div className="bg-[#0E2547] px-4 py-3 text-center font-lexend text-[12px] md:text-[13px] leading-[140%] text-white rounded-xl">
                  Reduce evaluation and procurement cycles with pre-aligned
                  solution blueprints.
                  <div className="mt-1 text-[12px] font-semibold text-[#8EC5FF]">
                    Enterprise-Ready Implementations
                  </div>
                </div>

                <div className="bg-[#0E2547] px-4 py-3 text-center font-lexend text-[12px] md:text-[13px] leading-[140%] text-white rounded-xl">
                  Security, scalability, compliance, & performance built-in from
                  day one.
                  <div className="mt-1 text-[12px] font-semibold text-[#8EC5FF]">
                    Single Point of Accountability
                  </div>
                </div>
              </div>

              {/* Ideal for */}
              <div className="mt-6 text-left">
                <p className="font-lexend text-[12px] md:text-[14px] leading-[140%] text-white mb-4">
                  One partner for design, deployment, and post-implementation
                  success. Ideal for:
                </p>

                <ul className="space-y-2 text-[12px] md:text-[14px] font-lexend text-white md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-3 xl:grid-cols-1 xl:gap-x-0">
                  <li className="flex items-center gap-2 xl:text-[12px]">
                    <GradientTick />
                    Platform modernization
                  </li>

                  <li className="flex items-center gap-2 xl:text-[12px]">
                    <GradientTick />
                    Kubernetes & cloud platforms
                  </li>

                  <li className="flex items-center gap-2 xl:text-[12px]">
                    <GradientTick />
                    AI / GPU infrastructure
                  </li>

                  <li className="flex items-center gap-2 xl:text-[12px]">
                    <GradientTick />
                    Enterprise open-source stacks
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <button
                onClick={scrollToForm}
                className="flex h-[36px] md:h-[38px] w-[246.37px] md:w-[280px] items-center justify-center rounded-full bg-gradient-to-r from-[#09173A] to-[#03070D] font-lexend text-[12px] md:text-[14px] font-medium text-white shadow-[5px_5px_10px_0px_#132943] mt-8 mx-auto"
              >
                Connect with OEM Experts
              </button>
            </div>
          </div>

          {/* ================= CARD 3 ================= */}
          <div className="overflow-visible rounded-2xl border border-[#569F4C] md:border-[#569F4C] xl:border-[#9B96FF] bg-gradient-to-b from-[#0A1A33] to-[#050B16] px-4 pb-6 pt-10 relative shadow-[-9.36px_9.36px_30px_rgba(152,249,255,0.32)] md:px-10 md:pb-10 xl:scale-100">
            {/* Top pill */}
            <div className="absolute -top-4 left-1/2 flex w-full -translate-x-1/2 items-center gap-2 px-4 md:px-10">
              <span className="h-0 w-full bg-[#3AFF7C]/40" />
              <div className="whitespace-nowrap rounded-full bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] px-4 py-1.5 md:px-6 md:py-2 text-[12px] md:text-[14px] font-semibold text-black">
                HawkStack Solution Advisory
              </div>
              <span className="h-0 w-full bg-[#3AFF7C]/40" />
            </div>

            <div className="text-center">
              <h3
                className="
              font-lexend
              text-[12px] md:text-[18px] font-medium leading-[100%] text-white flex justify-center"
              >
                Strategic Technology Advisory
              </h3>

              <p className="mt-3 text-[13px] md:text-[15px] md:max-w-[700px] md:mx-auto leading-[140%] text-white font-lexend">
                Align your cloud, platforms, and teams with measurable business
                outcomes.
              </p>

              {/* Feature cards */}
              <div className="mt-6 space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 xl:block xl:space-y-4">
                <div className="bg-[#0E2547] px-4 py-3 text-center font-lexend text-[12px] md:text-[13px] leading-[140%] text-white rounded-xl">
                  Clear, phased plans aligned to growth, scale, and budget.
                  <div className="mt-1 text-[12px] font-semibold text-[#8EC5FF]">
                    Use-Case Driven Solutions
                  </div>
                </div>

                <div className="bg-[#0E2547] px-4 py-3 text-center font-lexend text-[12px] md:text-[13px] leading-[140%] text-white rounded-xl">
                  Every recommendation tied to measurable outcomes.
                  <div className="mt-1 text-[12px] font-semibold text-[#8EC5FF]">
                    Cost & Value Optimization
                  </div>
                </div>
              </div>

              {/* Ideal for */}
              <div className="mt-6 text-left">
                <p className="font-lexend text-[12px] md:text-[14px] leading-[140%] text-white mb-4">
                  From advisory to execution — we stay with you post go-live.
                  Ideal for:
                </p>

                <ul className="space-y-2 text-[12px] md:text-[14px] font-lexend text-white md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-3 xl:grid-cols-1 xl:gap-x-0">
                  <li className="flex items-center gap-2 xl:text-[12px]">
                    <GradientTick />
                    CTOs & Engineering leaders
                  </li>

                  <li className="flex items-center gap-2 xl:text-[12px]">
                    <GradientTick />
                    Enterprises scaling platforms
                  </li>

                  <li className="flex items-center gap-2 xl:text-[12px]">
                    <GradientTick />
                    Startups moving to production
                  </li>

                  <li className="flex items-center gap-2 xl:text-[12px]">
                    <GradientTick />
                    AI / Cloud / Kubernetes strategy
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <button
                onClick={scrollToForm}
                className="flex h-[36px] md:h-[38px] w-[246.37px] md:w-[280px] items-center justify-center rounded-full bg-gradient-to-r from-[#09173A] to-[#03070D] font-lexend text-[12px] md:text-[14px] font-medium text-white shadow-[5px_5px_10px_0px_#132943] mt-8 mx-auto"
              >
                Start a Strategy Discussion
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ================= Second Section. ================= */}
      <div className="mt-10 w-screen overflow-hidden bg-gradient-to-b from-[#193551] to-[#040B10] px-6 md:px-4 lg:px-8 xl:px-24 py-16 md:mx-0 md:relative md:left-1/2 md:-translate-x-1/2  scroll-mt-[80px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[280px] w-[280px] rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-120px] left-[-120px] h-[240px] w-[240px] rounded-full bg-white/10 blur-3xl" />

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 md:max-w-none md:mx-10">
          {/* LEFT CONTENT */}
          <div>
            <h4 className="text-[28px] md:text-[32px] lg:text-[38px] xl:text-[42px] font-semibold leading-[110%] font-lexend text-white">
              Let’s Talk
            </h4>

            <h2 className="font-lexend text-[16px] md:text-[20px] lg:text-[22px] xl:text-[26px] font-medium leading-[140%] text-white max-w-[520px] mt-4">
              Contact us to see how HawkStack accelerates your journey.
            </h2>

            <div className="mt-6 pl-5 lg:pl-6 max-w-[560px] relative">
              {/* Left accent line */}
              <span className="left-0 top-1 h-full w-[3px] lg:w-[4px] bg-[#9B96FF] rounded-full absolute" />

              <p className="text-[13px] md:text-[14px] lg:text-[20px] font-normal leading-[160%] text-[#E5E7EB] font-lexend">
                HawkStack delivers production-ready Red Hat OpenShift platforms
                with built-in security, automation, and lifecycle
                management—empowering teams to deploy, scale, and manage
                workloads with consistency across environments.
              </p>

              <p className="font-lexend text-[13px] md:text-[14px] lg:text-[20px] font-normal leading-[160%] text-[#E5E7EB] mt-4">
                Partner with HawkStack to modernize your cloud platforms.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            ref={formRef}
            className="rounded-2xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] xl:min-h-[540px]"
          >
            <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* First Name */}
              <input
                className="rounded-xl border border-[#1E2B5C] px-4 text-[14px] text-[#0F172A] placeholder:text-[#64748B] outline-none focus:border-[#09173A] h-[42px]"
                placeholder="First Name*"
              />

              {/* Last Name */}
              <input
                className="rounded-xl border border-[#A3A3A3] px-4 text-[14px] placeholder:text-[#7A7A7A] outline-none focus:border-[#09173A] h-[42px]"
                placeholder="Last Name*"
              />

              {/* Phone */}
              <input
                className="rounded-xl border border-[#A3A3A3] px-4 text-[14px] placeholder:text-[#7A7A7A] outline-none focus:border-[#09173A] h-[42px]"
                placeholder="Phone no.*"
              />

              {/* Job Title */}
              <input
                className="rounded-xl border border-[#A3A3A3] px-4 text-[14px] placeholder:text-[#7A7A7A] outline-none focus:border-[#09173A] h-[42px]"
                placeholder="Job Title*"
              />

              {/* Company */}
              <input
                className="rounded-xl border border-[#A3A3A3] px-4 text-[14px] placeholder:text-[#7A7A7A] outline-none focus:border-[#09173A] h-[42px]"
                placeholder="Company*"
              />

              {/* Country */}
              <input
                className="rounded-xl border border-[#A3A3A3] px-4 text-[14px] placeholder:text-[#7A7A7A] outline-none focus:border-[#09173A] h-[42px]"
                placeholder="Country*"
              />

              {/* Message */}
              <textarea
                className="min-h-[160px] xl:min-h-[280px] resize-none rounded-xl border border-[#A3A3A3] px-4 py-3 text-[14px] placeholder:text-[#7A7A7A] outline-none focus:border-[#09173A] col-span-full"
                placeholder="Let’s Talk what you’re planning......"
              />

              {/* Submit */}
              <button
                type="submit"
                className="mt-4 h-[42px] rounded-2xl bg-gradient-to-r from-[#03070D] to-[#09173A] text-[10px] font-semibold tracking-wide text-[#FFFFFF] shadow-[0_8px_20px_rgba(0,0,0,0.35)] col-span-full"
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
