import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full xl:min-h-[700px] lg:min-h-[450px] md:min-h-[450px] min-h-screen overflow-hidden bg-[#f5f7fb] border-black">
      <Image
        src="/images/career/abstract-shape.webp"
        alt="background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 py-20">
        {/* Title */}
        <h1 className="xl:text-6xl lg:text-3xl md:text-3xl font-semibold text-[#0048FF] leading-tight">
          Ignite Your Potential
        </h1>

        {/* Description */}
        <p className="mt-4 text-[#2F2F2F] font-semibold xl:text-xl lg:text-sm md:text-sm xl:max-w-[82%] lg:max-w-[52%] md:max-w-[78%]  mx-auto leading-relaxed">
          Join HawkStack Technologies, where innovation meets opportunity.
          Discover a workplace that empowers you to learn, grow, and excel in
          your own unique way.
        </p>

        {/* Button */}
        <button className="mt-6 px-6 py-2.5 bg-[#0048FF] text-white xl:text-sm lg:text-xs md:text-xs rounded-xl shadow-md hover:bg-blue-700 transition">
          Explore career opportunities
        </button>
      </div>
    </section>
  );
}
