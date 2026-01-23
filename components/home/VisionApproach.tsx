"use client";

import { useEffect, useState } from "react";

export default function VisionApproach() {

  const positions = [
  // BIG (top)
  "top-8 left-1/2 -translate-x-1/2 scale-100 z-20",

  // SMALL (down-left)
  "bottom-0 left-[-60px] scale-75 z-10",

  // SMALL (down-right)
  "bottom-70 right-88 scale-75 z-10",
];

  const cards = [
    {
      id: 1,
      image: "/images/visionApproach/vision.webp",
      title: "Vision",
      desc: ["Evolution", "Leadership", "Sustainability"],
    },
    {
      id: 2,
      image: "/images/visionApproach/approach.webp",
      title: "Approach",
      desc: ["Precision", "1000+", "Discipline"],
    },
    {
      id: 3,
      image: "/images/visionApproach/mission.webp",
      title: "Mission",
      desc: ["Acceleration", "Transformation", "Empowerment"],
    },
  ];

  const [order, setOrder] = useState(cards);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  /* clockwise rotation */
const [offset, setOffset] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setOffset((o) => (o + 1) % 3);
  }, 3000);

  return () => clearInterval(interval);
}, []);
  /* text animation */
  useEffect(() => {
    const wait = setTimeout(() => {
      setAnimate(true);
      const anim = setTimeout(() => {
        setAnimate(false);
        setIndex((i) => (i + 1) % order[0].desc.length);
      }, 900);
      return () => clearTimeout(anim);
    }, 2000);
    return () => clearTimeout(wait);
  }, [index, order]);

  return (
    <section className="w-full py-24 font-lexend">
      <div className="mx-auto flex max-w-7xl items-center">
        {/* LEFT FIXED SPACE */}
        <div className="w-[520px] flex-shrink-0 flex justify-center">
          <div className="relative w-[420px] h-[360px]">
            {/* BIG TOP CARD */}
            <div className="absolute top-8 left-70 -translate-x-1/2">
              <div className="w-[286px] h-[286px] rounded-2xl bg-[#0B1F4A] p-6 text-white shadow-lg flex flex-col items-center">
                <div className="mb-6 flex h-[140px] w-[164px] items-center justify-center rounded-lg border-2 border-dashed border-blue-400">
                  <img
                    src={order[0].image}
                    className="h-22 w-22 object-contain "
                    alt=""
                  />
                </div>

                <h3 className="text-xl font-semibold">{order[0].title}</h3>

                <div className="relative mt-2 h-6 w-full overflow-hidden">
                  <p
                    className={`absolute top-0 w-full text-center text-sm text-blue-200
                    ${animate ? "animate-[slideUpOut_0.9s_ease-out_forwards]" : ""}`}>
                    {order[0].desc[index]}
                  </p>

                  <p
                    className={`absolute top-0 w-full text-center text-sm text-blue-200
                    ${animate ? "animate-[slideUpIn_0.9s_ease-out_forwards]" : "translate-y-full"}`}>
                    {order[0].desc[(index + 1) % order[0].desc.length]}
                  </p>
                </div>
              </div>
            </div>

            {/* SMALL RIGHT */}
            <div className="absolute bottom-70 right-88 ">
              <div className="w-[130px] h-[130px] rounded-xl bg-white shadow-md flex items-center justify-center">
                <img
                  src={order[1].image}
                  className={`w-24 h-24 object-contain rounded-lg border-2 border-dashed border-blue-400 p-2
    ${order[1].title === "Vision" ? "invert brightness-90" : ""}`}
                />
              </div>
            </div>

            {/* SMALL LEFT */}
            <div className="absolute bottom-0 left-[-60px] ">
              <div className="w-[130px] h-[130px] rounded-xl bg-white shadow-md flex items-center justify-center">
                <img
                  src={order[2].image}
                  className={`w-24 h-24 object-contain rounded-lg border-2 border-dashed border-blue-400 p-2
    ${order[2].title === "Vision" ? "invert brightness-90" : ""}`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 pl-16">
          <h2 className="text-4xl font-semibold text-[#0B1F4A]">
            Our Vision & Approach
          </h2>

          <p className="mt-6 max-w-xl text-gray-600 leading-relaxed">
            HawkStack Technologies helps organizations design, modernize, and
            run secure, scalable cloud-native platforms. We empower teams with
            strong architecture, automation-first practices, and hands-on
            engineering expertise. By combining DevOps, cloud, automation, and
            security, we deliver production-ready platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
