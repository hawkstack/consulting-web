import type {
  BlogHeroData,
  FeaturedBlogData,
} from "@/components/home/blogs/types/data";

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
