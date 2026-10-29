import { MegaItem, OfferingsMenuContent } from "./types";
import { PRODUCT_TYPES } from "@/constants/productReseller";
import { homePageData } from "@/data/home/home";
import { solutions } from "@/data/solutions";

/* ================= PRODUCTS ================= */
export const products: MegaItem[] = [
  {
    id: "linux",
    translationKey: "linux",
    image: "/images/products/RedHat-Linux.webp",
  },
  {
    id: "ansible",
    translationKey: "ansible",
    image: "/images/products/RedHat-Ansible.webp",
  },
  {
    id: "openshift",
    translationKey: "openshift",
    image: "/images/products/RedHat-OpenShift.webp",
  },
  {
    id: "openstack",
    translationKey: "openstack",
    image: "/images/products/RedHat-OpenStack.webp",
  },
  {
    id: PRODUCT_TYPES.CNCF,
    translationKey: "cncf",
    image: "/images/products/CNCF.webp",
  },
  {
    id: PRODUCT_TYPES.MIRANTIS,
    translationKey: "mirantis",
    image: "/images/products/Mirantis.webp",
    href: "/product-reseller/mirantis",
  },
];

export const offeringsMenuContent: OfferingsMenuContent = {
  tabs: {
    product: "product",
    productResellers: "productResellers",
    distributionChannel: "distributionChannel",
  },
  featured: {
    translationKey: "featured",
    image: "/images/products/KubeVirtStack-AI.webp",
    primaryHref: "https://kubevirtstack.com/",
  },
  resellers: [
    {
      id: PRODUCT_TYPES.REDHAT,
      translationKey: "redhat",
      image: "/images/home/product-reseller/Redhat.webp",
      href: "/product-reseller/redhat",
    },
    {
      id: PRODUCT_TYPES.CNCF,
      translationKey: "cncf",
      image: "/images/home/product-reseller/cncf.webp",
      href: "/product-reseller/cncf",
    },
    {
      id: PRODUCT_TYPES.MIRANTIS,
      translationKey: "mirantis",
      image: "/images/home/product-reseller/Mirantis.webp",
      href: "/product-reseller/mirantis",
    },
    // {
    //   id: "lenovo",
    //   title: "Lenovo",
    //   description:
    //     "High-performance infrastructure and hardware optimized for enterprise workloads.",
    //   badge: "L",
    //   href: "/get-started",
    // },
    {
      id: PRODUCT_TYPES.AWS,
      translationKey: "aws",
      image: "/images/home/product-reseller/AWS.webp",
      href: "/product-reseller/aws",
    },
    {
      id: "gcp",
      translationKey: "gcp",
      image: "/images/home/product-reseller/google-cloud.webp",
      href: "/product-reseller/gcp",
    },
    {
      id: "azure",
      translationKey: "azure",
      image: "/images/home/product-reseller/Azure.webp",
      href: "/product-reseller/azure",
    },
    {
      id: "suse",
      translationKey: "suse",
      image: "/images/home/product-reseller/Suse.webp",
      href: "/product-reseller/suse",
    },
    {
      id: "dell",
      translationKey: "dell",
      image: "/images/home/product-reseller/dell-logo.png",
      href: "/product-reseller/dell",
    },
    // {
    //   id: "veeam",
    //   title: "Veeam",
    //   description:
    //     "Data protection, backup, and recovery solutions ensuring business continuity.",
    //   badge: "V",
    //   href: "/get-started",
    // },
  ],
  distribution: [
    {
      id: "ingram",
      translationKey: "ingram",
      image: "/images/home/technology-ecosystem/ingram-micro.svg",
      href: "/get-started",
    },
    {
      id: "redington",
      translationKey: "redington",
      image: "/images/home/technology-ecosystem/redington.svg",
      href: "/get-started",
    },
    {
      id: "gem",
      translationKey: "gem",
      image: "/images/home/gem-logo.png",
      href: "/get-started",
    },
  ],
};

/* ================= SOLUTIONS ================= */
export const services: MegaItem[] = Object.values(solutions).map(
  (solution, index) => {
    const menuContent = homePageData.cloudServicesSectionData.services.find(
      (item) => item.id === solution.slug,
    );

    if (!menuContent) {
      throw new Error(
        `Missing mega menu content for solution: ${solution.slug}`,
      );
    }

    return {
      id: solution.slug,
      translationKey: String(index),
      image: menuContent.image,
      href: `/solutions/${solution.slug}`,
    };
  },
);
/* ================= COMPANY ================= */
export const company: MegaItem[] = [
  {
    id: "about us",
    translationKey: "aboutUs",
    image: "/images/company/About-Us.webp",
    href: "/about-us",
    // href: "`${process.env.NEXT_PUBLIC_TRAINING_URL}/about`",
    // external: true,
  },
  {
    id: "career",
    translationKey: "career",
    image: "/images/company/Career.webp",
    href: "/career",
  },
  // TODO: Add blog section in the future when we have content to share
  // {
  //   id: "blog",
  //   label: "Blog",
  //   title: "Blog",
  //   description:
  //     "Thought leadership, technical insights, and real-world lessons from modern cloud engineering",
  //   image: "/images/company/Blog.webp",
  //   href: "/coming-soon",
  // },
  {
    id: "contact us",
    translationKey: "contactUs",
    image: "/images/company/Contact-Us.webp",
    href: "/contact-us",
  },
  {
    id: "hire from us",
    translationKey: "hireFromUs",
    image: "/images/company/Hire-from-us.webp",
    href: "/hire-from-us",
  },
  // TODO
  // {
  //   id: "contact us",
  //   label: "Contact Us",
  //   title: "Contact Us",
  //   description:
  //     "Let’s connect to discuss how we can help you build and scale modern cloud solutions.",
  //   image: "/images/company/Contact-Us.webp",
  //   href: "/get-started",
  // },
];

/* ================= TRAINING ================= */
export const training: MegaItem[] = [
  {
    id: "red hat",
    translationKey: "redHat",
    image: "/images/training/Red-hat.webp",
  },
  {
    id: "mirantis",
    translationKey: "mirantis",
    image: "/images/training/The-Mirantis.webp",
  },
  {
    id: "cncf",
    translationKey: "cncf",
    image: "/images/training/CNCF.webp",
  },
  {
    id: "the linux foundation",
    translationKey: "linuxFoundation",
    label: "The Linux Foundation",
    title: "The Linux Foundation",
    description:
      "Linux Foundation–aligned learning for mastering open-source and cloud technologies.",
    image: "/images/training/The-Linux-Foundation.webp",
  },
  {
    id: "customised training",
    translationKey: "customisedTraining",
    label: "Customised Training",
    title: "Customised Training",
    description:
      "Tailored training programs designed to meet your team’s specific cloud and DevOps needs.",
    image: "/images/training/Customised-Training.webp",
  },
];
