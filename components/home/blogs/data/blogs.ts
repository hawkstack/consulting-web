import type {
  BlogHeroData,
  BlogCategoriesData,
  FeaturedBlogData,
  LatestEngineeringUpdatesData,
  SuccessStoriesData,
  CertificationPathsData,
  EngineeringToolkitData,
  CTAData,
  BlogTopicsData,
} from "@/components/home/blogs/types/blogs";
import CloudIcon from "@/components/icons/blogs/CloudIcon";
import DatabaseIcon from "@/components/icons/blogs/DatabaseIcon";
import GitBranchIcon from "@/components/icons/blogs/GitBranchIcon";
import ShieldIcon from "@/components/icons/blogs/ShieldIcon";
import AutomationArmIcon from "@/components/icons/blogs/AutomationArmIcon";
import BidirectionalArrowsIcon from "@/components/icons/blogs/BidirectionalArrowsIcon";
import CertificateCardIcon from "@/components/icons/blogs/CertificateCardIcon";
import GridIcon from "@/components/icons/blogs/GridIcon";
import PerformanceIcon from "@/components/icons/blogs/PerformanceIcon";
import UptimeIcon from "@/components/icons/blogs/UptimeIcon";
import CheatSheetIcon from "@/components/icons/blogs/CheatSheetIcon";
import CodeBracketsIcon from "@/components/icons/blogs/CodeBracketsIcon";
import TemplateIcon from "@/components/icons/blogs/TemplateIcon";

export const blogHeroData: BlogHeroData = {
  title: "HawkStack Engineering Hub",
  description:
    "Stay updated with practical engineering insights, enterprise architecture blueprints, Linux administration guides,Kubernetes best practices, OpenShift deployments, automation strategies, cloud-native technologies, DevOps practices, and real-world infrastructure modernization experiences from the HawkStack engineering team. Our Engineering Hub is designed to help IT professionals, platform engineers, system administrators, cloud architects, and developers learn through production focused technical content.",
  image: "/images/blogs/hero-illustration.webp",
  imageAlt: "HawkStack engineering hub illustration",
  badgeText: "Enterprise Certified Blueprints",
};

export const featuredBlogData: FeaturedBlogData = {
  eyebrow: "EDITOR'S CHOICE",
  category: "OpenShift & Kubernetes",
  title:
    "Optimizing Multi-Tenant Ingress and OVN-Kubernetes Networking in Enterprise OpenShift Clusters",
  description:
    "Deep dive into the architectural considerations for large-scale networking, performance tuning of OVN-Kubernetes, and managing complex ingress traffic across multiple tenants.",
  tags: ["OVN-Kubernetes", "Cluster Operators", "Network Policies"],
  image: "/images/blogs/featured-blog.webp",
  imageAlt: "OpenShift and Kubernetes network architecture diagram",
};

export const latestEngineeringUpdatesData: LatestEngineeringUpdatesData = {
  title: "Latest Engineering Insights",
  description: "Updated weekly with production-tested experiences.",
  updates: [
    {
      category: "Security",
      title: "Understanding SELinux Without Disabling Enforcing Mode",
      description:
        "Mastering contexts, boolean values, and audit2allow for complex application deployments.",
      image: "/images/blogs/engineering-insights-security.webp",
      imageAlt: "SELinux security illustration",
      imagePosition: "left",
    },
    {
      category: "Automation",
      title: "Building Idempotent Ansible Playbooks for Automation",
      description:
        "Ensure state-consistency across thousands of nodes with advanced error handling and logic.",
      image: "/images/blogs/engineering-insights-automation.webp",
      imageAlt: "Ansible automation illustration",
      imagePosition: "center",
    },
    {
      category: "GitOps",
      title: "Managing K8s Deployments with GitOps and Argo CD",
      description:
        "Implementing declarative continuous delivery for automated cluster state synchronization.",
      image: "/images/blogs/engineering-insights-gitops.webp",
      imageAlt: "GitOps deployment illustration",
      imagePosition: "right",
    },
  ],
};

