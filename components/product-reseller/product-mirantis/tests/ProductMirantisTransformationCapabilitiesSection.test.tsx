import { render, screen } from "@testing-library/react";

import ProductMirantisTransformationCapabilitiesSection from "@/components/product-reseller/product-mirantis/componets/transformation-capabilities-section";
import { productMirantisPageData } from "@/components/product-reseller/product-mirantis/data/product-mirantis";

const capabilities = productMirantisPageData.transformation.capabilities;

describe("ProductMirantisTransformationCapabilitiesSection", () => {
  it("renders every transformation capability", () => {
    render(
      <ProductMirantisTransformationCapabilitiesSection
        capabilities={capabilities}
      />
    );

    capabilities.forEach((capability) => {
      expect(
        screen.getByRole("heading", { name: capability.title })
      ).toBeInTheDocument();
      expect(screen.getByText(capability.description)).toBeInTheDocument();
    });
  });

  it("renders one icon for each capability", () => {
    const { container } = render(
      <ProductMirantisTransformationCapabilitiesSection
        capabilities={capabilities}
      />
    );

    expect(container.querySelectorAll("article svg")).toHaveLength(
      capabilities.length
    );
  });
});
