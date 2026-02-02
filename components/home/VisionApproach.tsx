"use client";
import { useEffect, useState } from "react";
import { cards } from "@/constants";

const POSITIONS = [
  // CENTER
  {
    wrapper: "z-10",
    card: "w-[261px] h-[261px] bg-[#0B1F4A] text-white",
    imgBox:
      "mb-5 flex h-[120px] w-[145px] items-center justify-center rounded-lg border-2 border-dashed border-blue-400",
    img: "h-20 w-20 filter brightness-0 invert",
  },
  // TOP LEFT
  {
    wrapper: "absolute top-8 left-[-120px]",
    card: "w-[172px] h-[172px] bg-white",
    imgBox:
      "w-20 h-20 rounded-lg border-2 border-dashed border-blue-400 p-2",
    img: "w-full h-full",
  },
  // BOTTOM LEFT
  {
    wrapper: "absolute bottom-8 left-[-120px]",
    card: "w-[172px] h-[172px] bg-white",
    imgBox:
      "w-20 h-20 rounded-lg border-2 border-dashed border-blue-400 p-2",
    img: "w-full h-full",
  },
];

export default function VisionApproach() {
  const [order, setOrder] = useState(() => [...cards]);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  // rotate cards (positions)
  useEffect(() => {
    const rotate = setInterval(() => {
      setOrder((p) => [p[1], p[2], p[0]]);
      setIndex(0);
    }, 9000);

    return () => clearInterval(rotate);
  }, []);

  // text animation
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
    <section className="w-full py-8 font-lexend">
      <div className="mx-auto max-w-[1411px] flex flex-col-reverse md:flex-row items-center max-md:px-4">
        {/* LEFT VISUAL */}
        <div className="w-[620px] ml-[40px] flex-shrink-0 flex justify-center origin-center md:scale-[0.88] lg:scale-[0.82] max-md:scale-[0.68] max-md:w-full max-md:mx-auto max-md:translate-x-[28px]">
          <div className="relative w-[380px] h-[500px] flex items-center justify-center">
            {order.map((card, i) => {
              const p = POSITIONS[i];

              return (
                <div key={card.title} className={p.wrapper}>
                  <div
                    className={`rounded-xl shadow-md border border-gray-100 flex flex-col items-center justify-center p-5 ${p.card}`}
                  >
                    <div className={p.imgBox}>
                      <img
                        src={card.image}
                        alt=""
                        className={`object-contain ${p.img} ${
                          card.title === "Vision" && i !== 0
                            ? "invert brightness-90"
                            : ""
                        }`}
                      />
                    </div>

                    {i === 0 && (
                      <>
                        <h3 className="text-lg font-semibold mt-2">
                          {card.title}
                        </h3>

                        <div className="relative mt-2 h-6 w-full overflow-hidden">
                          <p
                            className={`absolute top-0 w-full text-center text-sm text-blue-200 ${
                              animate
                                ? "animate-[slideUpOut_0.9s_ease-out_forwards]"
                                : ""
                            }`}
                          >
                            {card.desc[index]}
                          </p>

                          <p
                            className={`absolute top-0 w-full text-center text-sm text-blue-200 ${
                              animate
                                ? "animate-[slideUpIn_0.9s_ease-out_forwards]"
                                : "translate-y-full"
                            }`}
                          >
                            {
                              card.desc[
                                (index + 1) % card.desc.length
                              ]
                            }
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="flex-1 text-center md:text-justify">
          <h2 className="text-[40px] font-semibold text-[#213174]">
            Our Vision & Approach
          </h2>

          <p className="mt-2 text-[16px] max-w-[640px] text-[#212121] leading-relaxed mx-auto md:mx-0">
             HawkStack Technologies helps organizations design, modernize, and run secure, scalable cloud-native 
             platforms. We empower teams with strong architecture, automation-first practices, and hands-on engineering 
             expertise. By combining DevOps, cloud, automation, and security, we deliver production-ready Kubernetes and 
             OpenShift platforms, simplify operations with GitOps, and drive faster delivery, higher reliability, and 
             sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
}
