module.exports = {
    preset: 'ts-jest',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'html', 'text-summary', 'lcov'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.ts', '!src/tests/testingUtils.tsx'],
    coveragePathIgnorePatterns: ['<rootDir>/src/typings/'],
    modulePathIgnorePatterns: ['pkg/', 'resources/', 'playground/', 'cypress/'],
    testPathIgnorePatterns: ['<rootDir>/src/index.ts'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.test.json',
        },
    },
};
