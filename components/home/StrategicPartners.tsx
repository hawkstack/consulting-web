import Image from "next/image";

const logos: readonly string[] = [
  "/images/partners/Hawkstack-Logo.webp",
  "/images/partners/Cloudnative-Logo.webp",
  "/images/partners/Mirantis-Logo.webp",
  "/images/partners/Linux-Logo.webp",
  "/images/partners/Advance-Logo.webp",
];

export default function StrategicPartners(): JSX.Element {
  return (
    <section className="py-20 bg-white w-full">
      {/* TOP CONTENT */}
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="font-lexend text-[40px] font-normal leading-[150%] tracking-[-0.02em] text-[#052BC7] mb-4">
          Our Strategic Partners
        </h2>

        {/* Subtitle */}
        <p className="font-lexend text-[16px] font-normal leading-[150%] tracking-[-0.025em] text-[#052BC7] max-w-[666px] mt-[-18]">
          We partner with leading technology providers to deliver scalable
          cloud-native solutions.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="w-full overflow-hidden mt-12">
        <div className="partner-track">
          {[...logos, ...logos].map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt="Strategic partner logo"
              className="partner-logo"
              width={120}
              height={48}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
