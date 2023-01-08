module.exports = {
  rootDir: "../../",
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/jest/app/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  coverageDirectory: "./coverage/app",
};
