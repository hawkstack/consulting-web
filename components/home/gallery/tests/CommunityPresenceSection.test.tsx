import { render, screen } from "@testing-library/react";

import CommunityPresenceSection from "@/components/home/gallery/components/CommunityPresenceSection";
import { communityPresenceSectionData } from "@/components/home/gallery/data/awards-recognitions";

describe("CommunityPresenceSection", () => {
  it("renders the community presence heading", () => {
    render(<CommunityPresenceSection data={communityPresenceSectionData} />);

    expect(
      screen.getByRole("heading", {
        name: communityPresenceSectionData.title,
      }),
    ).toBeInTheDocument();
  });

  it("renders the community presence description", () => {
    render(<CommunityPresenceSection data={communityPresenceSectionData} />);

    expect(
      screen.getByText(communityPresenceSectionData.description),
    ).toBeInTheDocument();
  });

  it("renders default content when data is not provided", () => {
    render(<CommunityPresenceSection />);

    expect(
      screen.getByRole("heading", {
        name: communityPresenceSectionData.title,
      }),
    ).toBeInTheDocument();
  });
});
