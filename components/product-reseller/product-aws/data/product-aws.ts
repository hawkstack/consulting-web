import type { ProductAwsPageContent } from "@/components/product-reseller/product-aws/types/product-aws";
import EnterpriseLinuxIcon from "@/components/icons/product-reseller/product-aws/EnterpriseLinuxIcon";
import ManagedOpenShiftIcon from "@/components/icons/product-reseller/product-aws/ManagedOpenShiftIcon";
import AnsibleAutomationIcon from "@/components/icons/product-reseller/product-aws/AnsibleAutomationIcon";
import HybridCloudIcon from "@/components/icons/product-reseller/product-aws/HybridCloudIcon";
import ReadinessAssessmentIcon from "@/components/icons/product-reseller/product-aws/ReadinessAssessmentIcon";
import HybridCloudIntegrationIcon from "@/components/icons/product-reseller/product-aws/HybridCloudIntegrationIcon";
import OperationsVisibilityIcon from "@/components/icons/product-reseller/product-aws/OperationsVisibilityIcon";

export const productAwsPageData: ProductAwsPageContent = {
  hero: {
    eyebrow: "AWS PREMIER TIER PARTNER",
    title: "Industrial Grade AWS Infrastructure for the Modern Enterprise.",
    description:
      "Deploy resilient, high-uptime Kubernetes clusters and Linux modernization engines with HawkStack. We bridge the gap between institutional reliability and cloud agility.",
    image: "/images/product-aws/aws-hero.webp",

    primaryButton: {
      label: "Request Strategy Session",
      href: "",
    },

    secondaryButton: {
      label: "View Documentation",
      href: "",
    },
  },
  infrastructure: {
    title: "Core Infrastructure Solutions",
    description:
      "Tailored architectural building blocks designed to handle the most demanding enterprise workloads on AWS.",
    solutions: [
      {
        title: "Enterprise Linux",
        description:
          "Hardened, secure operating system distribution optimized for AWS EC2 performance.",
        icon: EnterpriseLinuxIcon,
        href: "",
      },
      {
        title: "Managed OpenShift",
        description:
          "Streamlined Kubernetes operations with Red Hat OpenShift on AWS (ROSA).",
        icon: ManagedOpenShiftIcon,
        href: "",
      },
      {
        title: "Ansible Automation",
        description:
          "Scale infrastructure configuration without increasing operational overhead.",
        icon: AnsibleAutomationIcon,
        href: "",
      },
      {
        title: "Hybrid Cloud",
        description:
          "Seamlessly bridge your on-premise data centers with AWS cloud ecosystems.",
        icon: HybridCloudIcon,
        href: "",
      },
    ],
  },
  enterpriseCapabilities: {
    title: "Enterprise Capabilities",
    description:
      "Our specialized framework for AWS infrastructure deployment ensures every technical decision is aligned with business value.",
    capabilities: [
      {
        title: "Readiness Assessment",
        description:
          "Deep-dive technical audits of your current stack to identify bottlenecks, security gaps, and optimization opportunities before migration begins.",
        icon: ReadinessAssessmentIcon,
      },
      {
        title: "Hybrid Cloud Integration",
        description:
          "Architecture patterns that allow for seamless data portability and workload orchestration between private clouds and AWS public infrastructure.",
        icon: HybridCloudIntegrationIcon,
      },
      {
        title: "Operations Visibility",
        description:
          "Full-stack observability implementation using modern tools to provide real-time insights into system health and resource consumption.",
        icon: OperationsVisibilityIcon,
      },
    ],
  },
  modernizationEngine: {
    title: "The Modernization Engine",
    description:
      "See how HawkStack transforms fragmented legacy systems into unified, high-performance AWS cloud ecosystems.",
    currentState: [
      "Manual Patching Cycles",
      "Fragmented Silos",
      "Inconsistent Security Policies",
      "High Operational Toil",
    ],
    targetState: [
      "Automated CI/CD Pipelines",
      "Unified Platform Governance",
      "Continuous Compliance",
      "Policy-as-Code Automation",
    ],
  },
  cta: {
    title: "Ready to Modernize Your Stack?",
    description:
      "Schedule a direct technical consultation with our principal architects to discuss your AWS infrastructure roadmap.",
    primaryButton: {
      label: "Request Strategy Session",
      href: "",
    },
    secondaryButton: {
      label: "Talk to an Expert",
      href: "",
    },
  },
};
