import type { HeroSectionData } from "@/types/home/home";

export function ServiceIcon({ name }: { name: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round">
      {name === "server" && (
        <>
          <rect x="4" y="4" width="20" height="7" rx="1.7" />
          <rect x="4" y="14" width="20" height="7" rx="1.7" />
          <path d="M8 7.5h.1M8 17.5h.1M14 24v1M10 25h8" />
        </>
      )}
      {name === "refresh" && (
        <>
          <path d="M23 12a9 9 0 0 0-15-5L5 10M5 5v5h5M5 16a9 9 0 0 0 15 5l3-3M23 23v-5h-5" />
        </>
      )}
      {name === "shield" && (
        <>
          <path d="m14 4 9 3.5V14c0 5.5-4 9-9 10-5-1-9-4.5-9-10V7.5L14 4Z" />
          <path d="m10.5 14 2.5 2.5 4.5-4.5" />
        </>
      )}
      {name === "cube" && (
        <>
          <path d="m14 4 9 5v10l-9 5-9-5V9l9-5Z" />
          <path d="m5 9 9 5 9-5M14 14v10" />
        </>
      )}
      {name === "chat" && (
        <>
          <path d="M5 5h18v14H12l-7 5V5Z" />
          <path d="M9 9h10M9 13h7" />
        </>
      )}
      {name === "cap" && (
        <>
          <path d="m3 10 11-5 11 5-11 5-11-5ZM7 12v6c0 4 14 4 14 0v-6M25 10v8" />
        </>
      )}
    </svg>
  );
}


export function HeroOrbit({ services, active }: { services: HeroSectionData["services"]; active: number }) {
 return (
<svg
            className={"[position:absolute] [inset:0] [width:100%] [height:100%]"}
            viewBox="0 0 528 528"
            fill="none"
            aria-hidden="true">
            <circle
              className={"[transform-origin:264px_264px] hero-orbit-outer"}
              cx="264"
              cy="264"
              r="263"
              stroke="#78AAFF"
              strokeOpacity=".18"
              strokeWidth="1.43"
              strokeDasharray="34.32 17.16"
            />
            <circle
              className={"[transform-origin:264px_264px] hero-orbit-inner"}
              cx="264"
              cy="264"
              r="217.36"
              stroke="#78AAFF"
              strokeOpacity=".35"
              strokeWidth="1.43"
              strokeDasharray="5.72 11.44"
            />
            <circle
              cx="264"
              cy="264"
              r="127"
              stroke="#78AAFF"
              strokeOpacity=".25"
            />
            {services.map((item, index) => {
              const angle = ((index * 60 - 90) * Math.PI) / 180;
              return (
                <line
                  key={item.title}
                  x1="264"
                  y1="264"
                  x2={264 + Math.cos(angle) * 217}
                  y2={264 + Math.sin(angle) * 217}
                  stroke={index === active ? "#12C8F0" : "#78AAFF"}
                  strokeOpacity={index === active ? 1 : 0.17}
                  strokeWidth={index === active ? 2 : 1}
                  strokeDasharray={index === active ? "7 8" : undefined}
                  className={index === active ? "hero-orbit-line" : undefined}
                />
              );
            })}

            <g className="hero-orbit-particle-cyan">
              <circle cx="264" cy="47" r="4.5" fill="#12C8F0" />
            </g>
            <g className="hero-orbit-particle-green">
              <circle cx="264" cy="481" r="3.5" fill="#1FB28A" />
            </g>
            <g className="hero-orbit-particle-inner">
              <circle cx="264" cy="137" r="3" fill="#12C8F0" fillOpacity=".8" />
              <circle cx="264" cy="391" r="2.5" fill="#B9D6FF" fillOpacity=".7" />
            </g>
          </svg>
 );
}
