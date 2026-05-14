export interface RedHatApplicationServiceProduct {
  title: string;
  description: string;
}

export interface RedHatApplicationServicesData {
  heading: string;
  showAllButtonText: string;
  showLessButtonText: string;
  products: RedHatApplicationServiceProduct[];
}
