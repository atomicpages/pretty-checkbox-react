module.exports = {
    preset: 'ts-jest',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'html', 'text-summary', 'lcov'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.ts'],
    modulePathIgnorePatterns: ['pkg/', 'resources/', 'playground/', 'cypress/'],
    testPathIgnorePatterns: ['<rootDir>/src/index.ts'],
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/tsconfig.test.json',
        },
    },
};
