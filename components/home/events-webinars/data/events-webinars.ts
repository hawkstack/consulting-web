import type {
  EventsCTAData,
  EventsHeroData,
  TechnicalDomainsData,
  TechnicalArchiveData,
  UpcomingEventsData,
  WhyAttendEventsData,
} from "@/components/home/events-webinars/types/events-webinars";
import ArtificialIntelligenceIcon from "@/components/home/icons/events-webinars/ArtificialIntelligenceIcon";
import CloudComputingIcon from "@/components/home/icons/events-webinars/CloudComputingIcon";
import CybersecurityIcon from "@/components/home/icons/events-webinars/CybersecurityIcon";
import DigitalTransformationIcon from "@/components/home/icons/events-webinars/DigitalTransformationIcon";
import ProductEngineeringIcon from "@/components/home/icons/events-webinars/ProductEngineeringIcon";
import RedHatTechnologyIcon from "@/components/home/icons/events-webinars/RedHatTechnologyIcon";
import SoftwareDevelopmentIcon from "@/components/home/icons/events-webinars/SoftwareDevelopmentIcon";
import UiUxDesignIcon from "@/components/home/icons/events-webinars/UiUxDesignIcon";
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

export const eventsCTAData: EventsCTAData = {
  title: "Never Miss a Session.\nJoin the HawkStack Community.",
  description:
    "Get monthly updates on upcoming technical deep-dives, industry panels, and hands-on workshops delivered to your inbox.",
  cta: {
    label: "Register Now",
    href: "/contact-us",
  },
};

export const technicalDomainsData: TechnicalDomainsData = {
  title: "Focused Technical Domains",
  items: [
    { label: "Red Hat Technology", icon: RedHatTechnologyIcon },
    { label: "Artificial Intelligence", icon: ArtificialIntelligenceIcon },
    { label: "Cloud Computing", icon: CloudComputingIcon },
    { label: "Cybersecurity", icon: CybersecurityIcon },
    { label: "Digital Transformation", icon: DigitalTransformationIcon },
    { label: "Software Development", icon: SoftwareDevelopmentIcon },
    { label: "UI/UX Design", icon: UiUxDesignIcon },
    { label: "Product Engineering", icon: ProductEngineeringIcon },
  ],
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

export const technicalArchiveData: TechnicalArchiveData = {
  title: "Technical Archive",
  description:
    "Missed a session? Browse our library of past technical deep dives.",
  tabs: [
    {
      label: "Past Events",
      items: [
        {
          title: "Building Scalable Cloud-Native Applications",
          description:
            "A deep-dive into microservices architecture and serverless deployments at global scale.",
        },
        {
          title: "Enterprise Security & Compliance",
          description:
            "How to implement zero-trust security models across distributed engineering teams.",
        },
        {
          title: "Cloud Migration Made Simple",
          description:
            "Strategies for migrating legacy monoliths to AWS and Azure with zero downtime.",
        },
      ],
    },
    {
      label: "Past Webinars",
      items: [
        {
          title: "AI in Enterprise Applications",
          description:
            "Explore practical AI use cases that improve productivity and customer experience.",
        },
        {
          title: "Modern Cloud Migration Strategies",
          description:
            "Learn how organizations successfully migrate workloads to the cloud while reducing risk and cost.",
        },
        {
          title: "Cybersecurity in 2026",
          description:
            "Understand evolving cyber threats and discover proactive security strategies for modern enterprises.",
        },
      ],
    },
    {
      label: "Past Workshops",
      items: [
        {
          title: "Hands-on Kubernetes Bootcamp",
          description:
            "Build, deploy, and manage applications using Kubernetes with live demonstrations and practical exercises.",
        },
        {
          title: "OpenShift Platform Administration",
          description:
            "Learn enterprise container platform management using Red Hat OpenShift.",
        },
        {
          title: "Infrastructure as Code using Terraform",
          description:
            "Automate cloud infrastructure provisioning using Terraform and industry best practices.",
        },
      ],
    },
  ],
};
