type Props = {
  brandName?: string;
  title?: string;
  effectiveDate?: string;
  intro?: string;
  siteUrl?: string;
};

export default function PrivacyHeader({
  brandName = "HAWKSTACK TECHNOLOGIES",
  title = "Policy",
  effectiveDate,
  intro,
  siteUrl,
}: Props) {
  return (
    <div className="mb-8">
      <p className="text-[12px] font-bold text-[#1D4ED8] uppercase tracking-[1.5px]">
        {brandName}
      </p>

      <h1 className="text-3xl md:text-2xl xl:text-5xl leading-[30px] xl:leading-[46px] font-bold text-[#101828] mt-1 lg:mt-2">
        {title}
      </h1>

      {effectiveDate && (
        <div className="flex items-center gap-1 mt-1 lg:mt-3">
          <span className="text-[14px] text-[#667085] font-medium">
            Effective Date :
          </span>

          <span className="text-[14px] font-bold text-[#101828]">
            {effectiveDate}
          </span>
        </div>
      )}

      {intro && (
        <p className="text-xs xl:text-sm text-[#293246] leading-6 mt-1 lg:mt-2 max-w-[760px]">
          {intro}
        </p>
      )}

      {siteUrl && (
        <p className="text-[#1D4ED8] mt-3 font-semibold text-xs xl:text-sm">
          {siteUrl}
        </p>
      )}
    </div>
  );
}
