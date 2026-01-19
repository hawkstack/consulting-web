"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const carouselData: CarouselItem[] = [
  {
    id: 1,
    title: "Healthcare & Technology",
    description:
      " Red Hat Consulting delivers HIPAA-compliant RHEL, OpenShift cloud, and Ansible automation for secure, scalable healthcare IT ",
    image: "/images/industries/industry-healthcare.webp",
  },
  {
    id: 2,
    title: "E-commerce & Retail",
    description:
      "We enable OpenShift microservices, Ansible CI/CD, and RHEL scaling to power secure and resilient retail platforms.",
    image: "/images/industries/industry-ecommerce-retail.webp",
  },
  {
    id: 3,
    title: "Telecom",
    description:
      "With Open Shift for 5G, Ansible automation, and RHEL tuning, Red Hat Consulting drives cloud-native telecom innovation.",
    image: "/images/industries/industry-telecommunications.webp",
  },
  {
    id: 4,
    title: "Manufacturing",
    description:
      "We modernize factories with RHEL security, OpenShift orchestration, and Ansible automation for Industry 4.0.",
    image: "/images/industries/industry-financial-services.webp",
  },
  {
    id: 5,
    title: "Banking & Insurance",
    description:
      "Red Hat Consulting delivers OpenShift, Ansible, and RHEL solutions for secure, compliant, and scalable digital banking.",
    image: "/images/industries/industry-mobile-business-analytics.webp",
  },
];

const AUTO_SLIDE_INTERVAL = 4000;

type Position = "center" | "left1" | "left2" | "right1" | "right2" | "hidden";

/** Calculate relative position (5-card visible carousel) */
const getPosition = (
  index: number,
  activeIndex: number,
  length: number
): Position => {
  if (index === activeIndex) return "center";
  if (index === (activeIndex - 1 + length) % length) return "left1";
  if (index === (activeIndex - 2 + length) % length) return "left2";
  if (index === (activeIndex + 1) % length) return "right1";
  if (index === (activeIndex + 2) % length) return "right2";
  return "hidden";
};

const Industries = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(2);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === carouselData.length - 1 ? 0 : prev + 1
      );
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = (): void => {
    setActiveIndex((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  const handleNext = (): void => {
    setActiveIndex((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#EEF1FF] py-24 h-[823px]">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-['Lexend_Deca'] h-[60px] w-[818px] text-[40px] leading-[60px] font-normal tracking-[-0.03em] text-center text-[#213174]">
          Powering Industries with Red Hat Consulting
        </h2>
        <p className="mt-4 h-[40px] w-[669px] text-[16px] text-[#213174] leading-[24px]">
          Design enterprise platforms that scale with confidence.
          <br />
          Modernise workloads with expert Red Hat architects and real-world
          DevOps practices.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center">
        <div className="relative w-[1428px] h-[560px] flex flex-col items-center justify-end">
          {/* Cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            {carouselData.map((item, index) => {
              const position = getPosition(
                index,
                activeIndex,
                carouselData.length
              );

              return (
                <div
                  key={item.id}
                  className={`
                    absolute transition-all duration-500 ease-in-out
                    rounded-[28px] overflow-hidden
                    ${position !== "center" ? "pointer-events-none" : ""}
                    ${
                      position === "center" &&
                      "w-[454px] z-30 opacity-100 translate-x-0 shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
                    }
                    ${
                      position === "left1" &&
                      "w-[360px] h-[320px] z-20 opacity-90 -translate-x-[320px]"
                    }
                    ${
                      position === "right1" &&
                      "w-[360px] h-[320px] z-20 opacity-90 translate-x-[320px]"
                    }
                    ${
                      position === "left2" &&
                      "w-[320px] h-[240px] z-10 opacity-40 -translate-x-[420px]"
                    }
                    ${
                      position === "right2" &&
                      "w-[320px] h-[240px] z-10 opacity-40 translate-x-[420px]"
                    }
                  `}
                >
                  {/* Image wrapper required for next/image fill */}
                  <div
                    className={`relative w-full
                      ${
                        position === "center"
                          ? "h-[280px]"
                          : position === "left1" || position === "right1"
                          ? "h-[320px]"
                          : "h-[240px]"
                      }
                    `}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={position === "center"}
                      sizes="(min-width: 1024px) 454px, 90vw"
                      className="object-cover"
                    />
                  </div>

                  {position === "center" && (
                    <div className="bg-white px-6 py-5 rounded-b-[28px]">
                      <h3 className="font-['Lexend_Deca'] text-[20.36px] leading-[20.36px] font-normal tracking-[0] text-[#000000]">
                        {item.title}
                      </h3>
                      <p className="mt-2 font-['Lexend_Deca'] text-[13.57px] leading-[13.57px] font-light tracking-[0] text-[#000000]">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Dots + Arrows (INSIDE carousel) */}
          <div className="relative z-50 mb-4 flex items-center gap-6">
            <button
              onClick={handlePrev}
              className="text-2xl text-[#999999] hover:text-gray-600 cursor-pointer"
            >
              ←
            </button>

            <div className="flex gap-3">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === activeIndex ? "bg-[#3015BD]" : "bg-[#999999]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="text-2xl text-[#999999] hover:text-gray-600 cursor-pointer"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
