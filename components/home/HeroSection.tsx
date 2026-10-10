"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HeroOrbit, ServiceIcon } from "@/components/icons/Home/HeroIcons";
import type { HeroSectionData } from "@/types/home/home";

export default function HeroSection({ data }: { data: HeroSectionData }) {
  const { services } = data;
  const nodePositions = [
    "[left:50%] [top:13%]",
    "[left:85.7%] [top:32.6%]",
    "[left:85.7%] [top:74%]",
    "[left:50%] [top:96.5%]",
    "[left:14.3%] [top:74%]",
    "[left:14.3%] [top:32.6%]",
  ];
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion || services.length === 0) return;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % services.length),
      4000,
    );
    return () => window.clearInterval(timer);
  }, [reducedMotion, services.length]);

  const service = services[active];

  return (
    <section
      className="[background:#020d22] [color:#fff] [overflow:hidden] [font-family:var(--font-lexend),_sans-serif] hero-animation-scope"
      aria-labelledby="home-hero-title">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 items-center gap-12 px-12 pt-5 pb-8 min-[761px]:min-h-[calc(100svh-72px)] lg:min-h-[calc(100svh-90px)] xl:px-16 max-[1100px]:gap-8 max-[760px]:grid-cols-1 max-[760px]:gap-7 max-[760px]:px-6 max-[760px]:pt-8 max-[760px]:pb-12 max-[400px]:px-[18px]">
        <div className="min-[761px]:-translate-y-2 [padding-bottom:20px] [&_h1]:[font-size:clamp(32px,_3.4vw,_48px)] [&_h1]:[line-height:1.08] [&_h1]:[font-weight:600] [&_h1]:[letter-spacing:-0.8px] [&_h1]:[margin:0_0_16px] max-[1100px]:[padding-bottom:20px] max-[760px]:[padding-bottom:0] max-[760px]:[&_h1]:[font-size:clamp(30px,_7vw,_42px)]">
          <p className="[color:#00d2ef] [font-size:12px] [font-weight:600] [letter-spacing:2.3px] [margin:0_0_22px]">
            {data.eyebrow}
          </p>
          <h1 id="home-hero-title">
            {data.title[0]}
            <br />
            {data.title[1]}
          </h1>
          <p className="[max-width:510px] [color:#c4d1e5] [font-size:16px] [font-weight:400] [line-height:1.55] [margin:0] max-[1100px]:[font-size:14px] max-[760px]:[max-width:470px]">
            {data.description}
          </p>
          <div className="[display:flex] [flex-wrap:wrap] [gap:14px] [margin-top:28px] max-[400px]:[gap:10px]">
            <span className="[border-radius:999px] [padding:16px_24px] [font-size:14px] [font-weight:500] [line-height:1.2] [text-align:center]  [text-decoration:none] [color:white] [border:0] [background:linear-gradient(100deg,_#1fb28a,_#075be0)]  max-[1100px]:[font-size:12px] max-[1100px]:[padding:15px_18px] max-[400px]:[padding:13px_15px] max-[400px]:[font-size:11px]">
              {data.primaryAction.label}
            </span>
            <span className="[border-radius:999px] [padding:16px_24px] [font-size:14px] [font-weight:500] [line-height:1.2] [text-align:center]  [text-decoration:none] [color:#071731] [border:1px_solid_#cbd6e9] [background:white]  max-[1100px]:[font-size:12px] max-[1100px]:[padding:15px_18px] max-[400px]:[padding:13px_15px] max-[400px]:[font-size:11px]">
              {data.secondaryAction.label}
            </span>
          </div>
          <div className="[display:flex] [align-items:center] [gap:18px] [width:440px] [max-width:100%] [margin-top:48px] [padding:12px_24px] [border:1px_solid_transparent] [border-radius:18px] [background:linear-gradient(110deg,_#202637,_#092039)_padding-box,_linear-gradient(110deg,_#ee8b47,_#1fb28a,_#1685ff)_border-box] [&_strong]:[font-size:15px] [&_strong]:[font-weight:500] [&_p]:[margin:4px_0_0] [&_p]:[color:#c1cad8] [&_p]:[font-size:11px] [&_p]:[font-weight:400] [&_p]:[line-height:1.5] max-[1100px]:[gap:12px] max-[1100px]:[padding:12px_16px] max-[760px]:[margin-top:28px] max-[400px]:[padding:12px] max-[400px]:[&_strong]:[font-size:12px] max-[400px]:[&_p]:[font-size:9px]">
            <div className="flex shrink-0 items-center gap-2 border-r border-[#607383] pr-[18px] max-[400px]:gap-1 max-[400px]:pr-3">
              <Image
                src={data.marketplace.emblem}
                alt=""
                width={28}
                height={48}
                className="h-12 w-7 object-contain max-[400px]:h-9 max-[400px]:w-5"
              />
              <Image
                src={data.marketplace.logo}
                alt={
                  data.marketplace.brand +
                  " " +
                  data.marketplace.brandDescription
                }
                width={114}
                height={64}
                className="h-[54px] w-[102px] object-cover [filter:invert(1)_hue-rotate(180deg)_brightness(1.3)] mix-blend-screen max-[400px]:h-10 max-[400px]:w-[76px]"
              />
            </div>
            <div>
              <strong>{data.marketplace.title}</strong>
              <p>{data.marketplace.description}</p>
            </div>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-[528px] justify-self-center [container-type:inline-size] min-[761px]:w-[min(100%,528px,calc(100svh-134px))] min-[761px]:-translate-y-[18px] min-[761px]:-translate-x-2 max-[760px]:w-[min(100%,420px)] max-[760px]:mb-6 hero-orbit-visual">
          <div
            className={
              "[position:absolute] [border:0.189cqw_solid_#78aaff4d] [border-radius:189.205cqw] [padding:1.326cqw_2.273cqw] [display:flex] [align-items:center] [gap:1.136cqw] [background:#0a1e46a6] [color:#0085ff] [font-size:1.894cqw] [z-index:5] [white-space:nowrap] [&_i]:[width:1.326cqw] [&_i]:[height:1.326cqw] [&_i]:[border-radius:50%] [&_i]:[background:#21dba4] [&_i]:[box-shadow:0_0_1.705cqw_#21dba4]" +
              " " +
              "[top:3%] [left:-6%]"
            }>
            <i />
            {data.status.cluster}
          </div>
          <HeroOrbit services={services} active={active} />
          <div
            className="[position:absolute] [left:18%] [top:31%] [width:64%] [height:38%] [opacity:0.5] [border-radius:189.205cqw] [filter:blur(4.167cqw)] [background:conic-gradient(from_90deg,_#1fb28a,_#0a5be0,_#12c8f0,_#1fb28a)] hero-orbit-glow"
            aria-hidden="true"
          />
          {services.map((item, index) => (
            <div
              key={item.title}
              className={
                "[position:absolute] [width:24.621cqw] [transform:translate(-50%,_-50%)] [background:transparent] [border:0] [color:#cbd7ef] [display:flex] [flex-direction:column] [align-items:center] [gap:1.894cqw] [z-index:3] [padding:0]" +
                " " +
                nodePositions[index]
              }>
              <span
                data-active={active === index}
                className={
                  "hero-service-icon [&_svg]:w-[5.303cqw] [&_svg]:h-[5.303cqw] [width:10.985cqw] [height:10.985cqw] [display:grid] [place-items:center] [border-radius:3.409cqw] [border:0.189cqw_solid_#78aaff4d] [transition:background_0.45s,_box-shadow_0.45s,_color_0.45s,_transform_0.45s]" +
                  " " +
                  (active === index
                    ? "bg-[linear-gradient(140deg,#1fb28a,#0861d9)] text-white [transform:scale(1.12)] shadow-[0_0_0_1.136cqw_#12c8f01a,0_0_0_1.515cqw_#12c8f044,0_0_6.629cqw_#12c8f066]"
                    : "bg-[rgba(10,30,70,0.85)] text-[#8fb4ff]")
                }>
                <ServiceIcon name={item.icon} />
              </span>
              <span className="[font-size:2.083cqw] [line-height:1.25] [max-width:20.833cqw] [text-align:center]">
                {item.title}
              </span>
            </div>
          ))}
          <div
            className="[position:absolute] [z-index:4] [left:26%] [top:35%] [width:48%] [min-height:30%] [padding:3.409cqw_3.788cqw_3.03cqw] [border:0.189cqw_solid_#78aaff4d] [border-radius:4.545cqw] [background:linear-gradient(140deg,_#143867,_#071831)] [box-shadow:0_3.788cqw_8.523cqw_#0004] [&_h2]:[font-size:3.5cqw] [&_h2]:[color:#0085ff] [&_h2]:[font-weight:600] [&_h2]:[line-height:1.2] [&_h2]:[margin:0_0_1.894cqw]"
            aria-live="off"
            aria-atomic="true">
            <div key={active} className="hero-service-reveal">
              <p className="[color:#12c8f0] [font-size:2.083cqw] [font-weight:500] [letter-spacing:0.189cqw] [margin:0_0_1.515cqw]">
                {active + 1} / {services.length}
              </p>
              <h2>{service.title}</h2>
              <p className="[color:#b5c3df] [font-size:2.273cqw] [font-weight:400] [line-height:1.6] [margin:0]">
                {service.description}
              </p>
            </div>
            <div className="[height:0.568cqw] [border-radius:189.205cqw] [background:#12c8f025] [margin-top:2.273cqw] [overflow:hidden] [&_span]:[display:block] [&_span]:[height:100%] [&_span]:[background:linear-gradient(90deg,_#1fb28a,_#12c8f0)] [&_span]:[transform-origin:left] hero-progress-track">
              <span
                key={active + "-" + reducedMotion}
                className={reducedMotion ? "[animation:none]" : undefined}
              />
            </div>
          </div>
          <div
            className={
              "[position:absolute] [border:0.189cqw_solid_#78aaff4d] [border-radius:189.205cqw] [padding:1.326cqw_2.273cqw] [display:flex] [align-items:center] [gap:1.136cqw] [background:#0a1e46a6] [color:#0085ff] [font-size:1.894cqw] [z-index:5] [white-space:nowrap] [&_i]:[width:1.326cqw] [&_i]:[height:1.326cqw] [&_i]:[border-radius:50%] [&_i]:[background:#21dba4] [&_i]:[box-shadow:0_0_1.705cqw_#21dba4]" +
              " " +
              "[bottom:5%] [right:-6%]"
            }>
            <i />
            {data.status.uptime}
          </div>
        </div>
      </div>
    </section>
  );
}
