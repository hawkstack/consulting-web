export const PRODUCT_TYPES = {
  AWS: "aws",
  CNCF: "cncf",
  GCP: "gcp",
  MIRANTIS: "mirantis",
  REDHAT: "redhat",
  SUSE: "suse",
  DELL: "dell",
} as const;

export type ProductType = (typeof PRODUCT_TYPES)[keyof typeof PRODUCT_TYPES];
