import Image from "next/image";

type DeliverItem = {
  title: string;
  desc: string;
  logo: string;
};

const deliverItems: DeliverItem[] = [
  {
    title: "App Modernization",
    desc: "Modernize legacy apps into scalable, cloud-native, API-first systems.",
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

export default function WhatWeDeliver() {
  return (
    <section className="bg-gradient-to-b from-black to-[#04092E] py-[clamp(4rem,8vw,7rem)]">
      <div className="max-w-[1750px] mx-auto px-[clamp(1rem,4vw,2.5rem)]">

        {/* ================= HEADING ================= */}
        <div className="text-center max-w-4xl mx-auto mb-[clamp(3rem,6vw,5rem)]">
          <h2 className="font-lexend text-white text-[clamp(2.2rem,5vw,3.2rem)]">
            What We Deliver
          </h2>
          <p className="mt-4 text-[#C7D2E2] text-[clamp(1rem,2.5vw,1.15rem)]">
            End-to-end cloud and DevOps solutions tailored for modern enterprise needs.
          </p>
        </div>

        {/* ================= MOBILE ONLY ================= */}
        <div className="block sm:hidden space-y-6">
          <div className="rounded-2xl px-[clamp(1.25rem,6vw,1.75rem)] py-[clamp(1.5rem,7vw,2rem)] bg-gradient-to-b from-[#0F172B] to-[#1D293D] border border-[#2E85FF]/80">
            <div className="flex flex-col">
              <div className="w-[clamp(3rem,14vw,3.75rem)] h-[clamp(3rem,14vw,3.75rem)] rounded-xl bg-[#1D293D]/60 border border-[#314158]/50 flex items-center justify-center mb-5">
                <Image
                  src={deliverItems[0].logo}
                  alt={deliverItems[0].title}
                  width={26}
                  height={26}
                />
              </div>

              <h3 className="font-poppins font-semibold text-white text-[clamp(1.2rem,5vw,1.45rem)] mb-3">
                {deliverItems[0].title}
              </h3>

              <p className="font-poppins text-[#9FB0C8] text-[clamp(0.95rem,4.5vw,1.05rem)] leading-relaxed">
                {deliverItems[0].desc}
              </p>
            </div>
          </div>

          <button className="w-full rounded-full py-[clamp(1rem,5vw,1.25rem)] px-6 bg-[#1D293D]/70 border border-[#2E85FF]/60 font-poppins text-white text-[clamp(0.95rem,4.5vw,1.05rem)] flex items-center justify-between shadow-[0_0_30px_rgba(46,133,255,0.35)]">
            Know more
            <span className="text-[#2E85FF] text-3xl">→</span>
          </button>
        </div>

        {/* ================= TABLET → DESKTOP GRID ================= */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-36 xl:relative">
          {deliverItems.map((item, index) => (
            <div
              key={index}
              className="
                 group
    min-h-[165px]
    rounded-2xl
    px-[clamp(1.5rem,3vw,2.25rem)]
    py-[clamp(1.75rem,3.5vw,2.5rem)]

    sm:border sm:border-[#2E85FF]
    sm:shadow-[0_0_45px_rgba(46,133,255,0.45)]
    sm:bg-gradient-to-br sm:from-[#0C1429] sm:to-[#182444]

    md:border md:border-[#2E85FF]
    md:shadow-[0_0_45px_rgba(46,133,255,0.45)]
    md:bg-gradient-to-br md:from-[#0C1429] md:to-[#182444]

    lg:border lg:border-[#2E85FF]
    lg:shadow-[0_0_45px_rgba(46,133,255,0.45)]
    lg:bg-gradient-to-br lg:from-[#0C1429] lg:to-[#182444]

    /* ===== DESKTOP ONLY (xl+) ===== */
    xl:border-white/10
    xl:bg-gradient-to-b xl:from-[#0F172B] xl:to-[#1D293D]
    xl:h-[350px]

    /* ✅ FIX: DOWNWARD EXPANSION WITHOUT GRID SHIFT */
    xl:relative
    xl:origin-top
    xl:transition-all xl:duration-300 xl:ease-out
    xl:hover:scale-y-[1.10]

    xl:hover:border-[#2E85FF]/100
    xl:hover:shadow-[0_22px_50px_-15px_rgba(46,133,255,0.45)]
              "
            >
              <div className="flex flex-col h-full">

                {/* Icon */}
                <div
                  className="
                   w-[clamp(3rem,4vw,3.75rem)]
    h-[clamp(3rem,4vw,3.75rem)]
    rounded-xl
    bg-[#1D293D]/60
    border border-[#314158]/50
    flex items-center justify-center
    mb-6
    shrink-0

    transition-none
    transform-none
                  "
                >
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={30}
                    height={30}
                  />
                </div>

                {/* Content */}
                <div className=" flex-grow
    transition-all duration-500 ease-out

    /* ===== DESKTOP DEFAULT (place content at footer aligned to icon) ===== */
    xl:absolute
    xl:left-[clamp(1.5rem,3vw,2.25rem)]
    xl:right-[clamp(1.5rem,3vw,2.25rem)]
    xl:bottom-[4.75rem]

    /* ===== HOVER → MOVE BACK TO ORIGINAL POSITION ===== */
    xl:group-hover:static
    xl:group-hover:translate-y-0">
                  <h3 className="font-lexend
    
    text-white
    mt-4

    /* Default size */
    text-[2rem]

   
    /* Desktop hover: slightly smaller text */
    xl:group-hover:text-[1.5rem]">
                    {item.title}
                  </h3>

                  {/* BEFORE & AFTER HOVER DESCRIPTION */}
                  <p
                    className="
                      text-[#9FB0C8]
    leading-relaxed
    overflow-hidden
    

    /* ===== TABLET & iPAD (sm → lg) ===== */
    sm:max-h-none
    sm:text-[clamp(1rem,1.6vw,1.15rem)]
    sm:mt-0

    /* ===== DESKTOP / LAPTOP (xl+) ===== */
    xl:text-[clamp(1.15rem,1.2vw,1.3rem)]
    xl:max-h-[1.6em]
    xl:display-none;
    xl:group-hover:display-block;
    xl:group-hover:max-h-[10rem]"
                  >
                    {item.desc}
                  </p>
                </div>

                {/* FOOTER – ONLY ON HOVER */}
                <div
                  className="
                        pt-6
    xl:mt-0

    /* Tablet + ALL iPads */
    sm:opacity-100
    md:opacity-100
    lg:opacity-100

    /* Desktop only */
    // xl:opacity-0
    // xl:group-hover:opacity-100

    transition-opacity duration-300

                  "
                >
                  <div className="h-px w-full bg-[#90A1B9]/40 " />
                  <div className="flex items-center justify-between">
                    <span className="text-white
    text-[clamp(0.9rem,1.2vw,1rem)]
    xl:text-[1.5rem]">
                      Know more
                    </span>
                    <span className="text-[#2E85FF]
    text-[clamp(1.25rem,2vw,1.6rem)]
    xl:text-[3rem]">
                      →
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
