export type FooterLink = {
  id: string;
  href: string;
};

export const socialIcons = [
  {
    src: "/images/socialmedia/facebook.webp",
    alt: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61560462899701",
  },
  {
    src: "/images/socialmedia/linkedin.webp",
    alt: "LinkedIn",
    href: "https://www.linkedin.com/company/hawkstack-technologies/?viewAsMember=true",
  },
  {
    src: "/images/socialmedia/twitter.webp",
    alt: "Twitter",
    href: "https://x.com/hawkstack_tech",
  },
  {
    src: "/images/socialmedia/instagram.webp",
    alt: "Instagram",
    href: "https://www.instagram.com/hawkstack_technologies",
  },
];

export const servicesLinks: FooterLink[] = [
  { id: "appModernization", href: "/app-modernization" },
  { id: "kubevirt", href: "/kubevirt-service" },
  { id: "automation", href: "/automation" },
  { id: "cloudPlatformOperation", href: "/cloud-platform-operations" },
  { id: "consultingServices", href: "/consulting-service" },
  { id: "trainingServices", href: "/training-services" },
  { id: "kubernetesAsAService", href: "/kubernetes-as-a-services" },
];

export const trainingLinks: FooterLink[] = [
  { id: "mirantis", href: "/coming-soon" },
  { id: "cncf", href: "/coming-soon" },
  { id: "redhatSolution", href: "/coming-soon" },
  { id: "linuxFoundation", href: "/coming-soon" },
  { id: "customisedTraining", href: "/coming-soon" },
];

export const solutionLinks: FooterLink[] = [
  { id: "redhat", href: "/product-reseller/redhat" },
  { id: "cncf", href: "/product-reseller/cncf" },
  { id: "mirantis", href: "/product-reseller/mirantis" },
  { id: "aws", href: "/product-reseller/aws" },
  { id: "gcp", href: "/product-reseller/gcp" },
  { id: "azure", href: "/product-reseller/azure" },
];

export const companyLinks: FooterLink[] = [
  { id: "blog", href: "/blogs" },
  { id: "career", href: "/career" },
  { id: "gallery", href: "/gallery" },
  { id: "partner", href: "/partner" },
  { id: "eventsWebinars", href: "/events-webinars" },
  { id: "trendsInsights", href: "/trends-insights" },
];

export const policyLinks: FooterLink[] = [
  { id: "privacyPolicy", href: "/privacy-policy" },
  { id: "cookiePolicy", href: "/cookie-policy" },
  { id: "termsOfUse", href: "/terms-of-use" },
];
