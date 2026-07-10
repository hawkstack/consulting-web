import CloudAutomationIcon from "@/components/icons/product-reseller/product-gcp/CloudAutomationIcon";
import EnterpriseLinuxIcon from "@/components/icons/product-reseller/product-gcp/EnterpriseLinuxIcon";
import InfrastructureAdminIcon from "@/components/icons/product-reseller/product-gcp/InfrastructureAdminIcon";
import ModernAppPlatformIcon from "@/components/icons/product-reseller/product-gcp/ModernAppPlatformIcon";
import type { ProductGcpPageContent } from "@/components/product-reseller/product-gcp/types/product-gcp";

export const productGcpPageData: ProductGcpPageContent = {
  hero: {
    eyebrow: "NEXT GEN GCP ENGINEERING",
    title:
      "Build Google Cloud Expertise with Red Hat Powered Engineering Skills",
    description:
      "Unlock elite engineering capabilities across the Google Cloud ecosystem. We bridge the gap between enterprise Linux stability and hyperscale cloud agility.",
    image: "/images/product-gcp/gcp.webp",
    imageAlt: "Google Cloud engineering illustration",
  },
  solutions: {
    title: "Enterprise Google Cloud Solutions",
    description: "Four strategic pillars engineered for massive scale and technical sovereignty.",
    cards: [
      {
        icon: EnterpriseLinuxIcon,
        title: "Enterprise Linux",
        description:
          "Optimized RHEL distributions specifically tuned for GCP's Compute Engine performance.",
        action: {
          label: "Explore",
          href: "/product-reseller/gcp#enterprise-linux",
          ariaLabel: "Explore Enterprise Linux Google Cloud solutions",
        },
      },
      {
        icon: InfrastructureAdminIcon,
        title: "Infrastructure Admin",
        description:
          "Automated lifecycle management and high-availability architecture for hybrid cloud.",
        action: {
          label: "Explore",
          href: "/product-reseller/gcp#infrastructure-admin",
          ariaLabel: "Explore Infrastructure Admin Google Cloud solutions",
        },
      },
      {
        icon: CloudAutomationIcon,
        title: "Cloud Automation",
        description:
          "Ansible driven configuration management to eliminate manual drifting and human error.",
        action: {
          label: "Explore",
          href: "/product-reseller/gcp#cloud-automation",
          ariaLabel: "Explore Cloud Automation Google Cloud solutions",
        },
      },
      {
        icon: ModernAppPlatformIcon,
        title: "Modern App Platform",
        description:
          "Container-native development leveraging Anthos and GKE for global deployment.",
        action: {
          label: "Explore",
          href: "/product-reseller/gcp#modern-app-platform",
          ariaLabel: "Explore Modern App Platform Google Cloud solutions",
        },
      },
    ],
  },
  // benefits: {},
  // cta: {},
};
