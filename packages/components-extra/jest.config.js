module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./jest.setup.js'],
  modulePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/build-tsc/'],
  moduleNameMapper: {
    '^utils-test(.*)$': '<rootDir>/src/utils-test$1',
  },
}
