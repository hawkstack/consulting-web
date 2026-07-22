import { render, screen } from "@testing-library/react";

import GalleryStatsSection from "@/components/home/gallery/components/GalleryStatsSection";
import { galleryStatsSectionData } from "@/components/home/gallery/data/awards-recognitions";

describe("GalleryStatsSection", () => {
  it("renders the gallery stats section with an accessible label", () => {
    render(<GalleryStatsSection data={galleryStatsSectionData} />);

    expect(
      screen.getByRole("region", { name: "HawkStack impact metrics" }),
    ).toBeInTheDocument();
  });

  it("renders each gallery stat value and label", () => {
    render(<GalleryStatsSection data={galleryStatsSectionData} />);

    galleryStatsSectionData.stats.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    });
  });
});
