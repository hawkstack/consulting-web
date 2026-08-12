import EventsCTASection from "@/components/home/events-webinars/components/EventsCTASection";
import EventsHeroSection from "@/components/home/events-webinars/components/EventsHeroSection";
import TechnicalArticlesSection from "@/components/home/events-webinars/components/TechnicalArticlesSection";
import TechnicalDomainsSection from "@/components/home/events-webinars/components/TechnicalDomainsSection";
import UpcomingEventsSection from "@/components/home/events-webinars/components/UpcomingEventsSection";
import WhyHawkStackSection from "@/components/home/events-webinars/components/WhyHawkStackSection";
import React from "react";

const page = () => {
  return (
    <div>
      <EventsHeroSection />
      <WhyHawkStackSection />
      <TechnicalDomainsSection />
      <UpcomingEventsSection />
      <TechnicalArticlesSection />
      <EventsCTASection />
    </div>
  );
};

export default page;
