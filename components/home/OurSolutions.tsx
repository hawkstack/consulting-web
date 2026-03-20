"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  {
    title: "CNCF",
    heading: "CNCF",
    desc: "Built on open standards and cloud-native best practices, aligned with the global ecosystem shaping Kubernetes and modern platforms.",
    image: "/images/oursolution/Cncf.webp",
  },
  {
    title: "Mirantis",
    heading: "Mirantis",
    desc: "Power cloud-native platforms and container operations, designed for enterprise Kubernetes, OpenStack, and platform engineering teams.",
    image: "/images/oursolution/Mirantis.webp",
  },
  {
    title: "Openshift",
    heading: "Openshift",
    desc: "Run, scale, and secure containerized applications with enterprise Kubernetes built for DevSecOps, automation, and hybrid cloud environments.",
    image: "/images/oursolution/Openshift.webp",
  },
  {
    title: "Openstack",
    heading: "Openstack",
    desc: "Create and manage private clouds at scale with full control over compute, storage, and networking for modern infrastructure.",
    image: "/images/oursolution/Openstack.webp",
  },
  {
    title: "RHEL",
    heading: "RHEL",
    desc: "Build a stable, secure enterprise Linux foundation optimized for performance, compliance, and long-term production workloads.",
    image: "/images/oursolution/Rhel.webp",
  },
  {
    title: "Ansible",
    heading: "Ansible",
    desc: "Automate everything with confidence—from infrastructure provisioning to application deployment, fast, repeatable, and agentless.",
    image: "/images/oursolution/Ansible.webp",
  },
];

const AUTO_DELAY = 5000;
const CONTENT_DELAY = 700;
const RELEASE_DELAY = 300;
const getVisibleCount = () => {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth < 768) return 2; // mobile
  if (window.innerWidth < 1280) return 2; // tablet
  return 4; // desktop
};

export default function OurSolutions() {
  const [active, setActive] = useState(0);
  const [showBigContent, setShowBigContent] = useState(0);
  const [leavingBig, setLeavingBig] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

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
    const update = () => setVisibleCount(getVisibleCount());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  const handleClick = (index: number) => {
    if (index === active) return;
    setLeavingBig(active);
    setActive(index);
    startAuto();
  };

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

  const getPosition = (index: number) =>
    (index - active + slides.length) % slides.length;

  const orderedIndexes = slides
    .map((_, i) => i)
    .sort((a, b) => getPosition(a) - getPosition(b));

  const visibleIndexes = orderedIndexes.slice(0, visibleCount);

  const positionStyles = (pos: number) => {
    const base =
      "transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] absolute";

    /* ---------------- MOBILE ---------------- */
    if (visibleCount === 2) {
      switch (pos) {
        case 0:
          return `${base}
        left-[40%] 
        top-1/2 -translate-x-1/2 -translate-y-1/2
        scale-100 z-50
        w-[70vw] sm:w-[62vw]
        max-w-[520px]
        h-[420px]`;

        case 1:
          return `${base}
        left-[77%] 
        top-1/2 -translate-y-1/2
        scale-90 z-40
        w-[80px] sm:w-[170px]
        h-[468px]`;

        default:
          return "hidden";
      }
    }
    /* ---------------- TABLET / IPAD ---------------- */
    if (visibleCount === 2) {
      switch (pos) {
        case 0:
          return `${base} 
          left-[45%] top-1/2 -translate-y-1/2 -translate-x-1/2
          scale-100 z-50 
          w-[62vw] max-w-[560px] h-[440px]`;

        case 1:
          return `${base} 
          left-[78%] top-1/2 -translate-y-1/2
          scale-90 z-40 
          w-[170px] h-[460px]`;

        default:
          return "hidden";
      }
    }

    /* ---------------- DESKTOP ---------------- */
    switch (pos) {
      case 0:
        return `${base} 
      left-8 top-1/2 -translate-y-1/2
      scale-100 z-50 
      w-[800px] h-[480px]`;

      case 1:
        return `${base} 
      left-[840px] top-1/2 -translate-y-1/2
      scale-95 z-40 
      w-[180px] h-[500px]`;

      case 2:
        return `${base} 
      left-[1020px] top-1/2 -translate-y-1/2
      scale-90 z-30 
      w-[180px] h-[530px]`;

      case 3:
        return `${base} 
      left-[1190px] top-1/2 -translate-y-1/2
      scale-85 z-20 
      w-[180px] h-[560px]`;

      default:
        return "";
    }
  };

  return (
    <section className="relative h-[700px] font-lexend bg-[black] overflow-hidden">
      <div className="text-white flex flex-col items-center justify-center mt-10">
        <h1 className="text-[40px] justify-center">Our Solution</h1>
        <div>
          <p className="text-center px-4 sm:px-6 md:px-0 max-w-[90%] sm:max-w-[520px] md:max-w-none mx-auto text-sm sm:text-base">
            End-to-end cloud and DevOps solutions tailored for modern enterprise
            needs.
          </p>
        </div>
      </div>
      <div className="max-w-[1600px] mt-[-60] mx-auto h-full relative px-4 md:px-6 lg:px-0 overflow-visible md:overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {slides.map((slide, i) => {
            const pos = getPosition(i);
            const isBig = showBigContent === i;
            const isVisible = visibleIndexes.includes(i);

            if (leavingBig === i && pos !== 0) return null;
            if (!isVisible) return null;

            return (
              <div
                key={i}
                onClick={() => !isBig && handleClick(i)}
                className={`absolute rounded-2xl overflow-hidden cursor-pointer ${positionStyles(
                  pos,
                )}`}>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute inset-0 bg-blue/20" />

                <div className="relative z-10 h-full flex flex-col justify-end p-4 md:p-6 text-white">
                  {isBig && pos === 0 ? (
                    <div className="animate-fadeIn bg-black/50 px-8 py-2 rounded-2xl">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-3">
                        {slide.heading}
                      </h2>
                      <p className="opacity-80 mb-2 text-xs md:text-sm lg:text-base">
                        {slide.desc}
                      </p>
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
