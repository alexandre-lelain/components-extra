module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    "./jest.setup.js"
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/build-tsc/",
  ],
};