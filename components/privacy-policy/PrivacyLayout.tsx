"use client";

import { useEffect, useRef, useState } from "react";

import PrivacySidebar from "./PrivacySidebar";
import PrivacyHeader from "./PrivacyHeader";
import PrivacyCard from "./PrivacyCard";

type Section = {
  title: string;
  description?: string;
  points?: any[];
  note?: string;
  noteEmail?: string;
  contactInfo?: any;
};

type HeaderProps = {
  title?: string;
  effectiveDate?: string;
  intro?: string;
  siteUrl?: string;
};

type Props = {
  sections: Section[];
  headerProps?: HeaderProps;
};

export default function PrivacyLayout({ sections, headerProps }: Props) {
  const contentSections = sections;

  const [activeSection, setActiveSection] = useState(0);

  // prevents sidebar flickering during smooth scroll
  const isManualScrolling = useRef(false);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(`privacy-section-${index}`);

    if (element) {
      isManualScrolling.current = true;

      // instantly activate clicked item
      setActiveSection(index);

      // navbar height offset
      const navbarOffset = 120;

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // allow observer after smooth scroll completes
      setTimeout(() => {
        isManualScrolling.current = false;
      }, 700);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // prevent active state jump during manual scroll
      if (isManualScrolling.current) return;

      const sections = document.querySelectorAll("[data-section]");

      let currentSection = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        // section nearest to top becomes active
        if (rect.top <= 240) {
          currentSection = index;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    // initial active state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF] p-4 md:p-6 flex justify-center">
      <div className="w-full lg:max-w-[950px] xl:max-w-[1160px] flex gap-2 lg:gap-4">
        <div className="hidden md:block">
          <PrivacySidebar
            activeSection={activeSection}
            onItemClick={scrollToSection}
            items={contentSections.map((s) => s.title)}
          />
        </div>

        <main className="flex-1 bg-[#F8F8F8] rounded-[28px] p-4 lg:p-6 xl:p-8">
          <PrivacyHeader {...(headerProps ?? {})} />

          <div className="space-y-5">
            {contentSections.map((section, index) => (
              <div
                key={index}
                id={`privacy-section-${index}`}
                data-section
                data-index={index}
              >
                <PrivacyCard
                  title={section.title}
                  description={section.description}
                  points={section.points}
                  index={index + 1}
                  note={section.note}
                  noteEmail={section.noteEmail}
                  contactInfo={section.contactInfo}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
