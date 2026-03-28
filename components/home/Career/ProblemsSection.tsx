export default function ProblemsSection() {
  const data = [
    {
      id: "01",
      title: "Looking for Meaningful Work?",
      desc: "Be part of a team that builds impactful solutions, where your work directly contributes to real-world results and innovation.",
    },
    {
      id: "02",
      title: "Want to Grow Your Career?",
      desc: "Accelerate your professional journey with continuous learning, mentorship and opportunities to take ownership of exciting projects.",
    },
    {
      id: "03",
      title: "Tired of Rigid Work Culture?",
      desc: "Experience a flexible, collaborative environment that values creativity, balance, and your unique perspective.",
    },
  ];

  return (
    <section className="relative bg-[#FFFFFF] xl:py-20 xl:px-32 lg:py-12 lg:px-6">
      {/* Gradient Blur Shape */}
      <div className="pointer-events-none absolute bottom-[-100px] right-[-100px] w-[160px] h-[160px] opacity-90 blur-[220px] bg-gradient-to-br from-[#002EA3] to-[#009DFF] rounded-full" />
      {/* Heading */}
      <h2 className="text-center xl:text-5xl lg:text-4xl font-medium text-[#0048FF] mb-16">
        Are You Running Into These Problems
      </h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 xl:gap-2 lg:gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="border border-[#0048FF] rounded-4xl px-6 py-8 bg-[#FFFFFF] hover:shadow-md transition"
          >
            {/* Number */}
            <h3 className="text-blue-600 text-4xl font-medium mb-4">
              {item.id}
            </h3>

            {/* Title */}
            <h4 className="font-medium xl:text-xl lg:text-lg mb-2">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-[#2F2F2F] font-normal text-sm leading-relaxed xl:mb-4">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
