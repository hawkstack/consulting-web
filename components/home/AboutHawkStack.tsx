import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ServiceIcon } from "@/components/icons/Home/HeroIcons";
import type { aboutSectionData } from "@/data/home/about";

type AboutCopy = {
  eyebrow: string;
  capabilities: { title: string; description: string }[];
  footer: string;
  title: string;
  description: string;
  supportingCopy: string;
  actionLabel: string;
};

export default function AboutHawkStack({ data: sharedData }: { data: typeof aboutSectionData }) {
  const t = useTranslations("AboutHawkStack");
  const locale = useLocale();
  const textDirection = locale === "ar" ? "rtl" : "ltr";
  const copy = t.raw("capabilities") as AboutCopy["capabilities"];
  const data = {
    ...sharedData,
    eyebrow: t("eyebrow"),
    title: t("title"),
    description: t("description"),
    supportingCopy: t("supportingCopy"),
    footer: t("footer"),
    capabilities: sharedData.capabilities.map((item, index) => ({ ...item, ...copy[index] })),
    action: { ...sharedData.action, label: t("actionLabel") },
  };
  return (
    <section lang={locale} dir="ltr" aria-labelledby="about-hawkstack-title" className="bg-white px-5 py-6 lg:py-0 font-lexend text-[#12233f] md:px-10 xl:px-[68px]">
      <div className="mx-auto grid max-w-[1240px] items-center gap-7 md:grid-cols-[minmax(0,33%)_minmax(0,1fr)] md:gap-8">
        <div className="rounded-2xl bg-[linear-gradient(110deg,#06162d,#123b5c)] p-5 text-white lg:p-4">
          <p dir={textDirection} className="text-left text-xs font-semibold uppercase tracking-[0.15em] text-[#a8d7fa]">{data.eyebrow}</p>
          <ul className="mt-4 space-y-3.5 lg:mt-3 lg:space-y-2">
            {data.capabilities.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span aria-hidden="true" className="flex size-8 lg:size-7 shrink-0 items-center justify-center rounded-full border border-[#4297c3]/40 bg-[#17476a]/60 text-[#a8d7fa] [&_svg]:size-5"><ServiceIcon name={item.icon} /></span>
                <div><h3 dir={textDirection} className="text-left text-xs font-medium">{item.title}</h3><p dir={textDirection} className="text-left mt-1 text-[10px] leading-relaxed text-[#aec4d7]">{item.description}</p></div>
              </li>
            ))}
          </ul>
          <p dir={textDirection} className="mt-5 lg:mt-3 border-t border-[#52738e]/40 pt-2 text-center text-[9px] text-[#b9cedf]">{data.footer}</p>
        </div>
        <div className="max-w-[680px]">
          <h2 dir={textDirection} id="about-hawkstack-title" className="text-left text-[clamp(25px,2.2vw,30px)] font-semibold leading-[1.2] tracking-[-0.4px]">{data.title}</h2>
          <p dir={textDirection} className="text-left mt-5 text-sm leading-[1.65] lg:mt-3 lg:text-xs lg:leading-[1.6] text-[#202020]">{data.description}</p>
          <p dir={textDirection} className="text-left mt-4 max-w-[560px] text-sm leading-[1.65] lg:mt-3 lg:text-xs lg:leading-[1.6] text-[#405b82]">{data.supportingCopy}</p>
          <Link href={data.action.href} className="mt-5 lg:mt-3 inline-flex rounded-[10px] bg-[#075bef] px-6 py-3 lg:py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#064bc7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#075bef]"><span dir={textDirection}>{data.action.label}</span></Link>
        </div>
      </div>
    </section>
  );
}
