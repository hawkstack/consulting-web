import { validateEmail, validateName, validateRequired } from "./validation";

describe("validation utilities", () => {
  it("validates required email input", () => {
    expect(validateEmail("")).toBe("Email is required");
    expect(validateEmail("not-an-email")).toBe("Enter a valid email address");
    expect(validateEmail("hello@example.com")).toBe("");
  });

  it("validates alphabetic names", () => {
    expect(validateName("  ", "First name")).toBe("First name is required");
    expect(validateName("Jane1", "First name")).toBe(
      "First name should contain only letters"
    );
    expect(validateName("Jane", "First name")).toBe("");
  });

  it("validates generic required fields", () => {
    expect(validateRequired("", "Company")).toBe("Company is required");
    expect(validateRequired("HawkStack", "Company")).toBe("");
  });
});
