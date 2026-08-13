import type { ComponentType } from "react";

export type EventsHeroData = {
  eyebrow: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
};

export type WhyAttendEventItem = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

export type WhyAttendEventsData = {
  title: string;
  items: WhyAttendEventItem[];
};

export type UpcomingEventTopic = {
  label: string;
  icon: ComponentType<{ className?: string }>;
};

export type UpcomingEventItem = {
  title: string;
  description: string;
  image: string;
  topics: UpcomingEventTopic[];
};

export type UpcomingEventsData = {
  title: string;
  description: string;
  registerInterest: {
    label: string;
    href: string;
  };
  events: UpcomingEventItem[];
};
