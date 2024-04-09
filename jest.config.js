const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Specifies the base directory of your Next.js project
});

// Custom Jest configuration
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom', // Use jsdom to simulate the browser environment
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Run some code to configure or set up the testing framework before each test
  moduleNameMapper: {
    // Handle module aliases (adjust according to your `tsconfig.json` or `jsconfig.json`)
    '^@components/(.*)$': '<rootDir>/components/$1',
    // Handle static assets; these paths might need to be adjusted based on your project structure
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Mock CSS imports
    '\\.(jpg|jpeg|png|gif|webp|svg|ico)$': '<rootDir>/__mocks__/fileMock.js', // Mock image imports
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'], // Ignore certain paths
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'], // Ignore transforming modules except for CSS modules
  moduleDirectories: ['node_modules', '<rootDir>/'], // Look for modules in these directories
};

module.exports = createJestConfig(customJestConfig);
