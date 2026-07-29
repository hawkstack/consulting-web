import FeaturesSection from "@/components/services/kubernetes-as-a-services/components/FeaturesSection";
import type { FeaturesData } from "@/components/product-reseller/product-redhat/types/product-redhat";

type RedHatDeliverySectionProps = {
  data: FeaturesData;
};

const RedHatDeliverySection = ({ data }: RedHatDeliverySectionProps) => {
  return <FeaturesSection data={data} />;
};

export default RedHatDeliverySection;
