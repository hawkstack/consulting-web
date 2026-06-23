import ContactContent from "@/components/contact-us/ContactContent";
import ContactCta from "@/components/contact-us/ContactCta";
import ContactHero from "@/components/contact-us/ContactHero";
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
