interface Props {
  activeSection: number;
  onItemClick: (index: number) => void;
  items?: string[];
}

const defaultMenuItems = [
  "Information We Collect",
  "Legal Basis for Processing",
  "How We Use Your Information",
  "Data Sharing, Confidentiality, and International Transfers",
  "Data Security and Enterprise Retention",
  "Your Rights (GDPR / CCPA / Global Privacy Rights)",
  "Children's Privacy",
  "Contact Us",
];

export default function PrivacySidebar({
  activeSection,
  onItemClick,
  items,
}: Props) {
  const menuItems = items ?? defaultMenuItems;
  return (
    <aside className="md:w-[190px] lg:w-[220px] xl:w-[240px] bg-[#F8F8F8] rounded-[24px] px-2 py-2 lg:px-3 lg:py-3 xl:px-4 xl:py-4 h-fit sticky top-5">
      {/* Menu Items */}
      <div className="flex flex-col gap-1 lg:gap-2 xl:gap-3">
        {menuItems.map((item, index) => {
          const isActive = activeSection === index;

          return (
            <div
              key={index}
              onClick={() => onItemClick(index)}
              className={`cursor-pointer rounded-[18px] px-2 py-2 lg:py-3 xl:px-4 xl:py-3 flex items-center gap-3 transition-all duration-200 ${
                isActive ? "bg-[#1e50da] shadow-sm" : "hover:bg-[#EEF4FF]"
              }`}
            >
              {/* Number */}
              <div
                className={`min-w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold ${
                  isActive
                    ? "bg-white text-[#2F5BFF]"
                    : "bg-[#E4E9F5] text-[#2F5BFF]"
                }`}
              >
                {index + 1}
              </div>

              {/* Text */}
              <p
                className={`text-[12px] xl:text-[13px] leading-[18px] font-semibold ${
                  isActive ? "text-white" : "text-[#3D4657]"
                }`}
              >
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
