"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  {
    title: "Managed MSP Public Cloud",
    heading: "High-margin managed cloud for MSP customer projects",
    desc: "MULTI-TENANT · PAYG · 24×7 SUPPORT · LOW COST",
    image: "/Homepage1.jpg",
  },
  {
    title: "Alternative to VMware",
    heading: "Business-ready OpenStack for enterprises",
    desc: "Secure · Open · Scalable",
    image: "/Office.png",
  },
  {
    title: "High Performance Storage",
    heading: "Scalable object, block and file storage",
    desc: "Optimized for speed and efficiency",
    image: "/Mobile.jpg",
  },
  {
    title: "Application Multi-Cloud",
    heading: "DevOps automation & cost reduction",
    desc: "Build once, run anywhere",
    image: "/Stars.jpg",
  },
  {
    title: "Enterprise Security",
    heading: "Zero-trust cloud security platform",
    desc: "Protected · Monitored · Compliant",
    image: "/Security.jpg",
  },
  {
    title: "AI & Analytics",
    heading: "Data-driven insights with AI",
    desc: "Predict · Optimize · Automate",
    image: "/AI.jpg",
  },
];

const AUTO_DELAY = 5000;
const CONTENT_DELAY = 700; // big card content delay
const RELEASE_DELAY = 300; // hidden card delay
const VISIBLE_COUNT = 4;

export default function OurSolutions() {
  const [active, setActive] = useState(0);
  const [showBigContent, setShowBigContent] = useState(0);
  const [leavingBig, setLeavingBig] = useState<number | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // ▶ Auto slide
  const startAuto = () => {
    stopAuto();
    timerRef.current = setInterval(() => {
      setLeavingBig(active);
      setActive((prev) => (prev + 1) % slides.length);
    }, AUTO_DELAY);
  };

  const stopAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  // ▶ Click handler
  const handleClick = (index: number) => {
    if (index === active) return;
    setLeavingBig(active);
    setActive(index);
    startAuto();
  };

  // ▶ Timing control
  useEffect(() => {
    const releaseTimer = setTimeout(() => {
      setLeavingBig(null);
    }, RELEASE_DELAY);

    const contentTimer = setTimeout(() => {
      setShowBigContent(active);
    }, CONTENT_DELAY);

    return () => {
      clearTimeout(releaseTimer);
      clearTimeout(contentTimer);
    };
  }, [active]);

  // ▶ Relative position
  const getPosition = (index: number) =>
    (index - active + slides.length) % slides.length;

  // ▶ Visible card calculation
  const orderedIndexes = slides
    .map((_, i) => i)
    .sort((a, b) => getPosition(a) - getPosition(b));

  const visibleIndexes = orderedIndexes.slice(0, VISIBLE_COUNT);

  // ▶ Position styles (FIXED TEMPLATE STRINGS)
  const positionStyles = (pos: number) => {
    const base = "transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]";

    switch (pos) {
      case 0:
        return `${base} translate-x-7 scale-100 z-50 w-[800px] h-[480px]`;
      case 1:
        return `${base} translate-x-[840px] scale-95 z-40 w-[180px] h-[500px]`;
      case 2:
        return `${base} translate-x-[1020px] scale-90 z-30 w-[180px] h-[530px]`;
      case 3:
        return `${base} translate-x-[1190px] scale-85 z-20 w-[180px] h-[560px]`;
      default:
        return "";
    }
  };

  return (
    <section className="relative h-[650px] bg-[#0B2458] overflow-hidden">
      <div className="max-w-[1600px] mx-auto h-full relative">
        <div className="absolute inset-0 flex items-center ">
          {slides.map((slide, i) => {
            const pos = getPosition(i);
            const isBig = showBigContent === i;
            const isVisible = visibleIndexes.includes(i);

            // ❌ hide leaving big card briefly
            if (leavingBig === i && pos !== 0) return null;

            // ❌ hide non-visible cards
            if (!isVisible) return null;

            return (
              <div
                key={i}
                onClick={() => !isBig && handleClick(i)}
                className={`absolute rounded-2xl overflow-hidden cursor-pointer ${positionStyles(
                  pos
                )}`}>
                {/* Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute inset-0 bg-blue-900/50" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  {isBig && pos === 0 ? (
                    <div className="animate-fadeIn">
                      <p className="text-sm opacity-80 mb-2">{slide.title}</p>
                      <h2 className="text-4xl font-semibold leading-tight mb-4">
                        {slide.heading}
                      </h2>
                      <p className="opacity-80 mb-4">{slide.desc}</p>
                      <button className="bg-white text-red-600 px-6 py-3 rounded-md font-semibold w-fit">
                        GET STARTED
                      </button>
                    </div>
                  ) : pos !== 0 ? (
                    <div className="w-full bg-black/30 p-4">
                      <p className="text-sm font-semibold tracking-wide">
                        {slide.title}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
