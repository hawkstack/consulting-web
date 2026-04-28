import type { ConsultingServiceItem } from "@/app/types/consulting-services";
import {
  AdvisoryIcon,
  ImplementationIcon,
  OptimizationIcon,
  TransformationIcon,
} from "@/components/icons/consulting-services/ServiceIcons";

type ServiceIconProps = {
  icon: ConsultingServiceItem["icon"];
};

export default function ServiceIcon({ icon }: ServiceIconProps) {
  const iconClassName = "h-5 w-5 text-[#1D6DFF]";

  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#EAF3FF]">
      {icon === "advisory" ? <AdvisoryIcon className={iconClassName} /> : null}
      {icon === "optimization" ? (
        <OptimizationIcon className={iconClassName} />
      ) : null}
      {icon === "transformation" ? (
        <TransformationIcon className={iconClassName} />
      ) : null}
      {icon === "implementation" ? (
        <ImplementationIcon className={iconClassName} />
      ) : null}
    </div>
  );
}
