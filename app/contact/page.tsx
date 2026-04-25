import ContactContent from "@/components/contact/ContactContent";
import ContactCta from "@/components/contact/ContactCta";
import ContactHero from "@/components/contact/ContactHero";
import { contactHeroData } from "@/data/contact/contact";

const page = () => {
  return (
    <div>
      <ContactHero data={contactHeroData} />
      <ContactContent />
      <ContactCta />
    </div>
  );
};

export default page;
