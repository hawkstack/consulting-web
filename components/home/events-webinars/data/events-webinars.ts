import type {
  EventsHeroData,
  UpcomingEventsData,
  WhyAttendEventsData,
} from "@/components/home/events-webinars/types/events-webinars";
import CertifiedProfessionalsIcon from "@/components/icons/events-webinars/CertifiedProfessionalsIcon";
import DiscoverTrendsIcon from "@/components/icons/events-webinars/DiscoverTrendsIcon";
import LeaderNetworkingIcon from "@/components/icons/events-webinars/LeaderNetworkingIcon";
import LiveQaIcon from "@/components/icons/events-webinars/LiveQaIcon";
import PracticalStrategiesIcon from "@/components/icons/events-webinars/PracticalStrategiesIcon";
import SuccessStoriesIcon from "@/components/icons/events-webinars/SuccessStoriesIcon";
import KeyTopicIcon from "@/components/icons/events-webinars/KeyTopicIcon";

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

export const upcomingEventsData: UpcomingEventsData = {
  title: "Upcoming Events, Webinars & Workshops",
  description: "Join our next live deep-dive sessions. Save your spot today.",
  registerInterest: {
    label: "Register Interest",
    href: "/contact-us",
  },
  events: [
    {
      title: "AI Powered Enterprise Solutions",
      description:
        "Explore Generative AI, LLMs, and intelligent automation for scale.",
      image: "/images/events-webinars/ai-powered-enterprise-solutions.webp",
      topics: [
        { label: "Enterprise AI", icon: KeyTopicIcon },
        { label: "AI Governance", icon: KeyTopicIcon },
        { label: "Chatbots", icon: KeyTopicIcon },
        { label: "Use Cases", icon: KeyTopicIcon },
      ],
    },
    {
      title: "Kubernetes & Cloud-Native Applications",
      description: "Simplify deployment, scaling, and lifecycle management.",
      image:
        "/images/events-webinars/kubernetes-cloud-native-applications.webp",
      topics: [
        { label: "Orchestration", icon: KeyTopicIcon },
        { label: "High Availability", icon: KeyTopicIcon },
        { label: "Production Tips", icon: KeyTopicIcon },
        { label: "Best Practices", icon: KeyTopicIcon },
      ],
    },
    {
      title: "Modern DevOps & CI/CD Best Practices",
      description: "Accelerate software delivery with world-class automation.",
      image: "/images/events-webinars/modern-devops-cicd-best-practices.webp",
      topics: [
        { label: "GitOps Flow", icon: KeyTopicIcon },
        { label: "IaC Strategy", icon: KeyTopicIcon },
        { label: "DevSecOps", icon: KeyTopicIcon },
        { label: "Automation Tools", icon: KeyTopicIcon },
      ],
    },
    {
      title: "Hybrid Cloud & Multi-Cloud Strategies",
      description:
        "Optimize workloads across diverse public and private environments.",
      image: "/images/events-webinars/hybrid-multi-cloud-strategies.webp",
      topics: [
        { label: "Workload Optimization", icon: KeyTopicIcon },
        { label: "Migration Paths", icon: KeyTopicIcon },
        { label: "Cloud Governance", icon: KeyTopicIcon },
        { label: "Cost Management", icon: KeyTopicIcon },
      ],
    },
  ],
};
