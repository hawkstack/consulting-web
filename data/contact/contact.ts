// Contact Hero data
import {
  ContactHeroData,
  ContactInfoData,
  CTASectionData,
} from "@/app/types/contact";
import Facebook from "@/components/icons/contact/Facebook";
import Linkedin from "@/components/icons/contact/Linkedin";
import Twitter from "@/components/icons/contact/Twitter";
import Youtube from "@/components/icons/contact/Youtube";

export const contactHeroData: ContactHeroData = {
  title: "Feel free to get in touch",
  description:
    "Have a project, question, or opportunity in mind? Connect with HawkStack and let's build smart digital solutions together.",
};

// CTA Section data
export const ctaSectionData: CTASectionData = {
  badge: "We're Ready 24 Hours",
  heading: "Have a project in mind?",
  highlightText: " Let’s Talk",
  description:
    "Share your idea with us and we’ll help transform it into a clean, scalable, and impactful digital experience.",
  buttonText: "Contact Us",
};

// Contact Section data
export const contactInfoData: ContactInfoData = {
  title: "Find Us",
  description:
    "Got a project idea or need expert support? Our team is ready to understand your goals and help you move forward with confidence.",
  mapImage: "/images/contact/map.webp",
  address:
    "1st Floor, Rastrakan Kuvempu, Office, 940, 16th Main Rd, opposite Bata, BTM 2nd Stage, Mico Layout, BTM Layout 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076",
  phone: "+91 8884447694",
  hours: "Mon - Sat, 10 AM - 7 PM",
  email: "consulting@hawkstack.com",

  socials: [
    {
      icon: Facebook,
      link: "https://facebook.com",
    },
    {
      icon: Twitter,
      link: "https://twitter.com",
    },
    {
      icon: Linkedin,
      link: "https://linkedin.com",
    },
    {
      icon: Youtube,
      link: "https://youtube.com",
    },
  ],
};
