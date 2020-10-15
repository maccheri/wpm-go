module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/pages/**/*.tsx',
    'src/components/**/*.tsx',
    'src/utils/**/*.ts(x)?',
    'src/hooks/**/*.ts(x)?',
    '!src/**/*.stories.tsx',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1'
  }
}
