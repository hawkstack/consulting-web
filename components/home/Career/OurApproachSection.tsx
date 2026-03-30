import Arrow from "@/components/icons/Arrow";

export default function OurApproachSection() {
  return (
    <section className="relative overflow-hidden w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20">
      {/* Gradient Blur Shape */}
      <div className="pointer-events-none absolute top-[-80px] left-[-100px] w-[200px] h-[200px] opacity-90 blur-[220px] bg-gradient-to-br from-[#002EA3] to-[#009DFF] rounded-full" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">
          {/* Heading + Arrow */}
          <div className="relative flex items-center gap-3">
            <h2 className="text-[#0048FF] text-6xl  font-medium leading-tight">
              Our <br /> Approach
            </h2>

            {/* Arrow */}
            <Arrow className="absolute top-16 left-[216px] w-7 h-7" />
          </div>

          {/* Image */}
          <div className="w-[220px] h-[140px] rounded-xl overflow-hidden ml-30">
            <img
              src="/images/our-approach/approach-image.webp"
              alt="approach"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="max-w-[54%] text-[#2F2F2F] font-normal text-lg leading-relaxed mt-42">
          <p>
            At HawkStack, we focus on people first. We create an environment
            where you can learn, take ownership, and grow through meaningful
            work.
          </p>

          <p className="mt-2">
            By combining collaboration, innovation, and real-world impact,{" "}
            <span className="font-semibold text-xl text-black">
              we ensure every team member contributes, evolves, and builds a
              career with purpose.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
