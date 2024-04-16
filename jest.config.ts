const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",

});

// Add any custom config to be passed to Jest
const customJestConfig = {
  coverageProvider: 'v8',
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    "@/mock-data/products.jso": "<rootDir>/mock-data/products.json",
    '^@/(.*)$': '<rootDir>/src/$1',
  }
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);