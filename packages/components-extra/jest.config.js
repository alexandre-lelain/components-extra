module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    "./jest.setup.js"
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/build-tsc/",
  ],
  moduleNameMapper: {
    "^utils(.*)$": "<rootDir>/src/utils$1",
    "^theme(.*)$": "<rootDir>/src/theme$1",
    "^components(.*)$": "<rootDir>/src/components$1",
    "^utils-test(.*)$": "<rootDir>/src/utils-test$1"
  }
};