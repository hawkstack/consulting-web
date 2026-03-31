import Arrow from "@/components/icons/career/Arrow";
import Image from "next/image";

export default function OurApproachSection() {
  return (
    <section className="hidden md:block relative overflow-hidden w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-18">
      {/* Gradient Blur Shape */}
      <div className="pointer-events-none absolute top-[-80px] left-[-100px] w-[200px] h-[200px] opacity-90 blur-[220px] bg-gradient-to-br from-[#002EA3] to-[#009DFF] rounded-full" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">
          {/* Heading + Arrow */}
          <div className="relative flex items-center gap-3">
            <h2 className="text-[#0048FF] xl:text-6xl lg:text-4xl md:text-4xl font-medium leading-none">
              Our <br /> Approach
            </h2>

            {/* Arrow */}
            <Arrow className="absolute xl:top-10 lg:top-4 md:top-4 xl:left-[216px] lg:left-[124px] md:left-[120px] w-7 h-7" />
          </div>

          {/* Image */}
          <div className="w-[260px] h-[160px] rounded-xl overflow-hidden xl:ml-30 lg:ml-28">
            <Image
              src="/images/our-approach/approach-image.webp"
              alt="approach"
              width={260}
              height={160}
              className="object-cover rounded-xl lg:w-[240px] lg:h-[140px] md:w-[220px] md:h-[120px]"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="max-w-[54%] text-[#2F2F2F] font-normal xl:text-lg lg:text-lg md:text-md leading-relaxed xl:mt-34 lg:mt-14 md:mt-6">
          <p>
            At HawkStack, we focus on people first. We create an environment
            where you can learn, take ownership, and grow through meaningful
            work.
          </p>

          <p className="mt-2">
            By combining collaboration, innovation, and real-world impact,{" "}
            <span className="font-semibold xl:text-xl lg:text-lg md:text-md text-black">
              we ensure every team member contributes, evolves, and builds a
              career with purpose.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