export const blogCategoriesData: BlogCategoriesData = {
  trendingTitle: "Trending Technologies",
  trendingDescription:
    "The stack we use and advocate for in production environments.",
  technologies: [
    "OpenShift",
    "Kubernetes",
    "KubeVirt",
    "Ansible",
    "GitOps",
    "Ceph",
    "Tekton",
    "Service Mesh",
  ],
  blueprintsTitle: "Architecture Blueprints",
  blueprints: [
    {
      title: "Enterprise OpenShift",
      description: "Production-ready reference architecture.",
      icon: GitBranchIcon,
    },
    {
      title: "Hybrid Cloud CI/CD",
      description: "Unified pipeline for multi-cloud deployments.",
      icon: CloudIcon,
    },
    {
      title: "Zero Trust K8s",
      description: "Securing container communications.",
      icon: ShieldIcon,
    },
    {
      title: "HA Storage Layer",
      description: "Persistent storage for stateful workloads.",
      icon: DatabaseIcon,
    },
  ],
};

export const successStoriesData: SuccessStoriesData = {
  title: "Engineering Success Stories",
  stories: [
    {
      label: "CASE STUDY #42",
      title: "Financial Services Modernization with KubeVirt",
      description:
        "Consolidated legacy VMs and modern containers onto a single control plane for a Tier-1 global bank.",
      metrics: [
        { label: "40% reduction in infra overhead", icon: PerformanceIcon },
        { label: "99.99% uptime during migration", icon: PerformanceIcon },
      ],
      tags: ["KubeVirt", "OpenShift"],
    },
    {
      label: "CASE STUDY #38",
      title: "Automated DevOps for Healthcare Provider",
      description:
        "Reduced deployment times from 3 weeks to 15 minutes using GitOps and Ansible automation.",
      metrics: [
        { label: "Zero-touch provisioning enabled", icon: PerformanceIcon },
        { label: "HIPAA-compliant security pipelines", icon: UptimeIcon },
      ],
      tags: ["Ansible", "GitOps"],
    },
  ],
};

export const certificationPathsData: CertificationPathsData = {
  title: "Certification Mastery",
  description:
    "Focused learning paths designed by engineers for engineers. Accelerate your professional career.",
  paths: [
    {
      title: "RHCSA",
      description: "Red Hat Certified System Administrator path.",
      icon: CertificateCardIcon,
    },
    {
      title: "RHCE",
      description: "Red Hat Certified Engineer & Automation.",
      icon: BidirectionalArrowsIcon,
    },
    {
      title: "CKA / CKAD",
      description: "Certified Kubernetes Admin & Dev.",
      icon: GridIcon,
    },
    {
      title: "EX407",
      description: "Ansible Automation Specialist pathway.",
      icon: AutomationArmIcon,
    },
  ],
};

export const engineeringToolkitData: EngineeringToolkitData = {
  title: "Engineering Toolbox",
  items: [
    {
      title: "Linux Cheat Sheets",
      description: "Essential commands for RHEL/Fedora.",
      icon: CheatSheetIcon,
    },
    {
      title: "CLI Guides",
      description: "Advanced oc, kubectl, and podman tips.",
      icon: CodeBracketsIcon,
    },
    {
      title: "YAML Templates",
      description: "Copy-paste production resources.",
      icon: TemplateIcon,
    },
  ],
};

export const ctaData: CTAData = {
  title: "Need Expert Guidance for Your Infrastructure?",
  description:
    "Our senior engineers are ready to help you navigate modernization, automation, and hybrid cloud challenges.",
  buttonLabel: "Book a Technical Consultation",
  buttonHref: "/contact-us",
};

export const blogTopicsData: BlogTopicsData = {
  topics: [
    "Linux",
    "Red Hat",
    "OpenShift",
    "Kubernetes",
    "Containers",
    "Podman",
    "Buildah",
    "Ansible",
    "KubeVirt",
    "GitOps",
    "Cloud",
  ],
};
