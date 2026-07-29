import { render, screen } from "@testing-library/react";

import GalleryCtaSection from "@/components/home/gallery/components/GalleryCtaSection";
import { galleryCtaSectionData } from "@/components/home/gallery/data/awards-recognitions";

describe("GalleryCtaSection", () => {
  it("renders the section with an accessible label", () => {
    render(<GalleryCtaSection data={galleryCtaSectionData} />);

    expect(
      screen.getByRole("region", { name: "Gallery actions" }),
    ).toBeInTheDocument();
  });

  it("renders each CTA card with its copy and action link", () => {
    render(<GalleryCtaSection data={galleryCtaSectionData} />);

    galleryCtaSectionData.cards.forEach((card) => {
      expect(screen.getByRole("heading", { name: card.title })).toBeInTheDocument();
      expect(screen.getByText(card.description)).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: card.actionLabel }),
      ).toHaveAttribute("href", card.href);
    });
  });
});
