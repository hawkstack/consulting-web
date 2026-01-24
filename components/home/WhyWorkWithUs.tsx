"use client";

import Image from "next/image";
import { JSX, useState } from "react";
import classNames from "classnames";

type Solution = {
  icon: string;
  title: string;
  subtitle: string;
};

type WhyWorkWithUsProps = {
  title: string;
  description: string;
  solutions: Solution[];
};

const WhyWorkWithUs = ({
  title,
  description,
  solutions,
}: WhyWorkWithUsProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full font-lexend px-4 md:px-12 py-12 bg-[#000C27] bg-[linear-gradient(180deg,rgba(26,38,52,0)_0%,rgba(26,38,52,0.4)_100%)]">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-[2.5rem] text-white font-medium mb-2">
          {title}
        </h2>
        <p className="text-sm md:text-base text-white/80">
          {description}
        </p>
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <div
            key={solution.title}
            className={classNames("px-6", {
              "border-r border-white/30":
                index !== solutions.length - 1,
            })}
          >
            <div className="text-center">
              {/* RESPONSIVE ICON */}
              <Image
                src={solution.icon}
                alt={solution.title}
                width={88}
                height={78}
                className="mx-auto mb-4"
              />
              <h3 className="text-white text-base font-medium mb-2">
                {solution.title}
              </h3>
              <p className="text-sm text-white/70 w-2/3 mx-auto">
                {solution.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden relative mt-8">

        {/* LEFT GLOW */}
        <div className="absolute left-2 top-3 bottom-3 w-[2px] rounded-full
          bg-gradient-to-b from-blue-500/0 via-blue-500/60 to-blue-500/0
          shadow-[0_0_18px_rgba(59,130,246,0.8)]"
        />

        {/* RIGHT GLOW */}
        <div className="absolute right-2 top-3 bottom-3 w-[2px] rounded-full
          bg-gradient-to-b from-blue-500/0 via-blue-500/60 to-blue-500/0
          shadow-[0_0_18px_rgba(59,130,246,0.8)]"
        />

        <div className="space-y-6 px-6">
          {solutions.map((solution, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={solution.title}>
                
                {/* MENU CARD */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between rounded-2xl px-5 py-5
                  bg-white shadow-[0_0_24px_rgba(59,130,246,0.45)]"
                >
                  {/* LOCKED TEXT SIZE */}
                  <span className="text-base font-medium text-black">
                    {solution.title}
                  </span>

                  <span className="text-xl font-medium text-black">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* CONTENT */}
                {isOpen && (
                  <div
                    className="mt-4 bg-[#F5F5F5] rounded-2xl px-5 py-5 
                    flex items-center justify-between shadow-xl"
                  >
                    <p className="text-sm text-black w-3/4 leading-relaxed">
                      {solution.subtitle}
                    </p>

                    <div className="bg-[#0A1633] p-3 rounded-xl shrink-0">
                      <Image
                        src={solution.icon}
                        alt={solution.title}
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
