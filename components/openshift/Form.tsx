"use client";

export default function DiscussRedHat() {
  return (
    <section className="w-full flex justify-center py-6 font-lexend">
      <div className="w-full max-w-[440px] px-4">
        <div className="bg-white rounded-2xl border border-[#BDBDBD] shadow-[0_8px_24px_rgba(0,0,0,0.15)] overflow-hidden">
          <div className="bg-gradient-to-b from-[#1b2f55] to-[#0b1f3a] px-6 py-4">
            <h2 className="text-white text-[18px] font-semibold">
              Discuss RedHat Openshift
            </h2>
          </div>
          <form className="p-[25px] space-y-4 w-[353px] mx-auto">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full h-[33px] rounded-lg border border-[#828282] px-3 text-[12px] outline-none"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-full h-[33px] rounded-lg border border-[#828282] px-3 text-[12px] outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input
                type="email"
                placeholder="Business Email*"
                className="w-full h-[33px] rounded-lg border border-[#828282] px-3 text-[12px] outline-none"
              />
              <input
                type="text"
                placeholder="Job Title*"
                className="w-full h-[33px] rounded-lg border border-[#828282] px-3 text-[12px] outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Company*"
                className="w-full h-[33px] rounded-lg border border-[#828282] px-3 text-[12px] outline-none"
              />
              <input
                type="text"
                placeholder="Country*"
                className="w-full h-[33px] rounded-lg border border-[#828282] px-3 text-[12px] outline-none"
              />
            </div>

            <textarea
              rows={4}
              placeholder="Get expert help building a secure Enterprise Linux foundation..."
              className="w-full rounded-lg border border-[#828282] px-3 py-2 text-[12px] outline-none resize-none"
            />

            <button
              type="submit"
              className="w-full mt-4 rounded-full bg-gradient-to-b from-[#1b2f55] to-[#0b1f3a] py-3 text-white text-[14px] font-semibold shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
