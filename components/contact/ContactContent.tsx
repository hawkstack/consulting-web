import { contactInfoData } from "@/data/contact/contact";
import ContactInfo from "./ContactInfo";
import AppModernizationContactForm from "../app-modernization/ContactForm";
import { appModernizationHeroContent } from "@/data/app-modernization/app-modernization";

const ContactContent = () => {
  return (
    <section id="contact-section" className="bg-[#F8FAFC] py-12 px-4 md:px-10 lg:px-12">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 md:gap-6 lg:gap-0">
        {/* LEFT */}
        <div className="self-start h-auto my-auto">
          <AppModernizationContactForm
            form={appModernizationHeroContent.form}
          />
        </div>
        {/* RIGHT */}
        <ContactInfo data={contactInfoData} />
      </div>
    </section>
  );
};

export default ContactContent;
