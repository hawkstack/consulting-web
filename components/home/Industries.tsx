"use client";
import Image from "next/image";
import { JSX, useEffect, useState } from "react";

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
    <section className="w-full bg-[#EEF1FF] py-16 lg:py-14">
      {/* Heading */}
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 text-center">
        <h2 className="font-['Lexend_Deca'] text-[24px] md:text-[32px] lg:text-[40px] leading-tight lg:leading-[60px] text-[#213174] lg:whitespace-nowrap">
          Powering Industries with Red Hat Consulting
        </h2>
        <p className="mt-0 max-w-3xl text-[10px] md:text-[14px] lg:text-[16px] text-[#213174] leading-[22px] lg:leading-[24px] text-center">
          Design enterprise platforms that scale with confidence.
          <br />
          Modernise workloads with expert Red Hat architects and real-world
          DevOps practices.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center mt-0">
        <div className="relative w-full max-w-[1428px] h-[420px] sm:h-[480px] lg:h-[560px] flex flex-col items-center justify-end">
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
                    overflow-hidden
                    rounded-[20px] sm:rounded-[24px] lg:rounded-[28px]
                    ${position !== "center" ? "pointer-events-none" : ""}

                    ${
                      position === "center" &&
                      "w-[90vw] sm:w-[380px] lg:w-[470px] z-30 opacity-100 translate-x-0 shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
                    }

                    ${
                      position === "left1" &&
                      "hidden sm:block w-[300px] h-[280px] lg:w-[300px] lg:h-[320px] z-20 opacity-90 sm:-translate-x-[220px] -translate-x-[320px] lg:-translate-x-[310px]"
                    }

                    ${
                      position === "right1" &&
                      "hidden sm:block w-[300px] h-[280px] lg:w-[300px] lg:h-[320px] z-20 opacity-90 sm:translate-x-[220px] -translate-x-[320px] lg:translate-x-[310px]"
                    }

                    ${
                      position === "left2" &&
                      "hidden lg:block w-[320px] h-[240px] lg:w-[160px] z-10 opacity-40 -translate-x-[420px]"
                    }

                    ${
                      position === "right2" &&
                      "hidden lg:block w-[320px] lg:w-[160px] h-[240px] z-10 opacity-40 translate-x-[420px]"
                    }
                  `}
                >
                  {/* Image */}
                  <div
                    className={`relative w-full
                      ${
                        position === "center"
                          ? "h-[220px] sm:h-[250px] lg:h-[280px]"
                          : position === "left1" || position === "right1"
                          ? "h-[260px] sm:h-[280px] lg:h-[320px]"
                          : "h-[240px]"
                      }
                    `}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={position === "center"}
                      sizes="(min-width:1024px) 454px, (min-width:640px) 380px, 90vw"
                      className="object-cover"
                    />
                  </div>

                  {position === "center" && (
                    <div className="bg-white px-4 sm:px-5 lg:px-6 py-4 lg:py-5 rounded-b-[20px] sm:rounded-b-[24px] lg:rounded-b-[28px]">
                      <h3 className="font-['Lexend_Deca'] text-[16px] sm:text-[18px] lg:text-[20.36px] text-black">
                        {item.title}
                      </h3>
                      <p className="mt-2 font-['Lexend_Deca'] text-[12px] sm:text-[13px] lg:text-[13.50  px] font-light text-black">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="relative z-50 mb-0 sm:mb-2 lg:mb-6 flex items-center gap-6">
            <button onClick={handlePrev} className="text-2xl text-[#999999]">
              ←
            </button>

            <div className="flex gap-3">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? "bg-[#3015BD]" : "bg-[#999999]"
                  }`}
                />
              ))}
            </div>

            <button onClick={handleNext} className="text-2xl text-[#999999]">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
