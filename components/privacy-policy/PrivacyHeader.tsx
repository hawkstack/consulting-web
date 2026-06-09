type Props = {
  title?: string;
  effectiveDate?: string;
  intro?: string;
  siteUrl?: string;
};

export default function PrivacyHeader({
  title = "Privacy Policy",
  effectiveDate = "25/05/2026",
  intro = "Hawkstack Technologies Private Limited (“HawkStack”, “we”, “our”, or “us”) values your privacy and is committed to protecting the confidential and personal information of our enterprise clients, partners, and website visitors. This Privacy Policy explains how we collect, use, store, and safeguard your data when you visit or engage with our consulting services at",
  siteUrl = "https://hawkstack.com/",
}: Props) {
  return (
    <div className="mb-8">
      <p className="text-[12px] font-bold text-[#1D4ED8] uppercase tracking-[1.5px]">
        HAWKSTACK TECHNOLOGIES
      </p>

      <h1 className="text-3xl md:text-2xl xl:text-5xl leading-[30px] xl:leading-[46px] font-bold text-[#101828] mt-1 lg:mt-2">
        {title}
      </h1>

      {/* Effective Date */}
      <div className="flex items-center gap-1 mt-1 lg:mt-3">
        <span className="text-[14px] text-[#667085] font-medium">
          Effective Date :
        </span>

        <span className="text-[14px] font-bold text-[#101828]">
          {effectiveDate}
        </span>
      </div>

      <p className="text-xs xl:text-sm text-[#293246] leading-6 mt-1 lg:mt-2 max-w-[760px]">
        {intro}
      </p>

      <p className="text-[#1D4ED8] mt-3 font-semibold text-xs xl:text-sm">
        {siteUrl}
      </p>
    </div>
  );
}
