import type {
  DistributionChannelContent,
  DistributionPlatformsContent,
  InfrastructurePlatformsContent,
  CloudPlatformsContent,
  CloudEcosystemContent,
  WhyHawkStackContent,
  CollaborateCtaContent,
} from "../types/distributionChannel.types";
// Only asset references, links and visual identifiers stay outside messages.
type Translate = (key: string) => string;
export function getDistributionChannelContent(
  t: Translate,
): DistributionChannelContent {
  return {
    eyebrow: t("distributionChannel.eyebrow"),
    heading: [
      t("distributionChannel.heading.0"),
      t("distributionChannel.heading.1"),
    ],
    subheading: [
      t("distributionChannel.subheading.0"),
      t("distributionChannel.subheading.1"),
    ],
    description: t("distributionChannel.description"),
    actions: [
      {
        label: t("distributionChannel.actions.0.label"),
        href: "/distribution-channel",
        variant: "primary",
      },
      {
        label: t("common.discussRequirements"),
        href: "/contact-us",
        variant: "secondary",
      },
    ],
    audience: t("distributionChannel.audience"),
    cardEyebrow: t("distributionChannel.cardEyebrow"),
    cardHeading: [
      t("distributionChannel.cardHeading.0"),
      t("distributionChannel.cardHeading.1"),
    ],
    steps: [
      {
        number: "01",
        title: t("distributionChannel.steps.0.title"),
        description: t("distributionChannel.steps.0.description"),
      },
      {
        number: "02",
        title: t("distributionChannel.steps.1.title"),
        description: t("distributionChannel.steps.1.description"),
      },
      {
        number: "03",
        title: t("distributionChannel.steps.2.title"),
        description: t("distributionChannel.steps.2.description"),
      },
    ],
    logoPanelHeading: t("distributionChannel.logoPanelHeading"),
    logos: [
      {
        name: t("common.brands.redHat"),
        src: "/images/home/product-reseller/Redhat.webp",
        className: "h-[26px] w-[48px]",
      },
      {
        name: t("common.brands.suse"),
        src: "/images/home/product-reseller/Suse.webp",
        className: "h-[24px] w-[45px]",
      },
      {
        name: t("common.brands.nutanix"),
        src: "/images/home/product-reseller/nutanix-updated.svg",
        className: "h-[22px] w-[60px]",
      },
      {
        name: t("common.brands.dell"),
        src: "/images/home/digital-transformation/dell-technologies.webp",
        className: "h-[25px] w-[42px]",
      },
      {
        name: t("common.brands.mirantis"),
        src: "/images/home/product-reseller/mirantis.webp",
        className: "h-[22px] w-[60px]",
      },
      {
        name: t("common.brands.aws"),
        src: "/images/home/product-reseller/AWS.webp",
        className: "h-[24px] w-[42px]",
      },
    ],
    outcomes: {
      eyebrow: t("distributionChannel.outcomes.eyebrow"),
      heading: t("distributionChannel.outcomes.heading"),
      items: [
        {
          number: "01",
          title: t("distributionChannel.outcomes.items.0.title"),
          description: t("distributionChannel.outcomes.items.0.description"),
        },
        {
          number: "02",
          title: t("distributionChannel.outcomes.items.1.title"),
          description: t("distributionChannel.outcomes.items.1.description"),
        },
        {
          number: "03",
          title: t("distributionChannel.outcomes.items.2.title"),
          description: t("distributionChannel.outcomes.items.2.description"),
        },
        {
          number: "04",
          title: t("distributionChannel.outcomes.items.3.title"),
          description: t("distributionChannel.outcomes.items.3.description"),
        },
      ],
    },
  };
}
export function getDistributionPlatformsContent(
  t: Translate,
): DistributionPlatformsContent {
  return {
    eyebrow: t("distributionPlatforms.eyebrow"),
    heading: [
      t("distributionPlatforms.heading.0"),
      t("distributionPlatforms.heading.1"),
    ],
    introduction: t("distributionPlatforms.introduction"),
    items: [
      {
        brand: t("common.brands.redHat"),
        logo: "/images/home/product-reseller/Redhat.webp",
        category: t("distributionPlatforms.items.0.category"),
        heading: t("distributionPlatforms.items.0.heading"),
        description: t("distributionPlatforms.items.0.description"),
        technologies: t("distributionPlatforms.items.0.technologies"),
        hawkstackHelps: t("distributionPlatforms.items.0.hawkstackHelps"),
        discussionLabel: t("distributionPlatforms.items.0.discussionLabel"),
        discussionHref: "/contact-us",
      },
      {
        brand: t("common.brands.suse"),
        logo: "/images/home/product-reseller/Suse.webp",
        category: t("distributionPlatforms.items.1.category"),
        heading: t("distributionPlatforms.items.1.heading"),
        description: t("distributionPlatforms.items.1.description"),
        technologies: t("distributionPlatforms.items.1.technologies"),
        hawkstackHelps: t("distributionPlatforms.items.1.hawkstackHelps"),
        discussionLabel: t("distributionPlatforms.items.1.discussionLabel"),
        discussionHref: "/contact-us",
      },
      {
        brand: t("common.brands.mirantis"),
        logo: "/images/home/product-reseller/Mirantis.webp",
        category: t("distributionPlatforms.items.2.category"),
        heading: t("distributionPlatforms.items.2.heading"),
        description: t("distributionPlatforms.items.2.description"),
        technologies: t("distributionPlatforms.items.2.technologies"),
        hawkstackHelps: t("distributionPlatforms.items.2.hawkstackHelps"),
        discussionLabel: t("distributionPlatforms.items.2.discussionLabel"),
        discussionHref: "/contact-us",
      },
    ],
  };
}
export function getInfrastructurePlatformsContent(
  t: Translate,
): InfrastructurePlatformsContent {
  return {
    eyebrow: t("infrastructurePlatforms.eyebrow"),
    heading: t("infrastructurePlatforms.heading"),
    items: [
      {
        brand: t("common.brands.dellTechnologies"),
        logo: "/images/home/digital-transformation/dell-technologies.webp",
        category: t("infrastructurePlatforms.items.0.category"),
        heading: t("infrastructurePlatforms.items.0.heading"),
        description: t("infrastructurePlatforms.items.0.description"),
        technologies: [
          t("infrastructurePlatforms.items.0.technologies.0"),
          t("infrastructurePlatforms.items.0.technologies.1"),
          t("infrastructurePlatforms.items.0.technologies.2"),
          t("infrastructurePlatforms.items.0.technologies.3"),
        ],
        hawkstackHelps: [
          t("infrastructurePlatforms.items.0.hawkstackHelps.0"),
          t("infrastructurePlatforms.items.0.hawkstackHelps.1"),
          t("infrastructurePlatforms.items.0.hawkstackHelps.2"),
        ],
        discussionLabel: t("infrastructurePlatforms.items.0.discussionLabel"),
        discussionHref: "/contact-us",
      },
      {
        brand: t("common.brands.nutanix"),
        logo: "/images/home/product-reseller/nutanix-updated.svg",
        category: t("infrastructurePlatforms.items.1.category"),
        heading: t("infrastructurePlatforms.items.1.heading"),
        description: t("infrastructurePlatforms.items.1.description"),
        technologies: [
          t("infrastructurePlatforms.items.1.technologies.0"),
          t("infrastructurePlatforms.items.1.technologies.1"),
          t("infrastructurePlatforms.items.1.technologies.2"),
        ],
        hawkstackHelps: [
          t("infrastructurePlatforms.items.1.hawkstackHelps.0"),
          t("infrastructurePlatforms.items.1.hawkstackHelps.1"),
          t("infrastructurePlatforms.items.1.hawkstackHelps.2"),
          t("infrastructurePlatforms.items.1.hawkstackHelps.3"),
        ],
        discussionLabel: t("infrastructurePlatforms.items.1.discussionLabel"),
        discussionHref: "/contact-us",
      },
    ],
  };
}
export function getCloudPlatformsContent(t: Translate): CloudPlatformsContent {
  return {
    eyebrow: t("cloudPlatforms.eyebrow"),
    heading: [t("cloudPlatforms.heading.0"), t("cloudPlatforms.heading.1")],
    introduction: t("cloudPlatforms.introduction"),
    items: [
      {
        brand: t("common.brands.amazon"),
        logo: "/images/home/product-reseller/AWS.webp",
        category: "",
        heading: t("cloudPlatforms.items.0.heading"),
        description: t("cloudPlatforms.items.0.description"),
        technologies: [
          t("cloudPlatforms.items.0.technologies.0"),
          t("cloudPlatforms.items.0.technologies.1"),
          t("cloudPlatforms.items.0.technologies.2"),
          t("cloudPlatforms.items.0.technologies.3"),
          t("cloudPlatforms.items.0.technologies.4"),
        ],
        hawkstackHelps: [
          t("cloudPlatforms.items.0.hawkstackHelps.0"),
          t("cloudPlatforms.items.0.hawkstackHelps.1"),
          t("cloudPlatforms.items.0.hawkstackHelps.2"),
          t("cloudPlatforms.items.0.hawkstackHelps.3"),
        ],
        discussionLabel: t("common.discussRequirements"),
        discussionHref: "/contact-us",
      },
      {
        brand: t("common.brands.azure"),
        logo: "/images/home/product-reseller/Azure.webp",
        category: "",
        heading: t("cloudPlatforms.items.1.heading"),
        description: t("cloudPlatforms.items.1.description"),
        technologies: [
          t("cloudPlatforms.items.1.technologies.0"),
          t("cloudPlatforms.items.1.technologies.1"),
          t("cloudPlatforms.items.1.technologies.2"),
          t("cloudPlatforms.items.1.technologies.3"),
        ],
        hawkstackHelps: [
          t("cloudPlatforms.items.1.hawkstackHelps.0"),
          t("cloudPlatforms.items.1.hawkstackHelps.1"),
          t("cloudPlatforms.items.1.hawkstackHelps.2"),
        ],
        discussionLabel: t("common.discussRequirements"),
        discussionHref: "/contact-us",
      },
      {
        brand: t("common.brands.googleCloud"),
        logo: "/images/home/product-reseller/google-cloud.webp",
        category: "",
        heading: t("cloudPlatforms.items.2.heading"),
        description: t("cloudPlatforms.items.2.description"),
        technologies: [
          t("cloudPlatforms.items.2.technologies.0"),
          t("cloudPlatforms.items.2.technologies.1"),
          t("cloudPlatforms.items.2.technologies.2"),
          t("cloudPlatforms.items.2.technologies.3"),
          t("cloudPlatforms.items.2.technologies.4"),
        ],
        hawkstackHelps: [
          t("cloudPlatforms.items.2.hawkstackHelps.0"),
          t("cloudPlatforms.items.2.hawkstackHelps.1"),
          t("cloudPlatforms.items.2.hawkstackHelps.2"),
        ],
        discussionLabel: t("common.discussRequirements"),
        discussionHref: "/contact-us",
      },
    ],
  };
}
export function getCloudEcosystemContent(t: Translate): CloudEcosystemContent {
  return {
    eyebrow: t("cloudEcosystem.eyebrow"),
    heading: t("cloudEcosystem.heading"),
    description: t("cloudEcosystem.description"),
    supportingText: [
      t("cloudEcosystem.supportingText.0"),
      t("cloudEcosystem.supportingText.1"),
      t("cloudEcosystem.supportingText.2"),
    ],
    logo: "/images/home/product-reseller/cncf.webp",
  };
}
export function getWhyHawkStackContent(t: Translate): WhyHawkStackContent {
  return {
    eyebrow: t("whyHawkStack.eyebrow"),
    heading: t("whyHawkStack.heading"),
    description: t("whyHawkStack.description"),
    actionLabel: t("common.discussRequirements"),
    actionHref: "/contact-us",
    items: [
      {
        number: "01",
        title: t("whyHawkStack.items.0.title"),
        description: t("whyHawkStack.items.0.description"),
      },
      {
        number: "02",
        title: t("whyHawkStack.items.1.title"),
        description: t("whyHawkStack.items.1.description"),
      },
      {
        number: "03",
        title: t("whyHawkStack.items.2.title"),
        description: t("whyHawkStack.items.2.description"),
      },
    ],
  };
}
export function getCollaborateCtaContent(t: Translate): CollaborateCtaContent {
  return {
    eyebrow: t("collaborateCta.eyebrow"),
    heading: t("collaborateCta.heading"),
    description: t("collaborateCta.description"),
    actionLabel: t("collaborateCta.actionLabel"),
    actionHref: "/contact-us",
  };
}
