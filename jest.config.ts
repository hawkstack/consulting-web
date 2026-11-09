import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  collectCoverageFrom: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "lib/**/*.{ts,tsx}",
    "utils/**/*.{ts,tsx}",
    "!**/*.d.ts",
  ],
};

const getJestConfig = createJestConfig(customJestConfig);

export default async function jestConfig() {
  const config = await getJestConfig();
  return {
    ...config,
    // Transform next-intl and its ESM dependencies for provider integration tests.
    transformIgnorePatterns: [
      "node_modules/(?!(next-intl|use-intl|intl-messageformat|@formatjs)/)",
    ],
  };
}
