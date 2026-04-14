export interface CloudServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface EngineeringDrivenCloudServicesProps {
  title?: string;
  services?: CloudServiceItem[];
}
