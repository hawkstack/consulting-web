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
    heading: "Business-ready OpenStack for enterprises",
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
    desc: "Create and manage private clouds at scale with full control overcompute, storage, and networking for modern infrastructure.",
    image: "/images/oursolution/Openstack.webp",
  },
  {
    title: "RHEL",
    heading: "RHEL",
    desc: "Build a stable, secure enterprise Linux foundation optimized for performance, compliance, and long-term production workloads.",
    image: "/images/oursolution/Rhel.webp",
  },
  {
    title: "Anisble",
    heading: "Anisble",
    desc: "Automate everything with confidence—from infrastructure provisioning to application deployment, fast, repeatable, and agentless.",
    image: "/images/oursolution/Ansible.webp",
  },
];

const AUTO_DELAY = 5000;
const CONTENT_DELAY = 700;
const RELEASE_DELAY = 300;
const VISIBLE_COUNT = 4;

export default function OurSolutions() {
  const [active, setActive] = useState(0);
  const [showBigContent, setShowBigContent] = useState(0);
  const [leavingBig, setLeavingBig] = useState<number | null>(null);

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

  const visibleIndexes = orderedIndexes.slice(0, VISIBLE_COUNT);

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
    <section className="relative h-[700px] font-lexend bg-[black] overflow-hidden">
      <div className="text-white flex flex-col items-center justify-center mt-10">
        <h1 className="text-[40px]">Our Solution</h1>
        <div>
          <p>
            End-to-end cloud and DevOps solutions tailored for modern enterprise
            needs.
          </p>
        </div>
      </div>
      <div className="max-w-[1600px] mt-[-60] mx-auto h-full relative">
        <div className="absolute inset-0 flex items-center">
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
                  pos
                )}`}>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute inset-0 bg-blue/20" />

                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  {isBig && pos === 0 ? (
                    <div className="animate-fadeIn bg-black/50 px-8 py-2 rounded-2xl">
                      <h2 className="text-4xl font-semibold leading-tight mb-4">
                        {slide.heading}
                      </h2>
                      <p className="opacity-80 mb-4">{slide.desc}</p>
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
