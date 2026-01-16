import Image from "next/image";

type DeliverItem = {
  title: string;
  desc: string;
  logo: string;
};

const deliverItems: DeliverItem[] = [
  {
    title: "App Modernization",
    desc: "We modernize applications using cloud-native technologies.",
    logo: "/icons/app-modernization.svg",
  },
  {
    title: "KubeVirt",
    desc: "We help you unify VMs and containers on a single platform.",
    logo: "/icons/Kubevirt.svg",
  },
  {
    title: "Cloud Platform Operations",
    desc: "We manage, optimize and support enterprise cloud platforms.",
    logo: "/icons/cloud-ops.svg",
  },
  {
    title: "Automation",
    desc: "We design and implement automation for faster delivery.",
    logo: "/icons/automation.svg",
  },
  {
    title: "Consulting Service",
    desc: "We guide enterprises through complex cloud journeys.",
    logo: "/icons/consulting.svg",
  },
  {
    title: "Kubernetes as a Service (KaaS)",
    desc: "We modernize applications using managed Kubernetes platforms.",
    logo: "/icons/Kubevirt.svg",
  },
];

export default function WhatWeDeliver(): JSX.Element {
  return (
    <section className="h-[837px] pt-24 bg-gradient-to-b from-[#000000] to-[#04092E]">
      {/* Heading */}
      <div className="max-w-[1200px] mx-auto text-center mb-20 px-4">
        <h2 className="font-lexend text-[40px] font-normal leading-[150%] tracking-[-0.03em] text-[#FFFFFF] mb-[-10]">
          What We Deliver
        </h2>

        <p className="font-lexend text-[16px] font-normal leading-[125%] tracking-[0] text-center max-w-[720px] mx-auto text-[#FFFFFF] mb-[70]">
          End-to-end cloud and DevOps solutions tailored for modern enterprise
          needs.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-[1300px] mx-auto px-4 grid grid-cols-3 gap-x-[10px] gap-y-[75px]">
        {deliverItems.map((item, index) => (
          <div
            key={index}
            className="
              group
              w-[406px] h-[247px]
              transition-transform duration-300 ease-in-out
              hover:scale-y-[1.19]
              origin-top
              rounded-[16px] p-8
              bg-gradient-to-b from-[#0F172B] to-[#1D293D]
              border border-white/10 backdrop-blur-md
            "
          >
            {/*INNER WRAPPER (ANTI-STRETCH FIX) */}
            <div
              className="
                transition-transform duration-300 ease-in-out
                group-hover:scale-y-[0.877]
                origin-top
              "
            >
              {/* ICON */}
              <div className="w-[56px] h-[56px] rounded-[14px] bg-[#1D293D]/50 border border-[#314158]/50 flex items-center justify-center mb-6 ml-[20] mt-[20]">
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="font-lexend text-[24px] font-medium leading-[27px] tracking-[-0.44px] mb-3 mx-[25] text-[#FFFFFF]">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="font-lexend text-[16px] font-medium leading-[27px] tracking-[-0.44px] mx-[25] text-[#90A1B9] overflow-hidden line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
                {item.desc}
              </p>

              {/* LINE + KNOW MORE (ON HOVER) */}
              <div className="mx-[25] mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-[342px] h-[1px] bg-[#90A1B9] my-6" />

                <div className="flex items-center justify-between mt-[10]">
                  <span className="font-lexend text-[16px] text-[#FFFFFF]">
                    Know more
                  </span>

                  <span className="inline-flex items-center justify-center w-[19px] h-[25px] text-[35px] leading-[24.92px] text-[#2E85FF] mr-[20px]">
                    →
                  </span>
                </div>
              </div>
            </div>
            {/* END INNER WRAPPER */}
          </div>
        ))}
      </div>
    </section>
  );
}
