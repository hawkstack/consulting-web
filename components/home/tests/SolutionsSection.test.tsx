import { fireEvent, render, screen, within } from "@testing-library/react";
import EngineeringDrivenCloudServices from "../EngineeringDrivenCloudServices";
import { homePageData } from "@/data/home/home";

const data = homePageData.cloudServicesSectionData;

describe("Homepage solution panels", () => {
  it("shows the new default solution with its benefits and discussion link", () => {
    render(<EngineeringDrivenCloudServices data={data} />);
    expect(screen.getByRole("heading", { name: data.title })).toBeInTheDocument();
    expect(screen.getAllByRole("tab")).toHaveLength(6);
    const panel = screen.getByRole("tabpanel");
    expect(within(panel).getByRole("heading", { name: data.services[0].headline })).toBeInTheDocument();
    data.services[0].benefits.forEach((benefit) => expect(within(panel).getByText(benefit)).toBeInTheDocument());
    expect(within(panel).getByRole("link", { name: data.actionLabel })).toHaveAttribute("href", data.services[0].href);
    expect(within(panel).getByRole("img", { name: data.services[0].imageAlt })).toBeInTheDocument();
  });

  it("updates the complete panel when selecting each solution", () => {
    render(<EngineeringDrivenCloudServices data={data} />);
    const tabs = screen.getAllByRole("tab");
    data.services.forEach((service, index) => {
      fireEvent.click(tabs[index]);
      const panel = screen.getByRole("tabpanel");
      expect(tabs[index]).toHaveAttribute("aria-selected", "true");
      expect(within(panel).getByRole("heading", { name: service.headline })).toBeInTheDocument();
      expect(within(panel).getByText(service.description)).toBeInTheDocument();
      expect(within(panel).getByRole("img", { name: service.imageAlt })).toBeInTheDocument();
      service.benefits.forEach((benefit) => expect(within(panel).getByText(benefit)).toBeInTheDocument());
      expect(within(panel).getByRole("link")).toHaveAttribute("href", service.href);
    });
  });

  it("supports keyboard navigation and wraps between the first and last tabs", () => {
    render(<EngineeringDrivenCloudServices data={data} />);
    const tabs = screen.getAllByRole("tab");
    tabs[0].focus();
    fireEvent.keyDown(tabs[0], { key: "End" });
    expect(tabs[5]).toHaveFocus();
    expect(tabs[5]).toHaveAttribute("aria-selected", "true");
    fireEvent.keyDown(tabs[5], { key: "ArrowDown" });
    expect(tabs[0]).toHaveFocus();
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    fireEvent.keyDown(tabs[0], { key: "ArrowUp" });
    expect(tabs[5]).toHaveFocus();
    fireEvent.keyDown(tabs[5], { key: "Home" });
    expect(tabs[0]).toHaveFocus();
  });
});

