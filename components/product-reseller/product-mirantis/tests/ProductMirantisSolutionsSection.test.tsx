import { render, screen } from "@testing-library/react";

import ProductMirantisSolutionsSection from "@/components/product-reseller/product-mirantis/componets/solutions-section";
import { productMirantisPageData } from "@/components/product-reseller/product-mirantis/data/product-mirantis";

const content = productMirantisPageData.solutions;

describe("ProductMirantisSolutionsSection", () => {
  it("renders the section heading and eyebrow", () => {
    render(<ProductMirantisSolutionsSection content={content} />);

    expect(screen.getByText(content.eyebrow)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: content.title })
    ).toBeInTheDocument();
  });

  it("renders every solution card", () => {
    render(<ProductMirantisSolutionsSection content={content} />);

    content.cards.forEach((card) => {
      expect(
        screen.getByRole("heading", { name: card.title })
      ).toBeInTheDocument();
      expect(screen.getByText(card.description)).toBeInTheDocument();
    });
  });

  it("renders one icon for each solution card", () => {
    const { container } = render(
      <ProductMirantisSolutionsSection content={content} />
    );

    expect(container.querySelectorAll("article svg")).toHaveLength(
      content.cards.length
    );
  });
});
