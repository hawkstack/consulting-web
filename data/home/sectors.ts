export type SectorsSectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
  footer: string;
  ctaLabel: string;
  sectors: { title: string; description: string; imageAlt: string }[];
};

export const sectorsSectionData = {
  eyebrow: "Who we serve",
  title: "Enterprises. Government. Public Sector.",
  description:
    "Modernizing infrastructure. Strengthening operations. Enabling growth.",
  footer: "One integrated approach. Across critical sectors.",
  ctaLabel: "Discuss Your Requirements",
  href: "/get-started",
  sectors: [
    {
      id: "enterprises",
      title: "Enterprises",
      description: "Technology aligned with business ambition.",
      image: "/images/home/sectors/enterprises.svg",
      imageAlt: "Enterprise teams overlooking a modern city",
    },
    {
      id: "government",
      title: "Government",
      description: "Digital foundations for public service.",
      image: "/images/home/sectors/government.svg",
      imageAlt: "Government buildings in New Delhi",
    },
    {
      id: "public-sector",
      title: "Public Sector",
      description: "Resilient systems for essential services.",
      image: "/images/home/sectors/public-sector.svg",
      imageAlt: "Urban transport and essential public infrastructure",
    },
  ],
};
