import Image from "next/image";

const JoinOurTeam = () => {
  const TITLE = "Join Our Team";
  const SUBTITLE = "Build your future with Hawkstack";
  const BUTTON_TEXT = "View open positions";

  return (
    <section className="font-lexend">
      {/* MOBILE / TABLET */}
      <div className="relative md:hidden">
        <Image src="/images/team-background.webp" alt={TITLE} width={1920} height={1080} className="w-full h-auto" priority={false}/>
        <div className="absolute inset-0 pt-6 px-4 pointer-events-none">
          <h1 className="text-white font-medium mb-[6px] text-[20px]">
            {TITLE}
          </h1>
          <h3 className="text-white mb-[16px] text-[12px]">
            {SUBTITLE}
          </h3>
          <button className="pointer-events-auto
    border border-white bg-transparent text-white font-medium rounded-2xl
    text-[12px] px-[18px] py-[8px]
    transition-colors
    active:bg-white active:text-black
    hover:hover:bg-white hover:hover:text-black ">
            {BUTTON_TEXT}
          </button>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="section-bg hidden md:block">
        <div className="pt-14 md:pt-20 lg:pt-25 px-4 md:px-12 lg:px-18 max-w-screen-xl">
          <h1 className="text-white font-medium mb-[10px] text-[48px]">
            {TITLE}
          </h1>
          <h3 className="text-white mb-[30px] text-[24px]">
            {SUBTITLE}
          </h3>
          <button
            className="border border-white text-white rounded-2xl text-[16px] px-[24px] py-[12px] transition-colors hover:bg-white hover:text-black">
            {BUTTON_TEXT}
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;
