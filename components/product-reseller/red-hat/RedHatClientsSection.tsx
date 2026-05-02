import Image from "next/image";
import { RedHatClientsSectionData } from "@/app/types/product-reseller/red-hat";

interface Props {
  data: RedHatClientsSectionData;
}

const RedHatClientsSection = ({ data }: Props) => {
  const { heading, highlightText, description, clients } = data;

  const chunkSize = Math.ceil(clients.length / 3);

  const row1 = clients.slice(0, chunkSize);
  const row2 = clients.slice(chunkSize, chunkSize * 2);
  const row3 = clients.slice(chunkSize * 2);

  const renderRow = (logos: any[], reverse = false, keyPrefix = "") => (
    <div className="w-full overflow-hidden">
      <div
        className={`rh-clients-track ${reverse ? "rh-clients-track-reverse" : ""}`}
      >
        {[...logos, ...logos, ...logos].map((client, i) => (
          <div
            key={`${keyPrefix}-${i}`}
            className="w-[42px] h-[16px] md:w-[74px] md:h-[27px] xl:w-[130px] xl:h-[50px]
            rounded-md xl:rounded-xl
          bg-white
            shrink-0 overflow-hidden relative"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={130}
              height={50}
              className="object-cover justify-center items-center "
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#0A0F1C] py-16">
      <div className="w-full mx-auto text-center">
        {/* Heading */}
        <h2 className="text-white text-xl md:text-2xl lg:text-4xl xl:text-[42px] font-semibold leading-tight max-w-[600px] mx-auto">
          {heading} <span className="text-[#F30000]">{highlightText}</span>
        </h2>

        {/* Description */}
        <p className="text-white mt-2 text-xs md:text-base mx-auto w-xs md:w-lg lg:w-2xl">
          {description}
        </p>

        {/* ROWS */}
        <div className="mt-10 space-y-2 md:space-y-3 lg:space-y-5 xl:space-y-6">
          {renderRow(row1, false, "row1")}
          {renderRow(row2, true, "row2")}
          {renderRow(row3, false, "row3")}
        </div>
      </div>
    </section>
  );
};

export default RedHatClientsSection;
