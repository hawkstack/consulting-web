"use client";
import Image from "next/image";

export default function HeroSection() {
  const handleScroll = () => {
    const section = document.getElementById("career-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative w-full xl:min-h-[700px] lg:min-h-[450px] md:min-h-[450px] min-h-[240px] overflow-hidden bg-[#f5f7fb] border-black">
      <Image
        src="/images/career/abstract-shape.webp"
        alt="background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center xl:px-4 xl:py-20 lg:py-20 lg:px-4 md:py-20 md:px-4">
        {/* Title */}
        <h1 className="mt-1 xl:text-6xl lg:text-3xl md:text-3xl text-2xl font-semibold text-[#0048FF] leading-tight">
          Ignite Your Potential
        </h1>

        {/* Description */}

        <p className="xl:mt-4 lg:mt-4 md:mt-4 mt-2 text-[#2F2F2F] font-semibold xl:text-xl lg:text-sm md:text-sm text-[10px] max-w-[80%] xl:max-w-[82%] lg:max-w-[66%] md:max-w-[78%]  mx-auto xl:leading-relaxed ">
          Join HawkStack Technologies, where innovation meets opportunity.
          Discover a workplace that empowers you to learn, grow, and excel in
          your own unique way.
        </p>

        {/* Button */}
        <button
          onClick={handleScroll}
          className="xl:mt-6 lg:mt-6 md:mt-6 xl:px-6 xl:py-2.5 px-2 py-1 bg-[#0048FF] text-white xl:text-sm lg:text-xs md:text-xs text-[8px] rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Explore career opportunities
        </button>
      </div>
    </section>
  );
}
