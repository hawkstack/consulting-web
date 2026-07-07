import { render, screen } from "@testing-library/react";

import ProductMirantisCtaSection from "@/components/product-reseller/product-mirantis/componets/cta-section";
import { productMirantisPageData } from "@/components/product-reseller/product-mirantis/data/product-mirantis";

const content = productMirantisPageData.cta;

describe("ProductMirantisCtaSection", () => {
  it("renders the CTA heading and description", () => {
    render(<ProductMirantisCtaSection content={content} />);

    expect(
      screen.getByRole("heading", { name: content.title })
    ).toBeInTheDocument();
    expect(screen.getByText(content.description)).toBeInTheDocument();
  });

  it("renders the CTA action as a link", () => {
    render(<ProductMirantisCtaSection content={content} />);

    const link = screen.getByRole("link", { name: content.action.ariaLabel });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", content.action.href);
    expect(link).toHaveTextContent(content.action.label);
  });
});
