"use client";
import { useRef } from "react";
import ServiceCard from "./ServiceCard";
import { cardsData } from "./getStartedData";
import ContactForm from "./ContactForm";

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

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-b from-[#09173A] to-[black] text-white">
      {/* ================= Cards Section. ================= */}
      <div className="xl:min-h-[900px] px-4 py-10 md:px-12 md:py-16">
        <h1 className="w-[95%] mx-auto text-center font-lexend text-[22px] md:text-[30px] lg:text-[40px] xl:text-[42px] font-medium leading-[100%]">
          Get Started With Hawkstack’s
          <br />
          <span className="inline-block mt-2 mb-10">Technology Solutions</span>
        </h1>

        <div className="mt-10 space-y-12 xl:grid xl:grid-cols-3 xl:gap-12 xl:space-y-0 xl:max-w-[1320px] xl:mx-auto">
          {cardsData.map((card, i) => (
            <ServiceCard key={i} {...card} onClick={scrollToForm} />
          ))}
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

          {/* RIGHT FORM SECTION */}
          <ContactForm source="get_started" ref={formRef} />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
