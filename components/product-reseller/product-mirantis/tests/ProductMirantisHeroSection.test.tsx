import { render, screen } from "@testing-library/react";

import ProductMirantisHeroSection from "@/components/product-reseller/product-mirantis/componets/hero-section";
import { productMirantisPageData } from "@/components/product-reseller/product-mirantis/data/product-mirantis";

const content = productMirantisPageData.hero;

describe("ProductMirantisHeroSection", () => {
  it("renders the Mirantis hero copy", () => {
    render(<ProductMirantisHeroSection content={content} />);

    expect(screen.getByText(content.badge)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: content.title })
    ).toBeInTheDocument();
    expect(screen.getByText(content.description)).toBeInTheDocument();
  });

  it("renders the hero actions as links", () => {
    render(<ProductMirantisHeroSection content={content} />);

    content.actions.forEach((action) => {
      const link = screen.getByRole("link", { name: action.ariaLabel });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", action.href);
    });
  });

  it("renders platform highlights and metrics", () => {
    render(<ProductMirantisHeroSection content={content} />);

    expect(screen.getByText(content.platform.badge)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: content.platform.title })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: content.floatingCards.supplyChain.title,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: content.floatingCards.operations.title,
      })
    ).toBeInTheDocument();

    content.platform.metrics.forEach((metric) => {
      expect(screen.getByText(metric.value)).toBeInTheDocument();
      expect(screen.getByText(metric.label)).toBeInTheDocument();
    });
  });
});
