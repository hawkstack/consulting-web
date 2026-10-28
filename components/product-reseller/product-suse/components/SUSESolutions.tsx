import type { SuseSolutionIcon } from "../types/suseSolutions";
import { suseSolutions } from "../data/suseSolutions";

const iconPaths: Record<SuseSolutionIcon, string> = {
  layers: "m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5",
  network: "M9 3h6v6H9zM3 16h6v6H3zM15 16h6v6h-6zM12 9v4M6 16v-3h12v3",
  server: "M3 3h18v7H3zM3 14h18v7H3zM7 6h1M7 17h1",
  shield: "m12 3 7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3Zm-3 9 2 2 4-5",
  sliders: "M3 6h8m4 0h6M3 12h3m4 0h11M3 18h11m4 0h3M11 3v6M6 9v6m8 0v6",
  eye: "M8 4H5v3m11-3h3v3M5 17v3h3m11-3v3h-3M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Zm13 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
};

export default function SUSESolutions() {
  return (
    <section
      id="suse-solutions"
      aria-labelledby="suse-solutions-heading"
      className="scroll-mt-24 bg-[#f4f9f6] text-[#162b28]"
    >
      <div className="mx-auto max-w-[1230px] px-6 py-8 sm:px-9 lg:px-10 xl:px-8">
        <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[#008c45]">
          Our solutions
        </p>
        <h2
          id="suse-solutions-heading"
          className="mt-3 text-[clamp(28px,2.8vw,36px)] font-bold leading-[1.2] tracking-[-0.025em]"
        >
          Open foundations. Greater possibilities.
        </h2>
        <p className="mt-3 max-w-[850px] text-[15px] leading-[1.65] text-[#5b756d]">
          Connect your Linux, Kubernetes, and virtualization strategy with SUSE
          solutions designed for flexibility across data centers, cloud, and
          edge environments.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {suseSolutions.map((solution) => (
            <article
              key={solution.name}
              className="flex min-w-0 flex-col rounded-xl lg:min-h-[170px] border border-[#d7e3dc] bg-white p-[18px]"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#eaf5ef] text-[#14965c]">
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={iconPaths[solution.icon]} />
                  </svg>
                </span>
                <h3 className="text-[15px] font-semibold leading-snug">
                  {solution.name}
                </h3>
              </div>
              <p className="mb-2.5 mt-3 text-[13px] leading-[1.55] text-[#5b756d]">
                {solution.description}
              </p>
              <a
                href={solution.href}
                aria-label={`Explore ${solution.name}`}
                className="mt-auto border-t border-[#d7e3dc] pt-3 text-[12px] font-medium text-[#008c45] transition-colors hover:text-[#005c2e] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#008c45]"
              >
                Explore Product <span aria-hidden="true">&rarr;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
