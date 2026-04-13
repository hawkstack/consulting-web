import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen px-4 xl:-translate-y-12 lg:-translate-y-10 md:-translate-y-10 -translate-y-14">
      <div className="text-center max-w-md w-full">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 bg-blue-100 text-black text-xs font-medium px-4 py-1.5 rounded-full border border-blue-200">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Work in progress
          </span>
        </div>

        {/* Illustration */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/coming-soon/comingsoon.webp"
            alt="construction"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="md:text-4xl text-2xl font-bold text-black mb-3">
          We're under <span className="text-[#0066FF]">Construction</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#6B7280] md:w-[74%] text-sm mb-6 leading-normal mx-auto">
          Our website is getting a fresh coat of paint. Be the first to know
          when we launch subscribers get an exclusive surprise.
        </p>

        {/* Input + Button */}
        <div className="md:w-90 flex items-center bg-white rounded-lg shadow-sm overflow-hidden mb-3 border border-[#D1D5DB] mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-2 text-sm text-[#9CA3AF] outline-none"
          />
          <button className="bg-[#0066FF] text-white px-4 py-2 text-sm font-medium hover:bg-blue-700">
            Notify me
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400">
          Sign up now to get early access on our launch date.
        </p>
      </div>
    </div>
  );
}
