import React from "react";

const ContactForm: React.FC = (): JSX.Element => {
  return (
    <div className="w-full bg-white">
      {/* Parent Section */}
      <div className="relative w-full bg-[#0E245A]">
        {/* Content Wrapper */}
        <div className="flex flex-col items-center px-4 pt-20 md:pt-28 pb-20 md:pb-28 text-white">
          {/* Heading */}
          <div className="text-center">
            <h2 className="font-['Lexend_Deca'] text-[24px] md:text-[32px] lg:text-[36px] font-medium leading-tight">
              Let’s Build Your Platform, the Right Way
            </h2>

            <p className="mt-4 font-['Lexend_Deca'] text-[14px] md:text-[16px] max-w-xl mx-auto">
              From Red Hat training to enterprise consulting,
              <br className="hidden md:block" />
              we’ll help you move faster and smarter.
            </p>
          </div>

          {/* Form Card */}
          <div className="mt-12 md:mt-16 w-full max-w-[713px] rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#111B2D_0%,#0E1726_45%,#0A1220_100%)] px-6 md:px-10 py-8">
            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 pl-4 text-[12px] font-medium">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full h-12 rounded-lg bg-[#0B1220] px-4 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 pl-4 text-[12px] font-medium">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full h-12 rounded-lg bg-[#0B1220] px-4 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 pl-4 text-[12px] font-medium">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="w-full h-12 rounded-lg bg-[#0B1220] px-4 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 pl-4 text-[12px] font-medium">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full h-12 rounded-lg bg-[#0B1220] px-4 text-sm outline-none"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
              <h4 className="text-[16px] md:text-[18px] font-bold text-[#DDDEDF]">
                Schedule a Demo Call
              </h4>
              <p className="mt-1 text-[14px] text-[#7F858B]">
                Arrange a demo with a member of our team.
              </p>
            </div>

            <button className="mt-8 w-full h-12 rounded-full bg-[#0E245A] hover:bg-[#1b3a8f] transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
