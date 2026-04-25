import { ContactHeroData } from "@/app/types/contact";

interface Props {
  data: ContactHeroData;
}

const ContactHero = ({ data }: Props) => {
  const { title, description } = data;

  return (
    <section className="relative w-full text-white overflow-hidden">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(7,29,120,0.6),transparent_70%),linear-gradient(115deg,#040A1D_0%,#040A1D_100%,#071D78_100%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold leading-tight">
          {title}
        </h1>

        <p className="mt-4 text-xs xl:text-base text-gray-300 max-w-[300px] md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Bottom Slant Shape */}
      <div
        className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-[#F8F9FF] z-10"
        style={{
          clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)",
        }}
      />
    </section>
  );
};

export default ContactHero;
