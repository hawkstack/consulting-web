import React from "react";

const ContactCTA: React.FC = (): JSX.Element => {
  return (
    <div className="w-full bg-white">
      {/* Parent Section */}
      <div className="relative w-full h-[885px] overflow-hidden">
        {/* Blue Curved Background */}
        <div className="absolute top-[20px] left-[-490px] w-[2420px] h-[2427px] rounded-[1280px] bg-[radial-gradient(circle_at_top,#1A4D8F_0%,#0E245A_12%,_#003E99_100%)]" />

        {/* Heading Content */}
        <div className="relative z-10 flex flex-col items-center pt-32 text-[#FFFFFF]">
          <h2 className="font-['Lexend_Deca'] text-[36px] leading-[36px] font-medium">
            Let’s Build Your Platform, the Right Way
          </h2>

          <p className="mt-4 font-['Lexend_Deca'] text-[16px] leading-[16px] font-normal text-center">
            From Red Hat training to enterprise consulting,
            <br />
            we’ll help you move faster and smarter.
          </p>
        </div>

        {/* Form Card */}
        <div className="absolute top-[300px] left-1/2 -translate-x-1/2 z-10 w-[713px] h-[454px] rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#111B2D_0%,#0E1726_45%,_#0A1220_100%)] opacity-[0.92] px-10 py-8">
          {/* Inputs Grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            {/* First Name */}
            <div>
              <label className="block mb-2 pl-[17px] font-['Lexend_Deca'] text-[12px] leading-[17.28px] font-medium text-[#FFFFFF] flex items-center gap-[2px]">
                First Name <span className="text-red-500 ml-[2px]">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full h-[48px] rounded-lg bg-[#0B1220] px-4 text-sm text-[#7F858B] placeholder-[#7F858B] outline-none"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block mb-2 pl-[17px] font-['Lexend_Deca'] text-[12px] leading-[17.28px] font-medium text-[#FFFFFF] flex items-center gap-[2px]">
                Last Name <span className="text-red-500 ml-[2px]">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full h-[48px] rounded-lg bg-[#0B1220] px-4 text-sm text-[#7F858B] placeholder-[#7F858B] outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 pl-[17px] font-['Lexend_Deca'] text-[12px] leading-[17.28px] font-medium text-[#FFFFFF] flex items-center gap-[2px]">
                Work Email Address{" "}
                <span className="text-red-500 ml-[2px]">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your work email"
                className="w-full h-[48px] rounded-lg bg-[#0B1220] px-4 text-sm text-[#7F858B] placeholder-[#7F858B] outline-none"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block mb-2 pl-[17px] font-['Lexend_Deca'] text-[12px] leading-[17.28px] font-medium text-[#FFFFFF] flex items-center gap-[2px]">
                Contact Number <span className="text-red-500 ml-[2px]">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full h-[48px] rounded-lg bg-[#0B1220] px-4 text-sm text-[#7F858B] placeholder-[#7F858B] outline-none"
              />
            </div>
          </div>

          {/* Footer Text */}
          <div className="mt-8 text-center">
            <h4 className="font-['Lexend_Deca'] text-[18px] leading-[29.52px] font-bold text-[#DDDEDF]">
              Schedule a Demo Call
            </h4>
            <p className="mt-1 font-['Lexend_Deca'] text-[14px] leading-[20.16px] font-normal text-[#7F858B]">
              Arrange a demo with a member of our team.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="mt-6 w-full h-[50px] rounded-full bg-[#0E245A] text-[#FFFFFF] font-['Lexend_Deca'] font-medium hover:bg-[#1b3a8f] transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
