"use client";

const logos = [
  "/images/partners/Hawkstack-Logo.webp",
  "/images/partners/Cloudnative-Logo.webp",
  "/images/partners/Mirantis-Logo.webp",
  "/images/partners/Linux-Logo.webp",
  "/images/partners/Advance-Logo.webp",
];

export default function StrategicPartners() {
  return (
    <section className="py-20 bg-white w-full">
      {/* TOP CONTENT */}
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="font-lexend text-[40px] font-normal leading-[150%] tracking-[-0.015em] text-[#213174]/90 text-center">
          Our Strategic Partners
        </h2>

        {/* Subtitle */}
        <p className="font-lexend text-[16px] font-normal leading-[150%] tracking-[-0.025em] text-[#213174] text-center max-w-[666px] mt-[-10]">
          We partner with leading technology providers to deliver scalable
          cloud-native solutions.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="w-full overflow-hidden">
        <div className="partner-track">
          {[...logos, ...logos].map((logo, i) => (
            <img key={i} src={logo} alt="partner" className="partner-logo" />
          ))}
        </div>
      </div>
    </section>
  );
}
