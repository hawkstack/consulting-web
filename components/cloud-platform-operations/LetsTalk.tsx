import { ContactCtaContent } from "@/app/types/cloud-platform-operations";

type Props = {
  content: ContactCtaContent;
};

export default function LetsTalk({ content }: Props) {
  return (
    <section className="w-full bg-[#020817] font-lexend px-4 py-7 md:px-15 md:py-10 lg:px-25 lg:py-20">
        <div className="max-w-[1280px] mx-auto p-0 md:p-0 lg:p-10 lg:rounded-[28px] lg:border lg:border-[#22D3EE]/18 lg:shadow-[0px_20px_60px_0px_#00000059] lg:bg-[linear-gradient(90deg,_rgba(34,211,238,0.1)_0%,_rgba(59,130,246,0.1)_50%,_rgba(15,23,42,0.92)_100%)]">        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h5 className="text-[#A5F3FC] text-[14px] font-bold uppercase tracking-[0.2em] mb-3 text-center md:text-left">
              {content.subTitle}
            </h5>

            <h2 className="text-white text-[24px] xl:text-[45px] font-bold leading-relaxed max-w-[580px] text-center md:text-left">
              {content.title}
            </h2>

            <p className="text-white/68 text-[16px] xl:text-[18px] leading-relaxed mt-2 max-w-[520px] text-center md:text-left">
              {content.description}
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-[#020617]/76 border border-white/10 rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.35),0_0_40px_rgba(59,130,246,0.18)] p-4 md:p-5 lg:p-6">
            <form className="space-y-3">
              {content.fields.map((field) =>
                field.type === "textarea" ? (
                  <textarea
                    key={field.id}
                    placeholder={field.placeholder}
                    rows={4}
                    className="w-full rounded-[14px] bg-[#FFFFFF]/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/35 text-[14px]"
                  />
                ) : (
                  <input
                    key={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full h-[48px] rounded-[14px] bg-[#FFFFFF]/10 border border-white/10 px-4 text-white placeholder:text-white/35 text-[14px]"
                  />
                )
              )}

              <button
                type="submit"
                className="w-full h-[48px] rounded-full bg-white text-[#0F172A] text-[13px] font-semibold"
              >
                {content.buttonText}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
