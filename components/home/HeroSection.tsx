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
  const [textIndex, setTextIndex] = useState(0);
  const [previousTextIndex, setPreviousTextIndex] = useState<number | null>(null);
  const textSlides = [data, ...(data.textSlides ?? [])];

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

  useEffect(() => {
    if (reducedMotion || !data.textSlides?.length) return;
    let cleanupTimer: number | undefined;
    const timer = window.setInterval(() => {
      setPreviousTextIndex(textIndex);
      setTextIndex(current => (current + 1) % (1 + (data.textSlides?.length ?? 0)));
      cleanupTimer = window.setTimeout(() => setPreviousTextIndex(null), 650);
    }, 6000);
    return () => { window.clearInterval(timer); window.clearTimeout(cleanupTimer); };
  }, [reducedMotion, data.textSlides?.length, textIndex]);

  const service = services[active];

  return (
    <section
      className="[background:#020d22] [color:#fff] [overflow:hidden] [font-family:var(--font-lexend),_sans-serif] hero-animation-scope"
      aria-labelledby="home-hero-title">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 min-[769px]:grid-cols-2 items-center gap-12 px-12 py-12 xl:px-[68px] max-[1100px]:gap-8 max-[769px]:gap-7 max-[769px]:px-6 max-[400px]:px-[18px]">
        <div className="min-w-0 w-full md:max-[769px]:text-center md:max-[769px]:[&_p]:mx-auto md:max-[769px]:[&>div]:mx-auto md:max-[769px]:[&>div]:justify-center xl:-translate-y-3 xl:pb-5 [&_h1]:[font-size:clamp(32px,_3.4vw,_48px)] [&_h1]:[line-height:1.08] [&_h1]:[font-weight:600] [&_h1]:[letter-spacing:-0.8px] [&_h1]:[margin:0_0_16px] max-[769px]:[padding-bottom:0] max-[769px]:[&_h1]:[font-size:clamp(30px,_7vw,_42px)]">
          <div className="grid [container-type:inline-size]">
            {[...new Set([textIndex, ...(previousTextIndex === null ? [] : [previousTextIndex])])].map(index => {
              const heroText = textSlides[index % textSlides.length];
              const outgoing = index !== textIndex;
              return (
                <div key={index} aria-hidden={outgoing || undefined} className={"col-start-1 row-start-1 " + (outgoing ? "hero-copy-leave pointer-events-none" : previousTextIndex === null ? "" : "hero-copy-enter")}>
            <p className="[color:#00d2ef] [font-size:12px] [font-weight:600] [letter-spacing:2.3px] [margin:0_0_14px]">
              {heroText.eyebrow}
            </p>
            <h1 id={outgoing ? undefined : "home-hero-title"} style={heroText.eyebrow === "KUBEVIRTSTACK" ? { fontSize: "clamp(18px, 6.1cqw, 42px)" } : undefined}>
              {heroText.title.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="[max-width:510px] [color:#c4d1e5] [font-size:16px] [font-weight:400] [line-height:1.45] [margin:0] max-[1100px]:[font-size:14px] max-[769px]:[max-width:100%]">
              {heroText.description}
            </p>
            {"badge" in heroText && heroText.badge && (
              <p className="mt-2 text-[10px] text-[#c4d1e5]">
                {heroText.badge}
              </p>
            )}

                </div>
              );
            })}
          </div>
          <div className="[display:flex] [flex-wrap:wrap] [gap:14px] [margin-top:24px] max-[400px]:[gap:10px]">
            <a
              href={"#" + data.primaryAction.targetId}
              onClick={(event) => {
                event.preventDefault();
                document
                  .getElementById(data.primaryAction.targetId)
                  ?.scrollIntoView({
                    behavior: window.matchMedia(
                      "(prefers-reduced-motion: reduce)",
                    ).matches
                      ? "instant"
                      : "smooth",
                    block: "start",
                  });
              }}
              className="[border-radius:999px] [padding:14px_20px] [font-size:13px] [font-weight:500] [line-height:1.2] [text-align:center]  [text-decoration:none] [color:white] [border:0] [background:linear-gradient(100deg,_#1fb28a,_#075be0)]  max-[1100px]:[font-size:12px] max-[1100px]:[padding:13px_16px] max-[400px]:[padding:12px_14px] max-[400px]:[font-size:11px]">
              {data.primaryAction.label}
            </a>
            <a
              href={data.secondaryAction.href || undefined}
              aria-disabled={!data.secondaryAction.href || undefined}
              target={data.secondaryAction.href?.startsWith("https://") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="[border-radius:999px] [padding:14px_20px] [font-size:13px] [font-weight:500] [line-height:1.2] [text-align:center]  [text-decoration:none] [color:#071731] [border:1px_solid_#cbd6e9] [background:white]  max-[1100px]:[font-size:12px] max-[1100px]:[padding:13px_16px] max-[400px]:[padding:12px_14px] max-[400px]:[font-size:11px]">
              {data.secondaryAction.label}
            </a>
          </div>
          <div className="hero-marketplace-hover relative isolate overflow-hidden [display:flex] [align-items:center] [gap:18px] [width:440px] [max-width:100%] [margin-top:48px] [padding:12px_24px] [border:1px_solid_transparent] [border-radius:18px] [background:linear-gradient(110deg,_#202637,_#092039)_padding-box,_linear-gradient(110deg,_#ee8b47,_#1fb28a,_#1685ff)_border-box] [&_strong]:[font-size:15px] [&_strong]:[font-weight:500] [&_p]:[margin:4px_0_0] [&_p]:[color:#c1cad8] [&_p]:[font-size:11px] [&_p]:[font-weight:400] [&_p]:[line-height:1.5] max-[1100px]:[gap:12px] max-[1100px]:[padding:12px_16px] max-[769px]:[margin-top:28px] max-[400px]:[padding:12px] max-[400px]:[&_strong]:[font-size:12px] max-[400px]:[&_p]:[font-size:9px]">
            <span
              aria-hidden="true"
              className="hero-marketplace-shine pointer-events-none absolute inset-y-0 left-0 z-10 w-[45%] -translate-x-[150%] -skew-x-[20deg] bg-[linear-gradient(90deg,transparent,rgba(18,200,240,0.12),rgba(255,255,255,0.32),rgba(18,200,240,0.12),transparent)]"
            />
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
              <p>Procure HawkStack solutions on GeM.</p>
              <p className="break-words"><span className="font-semibold text-[#35d6ed]">GeM Seller ID:</span>{" "}<span className="rounded border border-[#35d6ed]/30 bg-[#00d2ef]/10 px-1.5 py-0.5 font-bold text-white">6QX3260014928264</span></p>
            </div>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-[528px] justify-self-center [container-type:inline-size]  xl:-translate-y-[18px] xl:-translate-x-2 max-[769px]:w-[min(100%,420px)] max-[769px]:mb-6 hero-orbit-visual">
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
                    ? "bg-[linear-gradient(140deg,#1fb28a,#0861d9)] text-white [transform:scale(1.12)] shadow-[0_0_0_0.758cqw_#12c8f010,0_0_0_1.136cqw_#12c8f025,0_0_4.167cqw_#12c8f033]"
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
            className="[position:absolute] [z-index:4] [left:26%] [top:35%] [width:48%] [height:29.545cqw] [display:flex] [flex-direction:column] [justify-content:space-between] [padding:2.652cqw_3.409cqw] [border:0.189cqw_solid_#78aaff4d] [border-radius:4.545cqw] [background:linear-gradient(140deg,_#143867,_#071831)] [box-shadow:0_3.788cqw_8.523cqw_#0004] [&_h2]:[color:#0085ff] [&_h2]:[font-weight:600] [&_h2]:[line-height:1.2] [&_h2]:[margin:0_0_1.136cqw]"
            aria-live="off"
            aria-atomic="true">
            <div key={active} className="hero-service-reveal">
              <p className="[color:#12c8f0] [font-size:2.083cqw] [font-weight:500] [letter-spacing:0.189cqw] [margin:0_0_1.136cqw]">
                {active + 1} / {services.length}
              </p>
              <h2
                className={
                  active >= 1 && active <= 3 ? "text-[2.8cqw]" : "text-[3.5cqw]"
                }>
                {service.title}
              </h2>
              <p
                className={`text-[#b5c3df] font-normal leading-[1.45] m-0 ${active >= 1 && active <= 3 ? "text-[2cqw]" : "text-[2.273cqw]"}`}>
                {service.description}
              </p>
            </div>
            <div className="[height:0.568cqw] [flex-shrink:0] [border-radius:189.205cqw] [background:#12c8f025] [margin-top:1.136cqw] [overflow:hidden] [&_span]:[display:block] [&_span]:[height:100%] [&_span]:[background:linear-gradient(90deg,_#1fb28a,_#12c8f0)] [&_span]:[transform-origin:left] hero-progress-track">
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
