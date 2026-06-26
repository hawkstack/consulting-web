import FeaturesSection from "@/components/services/kubernetes-as-a-services/components/FeaturesSection";
import type { FeaturesData } from "@/app/types/product-reseller/product-redhat/product-redhat";

type RedHatDeliverySectionProps = {
  data: FeaturesData;
};

const RedHatDeliverySection = ({ data }: RedHatDeliverySectionProps) => {
  return <FeaturesSection data={data} />;
};

export default RedHatDeliverySection;
