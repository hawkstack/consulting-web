import type { ProductAwsHeroContent } from "@/components/product-reseller/product-aws/types/product-aws";

type HeroSectionProps = {
  content: ProductAwsHeroContent;
};

const HeroSection = ({ content }: HeroSectionProps) => {
  return (
    <div>
      <p>{content.eyebrow}</p>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </div>
  );
};

export default HeroSection;
