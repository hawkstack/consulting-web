import { render, screen } from "@testing-library/react";

import ProductMirantisTransformationSection from "@/components/product-reseller/product-mirantis/componets/transformation-section";
import { productMirantisPageData } from "@/components/product-reseller/product-mirantis/data/product-mirantis";

const content = productMirantisPageData.transformation;

describe("ProductMirantisTransformationSection", () => {
  it("renders the section heading and description", () => {
    render(<ProductMirantisTransformationSection content={content} />);

    expect(
      screen.getByRole("heading", { name: content.title })
    ).toBeInTheDocument();
    expect(screen.getByText(content.description)).toBeInTheDocument();
  });

  it("renders every transformation point", () => {
    render(<ProductMirantisTransformationSection content={content} />);

    content.items.forEach((item) => {
      expect(screen.getByText(item.text)).toBeInTheDocument();
    });
  });

  it("renders one check icon for each transformation point", () => {
    const { container } = render(
      <ProductMirantisTransformationSection content={content} />
    );

    expect(
      container.querySelectorAll("[data-testid='transformation-check-icon']")
    ).toHaveLength(content.items.length);
  });
});
