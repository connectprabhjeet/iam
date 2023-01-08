module.exports = {
  rootDir: "../../",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  moduleFileExtensions: ["js", "json", "ts"],
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  coverageDirectory: "./coverage/server",
};
