import ContactContent from "@/components/contact/ContactContent";
import ContactCta from "@/components/contact/ContactCta";
import ContactHero from "@/components/contact/ContactHero";
import { contactHeroData, ctaSectionData } from "@/data/contact/contact";

const page = () => {
  return (
    <div>
      <ContactHero data={contactHeroData} />
      <ContactContent />
      <ContactCta data={ctaSectionData} />
    </div>
  );
};

export default page;
