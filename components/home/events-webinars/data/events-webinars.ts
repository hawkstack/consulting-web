import type { EventsHeroData } from "@/components/home/events-webinars/types/events-webinars";
import type { WhyAttendEventsData } from "@/components/home/events-webinars/types/events-webinars";
import CertifiedProfessionalsIcon from "@/components/icons/events-webinars/CertifiedProfessionalsIcon";
import DiscoverTrendsIcon from "@/components/icons/events-webinars/DiscoverTrendsIcon";
import LeaderNetworkingIcon from "@/components/icons/events-webinars/LeaderNetworkingIcon";
import LiveQaIcon from "@/components/icons/events-webinars/LiveQaIcon";
import PracticalStrategiesIcon from "@/components/icons/events-webinars/PracticalStrategiesIcon";
import SuccessStoriesIcon from "@/components/icons/events-webinars/SuccessStoriesIcon";

export const eventsHeroData: EventsHeroData = {
  eyebrow: "EVENTS & WORKSHOPS",
  title: "Stay Connected with HawkStack Engineering",
  description:
    "Expert-led webinars, technical workshops, and industry events designed to drive digital transformation and practical implementation strategies for modern enterprise architectures.",
  cta: {
    label: "Register for Upcoming Events",
    href: "/contact-us",
  },
};

export const whyAttendEventsData: WhyAttendEventsData = {
  title: "Why Attend HawkStack Events?",
  items: [
    {
      title: "Certified Professionals",
      description:
        "Learn directly from our architects and engineers who implement these solutions for Fortune 500 enterprises daily.",
      icon: CertifiedProfessionalsIcon,
    },
    {
      title: "Discover Trends",
      description:
        "Stay ahead of the curve with insights into emerging technologies like Generative AI, Web3, and Post-Quantum Cryptography.",
      icon: DiscoverTrendsIcon,
    },
    {
      title: "Practical Strategies",
      description:
        "Move beyond theory with actionable blueprints and implementation strategies you can apply to your stack immediately.",
      icon: PracticalStrategiesIcon,
    },
    {
      title: "Live Q&A Sessions",
      description:
        "Engage directly with experts in real-time, getting your specific architectural and operational questions answered.",
      icon: LiveQaIcon,
    },
    {
      title: "Success Stories",
      description:
        "Explore real-world case studies and hear how leading organizations solved complex technical challenges with HawkStack.",
      icon: SuccessStoriesIcon,
    },
    {
      title: "Leader Networking",
      description:
        "Connect with a community of CTOs, VPs of Engineering, and senior architects navigating the same challenges.",
      icon: LeaderNetworkingIcon,
    },
  ],
};
