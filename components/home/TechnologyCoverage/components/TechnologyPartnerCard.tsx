import Image from "next/image";
import type { TechnologyPartner } from "../types/TechnologyCoverage.types";

export default function TechnologyPartnerCard({
  partner,
}: {
  partner: TechnologyPartner;
}) {
  const showBrandName = partner.id !== "aws";
  const logoSize =
    partner.id === "aws"
      ? "h-11 w-24 xl:h-12 xl:w-28"
      : "h-8 w-8 xl:h-9 xl:w-9";
  const brandNameClass =
    partner.id === "mirantis"
      ? "text-sm tracking-[0.04em] xl:text-[22px]"
      : "text-xs xl:text-[17px]";
  const brand = (
    <span className="flex items-center justify-center gap-2 xl:gap-2.5">
      {partner.mark && (
        <Image
          src={partner.mark}
          alt=""
          aria-hidden="true"
          width={160}
          height={64}
          className={`object-contain ${logoSize}`}
        />
      )}
      {showBrandName && (
        <span className={`font-semibold text-slate-900 ${brandNameClass}`}>
          {partner.name}
        </span>
      )}
    </span>
  );
  const contents =
    partner.id === "suse" ? (
      <span className="flex items-center justify-center gap-2 xl:gap-2.5">
        {partner.mark && (
          <Image
            src={partner.mark}
            alt=""
            aria-hidden="true"
            width={160}
            height={64}
            className="h-8 w-8 object-contain xl:h-9 xl:w-9"
          />
        )}
        <span className="text-xl font-bold tracking-tight text-[#00a86b] xl:text-2xl">
          {partner.name}
        </span>
      </span>
    ) : (
      brand
    );
  const style =
    "flex h-[88px] items-center justify-center rounded-xl border border-slate-200 bg-white px-4 shadow-[0_4px_14px_rgba(15,45,85,0.06)] transition-[background-color,box-shadow,transform] duration-200 hover:bg-[#F5F9FF] hover:shadow-md motion-reduce:transition-none lg:h-[50px] lg:rounded-lg lg:px-2 lg:shadow-[0_2px_4px_rgba(15,23,42,0.12)] xl:h-[86px] xl:rounded-[9px] xl:px-4 xl:shadow-[0_2px_5px_rgba(15,23,42,0.12)]";

  return partner.href ? (
    <a
      href={partner.href}
      target={partner.external ? "_blank" : undefined}
      rel={partner.external ? "noopener noreferrer" : undefined}
      aria-label={`Verify ${partner.name} partnership`}
      className={`${style} hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-blue-500`}
    >
      {contents}
    </a>
  ) : (
    <div className={style}>{contents}</div>
  );
}
