import Image from "next/image";
import type { ProductRedhatHeroContent } from "@/app/types/product-reseller/product-redhat/product-redhat";

type ProductRedhatHeroProps = {
  content: ProductRedhatHeroContent;
};

export default function ProductRedhatHeroSection({
  content,
}: ProductRedhatHeroProps) {
  return (
    <section className="bg-white font-lexend">

<h1 className="p-20 text-center item-center">RED HAT PAGE</h1>
    </section>
  );
}
