module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  modulePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/.docz/'],
  transformIgnorePatterns: ['<rootDir>/node_modules/!(@babel/runtime)'],
  moduleNameMapper: {
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^theme(.*)$': '<rootDir>/src/theme$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^test(.*)$': '<rootDir>/src/utils-test$1',
    '^hooks(.*)$': '<rootDir>/src/hooks$1',
  },
}
