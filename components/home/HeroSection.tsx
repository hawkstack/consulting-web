"use client";

import { useEffect, useState } from "react";
import { HeroOrbit, ServiceIcon } from "@/components/icons/Home/HeroIcons";
import type { HeroSectionData } from "@/types/home/home";

export default function HeroSection({ data }: { data: HeroSectionData }) {
  const { services } = data;
  const nodePositions = [
    "[left:50%] [top:12%]",
    "[left:85.7%] [top:32.6%]",
    "[left:85.7%] [top:74%]",
    "[left:50%] [top:94.5%]",
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
      <div className="[max-width:1440px] [margin:auto] [padding:36px_64px] [display:grid] [grid-template-columns:1fr_1fr] [gap:60px] [align-items:center] [min-height:590px] min-[1440px]:[min-height:650px] max-[1100px]:[padding:36px_48px_50px] max-[1100px]:[gap:45px] max-[1100px]:[min-height:510px] max-[760px]:[grid-template-columns:1fr] max-[760px]:[padding:40px_24px_60px] max-[760px]:[gap:30px] max-[400px]:[padding-inline:18px]">
        <div className="[padding-bottom:50px] [&_h1]:[font-size:clamp(32px,_3.35vw,_48px)] [&_h1]:[line-height:1.08] [&_h1]:[font-weight:600] [&_h1]:[letter-spacing:-0.8px] [&_h1]:[margin:0_0_18px] max-[1100px]:[padding-bottom:20px] max-[760px]:[padding-bottom:0] max-[760px]:[&_h1]:[font-size:clamp(30px,_7vw,_42px)]">
          <p className="[color:#00d2ef] [font-size:12px] [font-weight:600] [letter-spacing:2.3px] [margin:0_0_22px]">
            {data.eyebrow}
          </p>
          <h1 id="home-hero-title">
            {data.title[0]}
            <br />
            {data.title[1]}
          </h1>
          <p className="[max-width:510px] [color:#c4d1e5] [font-size:16px] [line-height:1.55] [margin:0] max-[1100px]:[font-size:14px] max-[760px]:[max-width:470px]">
            {data.description}
          </p>
          <div className="[display:flex] [flex-wrap:wrap] [gap:14px] [margin-top:28px] max-[400px]:[gap:10px]">
            <span
              className="[border-radius:999px] [padding:17px_22px] [font-size:14px] [font-weight:500] [line-height:1.2] [text-align:center]  [text-decoration:none] [color:white] [border:0] [background:linear-gradient(100deg,_#1fb28a,_#075be0)]  max-[1100px]:[font-size:12px] max-[1100px]:[padding:15px_18px] max-[400px]:[padding:13px_15px] max-[400px]:[font-size:11px]">
              {data.primaryAction.label}
            </span>
            <span
              className="[border-radius:999px] [padding:17px_22px] [font-size:14px] [font-weight:500] [line-height:1.2] [text-align:center]  [text-decoration:none] [color:#071731] [border:1px_solid_#cbd6e9] [background:white]  max-[1100px]:[font-size:12px] max-[1100px]:[padding:15px_18px] max-[400px]:[padding:13px_15px] max-[400px]:[font-size:11px]">
              {data.secondaryAction.label}
            </span>
          </div>
          <div className="[display:flex] [align-items:center] [gap:18px] [width:fit-content] [max-width:100%] [margin-top:50px] [padding:14px_20px] [border:1px_solid_transparent] [border-radius:18px] [background:linear-gradient(110deg,_#202637,_#092039)_padding-box,_linear-gradient(110deg,_#ee8b47,_#1fb28a,_#1685ff)_border-box] [&_strong]:[font-size:14px] [&_strong]:[font-weight:500] [&_p]:[margin:4px_0_0] [&_p]:[color:#c1cad8] [&_p]:[font-size:11px] [&_p]:[line-height:1.5] max-[1100px]:[gap:12px] max-[1100px]:[padding:12px_16px] max-[760px]:[margin-top:28px] max-[400px]:[padding:12px] max-[400px]:[&_strong]:[font-size:12px] max-[400px]:[&_p]:[font-size:9px]">
            <div className="[display:flex] [align-items:center] [gap:8px] [padding-right:20px] [border-right:1px_solid_#607383] [&_span]:[font-size:27px] [&_span]:[font-weight:600] [&_small]:[font-size:7px] [&_small]:[line-height:1.25] max-[400px]:[padding-right:12px]">
              <span>{data.marketplace.brand}</span>
              <small>{data.marketplace.brandDescription}</small>
            </div>
            <div>
              <strong>{data.marketplace.title}</strong>
              <p>{data.marketplace.description}</p>
            </div>
          </div>
        </div>

        <div
          className="[position:relative] [width:100%] [max-width:528px] [aspect-ratio:1] [justify-self:center] max-[760px]:[width:min(100%,_480px)] max-[760px]:[margin-bottom:25px] hero-orbit-visual"
          >
          <div
            className={
              "[position:absolute] [border:1px_solid_#78aaff4d] [border-radius:999px] [padding:7px_12px] [display:flex] [align-items:center] [gap:6px] [background:#0a1e46a6] [color:#0085ff] [font-size:10px] [z-index:5] [white-space:nowrap] [&_i]:[width:7px] [&_i]:[height:7px] [&_i]:[border-radius:50%] [&_i]:[background:#21dba4] [&_i]:[box-shadow:0_0_9px_#21dba4] max-[1100px]:[font-size:9px]" +
              " " +
              "[top:3%] [left:-6%] max-[760px]:[left:0]"
            }>
            <i />
            {data.status.cluster}
          </div>
          <HeroOrbit services={services} active={active} />
          <div
            className="[position:absolute] [left:18%] [top:31%] [width:64%] [height:38%] [opacity:0.5] [border-radius:999px] [filter:blur(22px)] [background:conic-gradient(from_90deg,_#1fb28a,_#0a5be0,_#12c8f0,_#1fb28a)] hero-orbit-glow"
            aria-hidden="true"
          />
          {services.map((item, index) => (
            <div
              key={item.title}
              className={
                "[position:absolute] [width:130px] [transform:translate(-50%,_-50%)] [background:transparent] [border:0] [color:#cbd7ef] [display:flex] [flex-direction:column] [align-items:center] [gap:10px]  [z-index:3] [padding:0] max-[400px]:[width:90px] max-[400px]:[gap:6px]" +
                " " +
                nodePositions[index]
              }
              >
              <span
                data-active={active === index}
                className={
                  "hero-service-icon [width:58px] [height:58px] [display:grid] [place-items:center] [border-radius:18px]  [border:1px_solid_#78aaff4d]  [transition:background_0.45s,_box-shadow_0.45s,_color_0.45s,_transform_0.45s] max-[1100px]:[width:50px] max-[1100px]:[height:50px] max-[1100px]:[border-radius:16px] max-[400px]:[width:42px] max-[400px]:[height:42px] max-[400px]:[border-radius:13px] max-[400px]:[&_svg]:[width:23px] " +
                  " " +
                  (active === index
                    ? "bg-[linear-gradient(140deg,#1fb28a,#0861d9)] text-white [transform:scale(1.12)] shadow-[0_0_0_6px_#12c8f01a,0_0_0_8px_#12c8f044,0_0_35px_#12c8f066]"
                    : "bg-[rgba(10,30,70,0.85)] text-[#8fb4ff]")
                }>
                <ServiceIcon name={item.icon} />
              </span>
              <span className="[font-size:11px] [line-height:1.25] [max-width:110px] [text-align:center] max-[1100px]:[font-size:10px] max-[1100px]:[max-width:100px] max-[400px]:[max-width:84px] max-[400px]:[font-size:8px]">
                {item.title}
              </span>
            </div>
          ))}
          <div
            className="[position:absolute] [z-index:4] [left:26%] [top:35%] [width:48%] [min-height:30%] [padding:18px_20px_16px] [border:1px_solid_#78aaff4d] [border-radius:24px] [background:linear-gradient(140deg,_#253b66,_#091834)] [box-shadow:0_20px_45px_#0004] [&_h2]:[font-size:17px] [&_h2]:[font-weight:600] [&_h2]:[line-height:1.2] [&_h2]:[margin:0_0_10px] max-[1100px]:[padding:14px_16px] max-[1100px]:[border-radius:20px] max-[1100px]:[&_h2]:[font-size:14px] max-[400px]:[left:24%] max-[400px]:[width:52%] max-[400px]:[top:33%] max-[400px]:[padding:12px] max-[400px]:[border-radius:17px] max-[400px]:[&_h2]:[font-size:12px]"
            aria-live="off"
            aria-atomic="true">
            <div key={active} className="hero-service-reveal">
              <p className="[color:#12c8f0] [font-size:11px] [font-weight:500] [letter-spacing:1px] [margin:0_0_8px] max-[400px]:[font-size:9px]">
                {active + 1} / {services.length}
              </p>
              <h2>{service.title}</h2>
              <p className="[color:#b5c3df] [font-size:12px] [line-height:1.6] [margin:0] [min-height:76px] max-[1100px]:[font-size:10px] max-[1100px]:[min-height:65px] max-[400px]:[font-size:9px] max-[400px]:[min-height:66px]">
                {service.description}
              </p>
            </div>
            <div className="[height:3px] [border-radius:999px] [background:#12c8f025] [margin-top:12px] [overflow:hidden] [&_span]:[display:block] [&_span]:[height:100%] [&_span]:[background:linear-gradient(90deg,_#1fb28a,_#12c8f0)] [&_span]:[transform-origin:left] hero-progress-track">
              <span
                key={active + "-" + reducedMotion}
                className={reducedMotion ? "[animation:none]" : undefined}
              />
            </div>
          </div>
          <div
            className={
              "[position:absolute] [border:1px_solid_#78aaff4d] [border-radius:999px] [padding:7px_12px] [display:flex] [align-items:center] [gap:6px] [background:#0a1e46a6] [color:#0085ff] [font-size:10px] [z-index:5] [white-space:nowrap] [&_i]:[width:7px] [&_i]:[height:7px] [&_i]:[border-radius:50%] [&_i]:[background:#21dba4] [&_i]:[box-shadow:0_0_9px_#21dba4] max-[1100px]:[font-size:9px]" +
              " " +
              "[bottom:5%] [right:-6%] max-[760px]:[right:0] max-[760px]:[bottom:1%]"
            }>
            <i />
            {data.status.uptime}
          </div>
        </div>
      </div>
    </section>
  );
}
