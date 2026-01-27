"use client";
import { useEffect, useState } from "react";
import { cards } from "@/constants/index";

export default function VisionApproach() {
  const [order, setOrder] = useState(cards);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const rotate = setInterval(() => {
      setOrder((p) => [p[1], p[0], p[2]]);
    }, 9000);
    return () => clearInterval(rotate);
  }, []);

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
      <div
        className="
          mx-auto max-w-7xl overflow-hidden
          flex flex-col-reverse md:flex-row
          items-center
          max-md:px-4
        "
      >
        {/* LEFT VISUAL */}
        <div
          className="
            w-[480px]
            flex-shrink-0
            flex
            justify-center
            origin-center

            md:scale-[0.88]
            lg:scale-[0.82]

            max-md:scale-[0.68]
            max-md:w-full
            max-md:mx-auto
            max-md:translate-x-[28px]
          "
        >
          <div className="relative w-[380px] h-[320px] overflow-visible">
            {/* BIG TOP CARD */}
            <div className="absolute top-8 left-45 -translate-x-1/2">
              <div className="w-[250px] h-[250px] rounded-2xl bg-[#0B1F4A] p-5 text-white shadow-lg flex flex-col items-center">
                <div className="mb-5 flex h-[120px] w-[145px] items-center justify-center rounded-lg border-2 border-dashed border-blue-400">
                  <img
                    src={order[0].image}
                    className="h-20 w-20 object-contain filter brightness-0 invert"
                    alt=""
                  />
                </div>

                <h3 className="text-lg font-semibold">
                  {order[0].title}
                </h3>

                <div className="relative mt-2 h-6 w-full overflow-hidden">
                  <p
                    className={`absolute top-0 w-full text-center text-sm text-blue-200
                      ${
                        animate
                          ? "animate-[slideUpOut_0.9s_ease-out_forwards]"
                          : ""
                      }`}
                  >
                    {order[0].desc[index]}
                  </p>

                  <p
                    className={`absolute top-0 w-full text-center text-sm text-blue-200
                      ${
                        animate
                          ? "animate-[slideUpIn_0.9s_ease-out_forwards]"
                          : "translate-y-full"
                      }`}
                  >
                    {
                      order[0].desc[
                        (index + 1) % order[0].desc.length
                      ]
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* SMALL RIGHT */}
            <div className="absolute bottom-65 left-[-60px]">
              <div className="w-[110px] h-[110px] rounded-xl bg-white shadow-md flex items-center justify-center">
                <div className="w-20 h-20 rounded-lg border-2 border-dashed border-blue-400 p-2 flex items-center justify-center">
                  <img
                    src={order[1].image}
                    className={`w-full h-full object-contain ${
                      order[1].title === "Vision"
                        ? "invert brightness-90"
                        : ""
                    }`}
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* SMALL LEFT */}
            <div className="absolute bottom-0 left-[-60px]">
              <div className="w-[110px] h-[110px] rounded-xl bg-white shadow-md flex items-center justify-center">
                <div className="w-20 h-20 rounded-lg border-2 border-dashed border-blue-400 p-2 flex items-center justify-center">
                  <img
                    src={order[2].image}
                    className={`w-full h-full object-contain ${
                      order[2].title === "Vision"
                        ? "invert brightness-90"
                        : ""
                    }`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT TEXT — UNTOUCHED */}
        <div className="flex-1  text-center md:text-left">
          <h2 className="text-4xl font-semibold text-[#0B1F4A]">
            Our Vision & Approach
          </h2>

          <p className="mt-6 max-w-xl text-gray-600 leading-relaxed mx-auto md:mx-0">
            HawkStack Technologies helps organizations design, modernize,
            and run secure, scalable cloud-native platforms. We empower
            teams with strong architecture, automation-first practices,
            and hands-on engineering expertise. By combining DevOps,
            cloud, automation, and security, we deliver production-ready
            platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
