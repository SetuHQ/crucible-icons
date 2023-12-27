module.exports = {
    cacheDirectory: ".jest-cache",
    coverageDirectory: "./coverage",
    coveragePathIgnorePatterns: ["/dist/", "./dist/"],
    coverageReporters: ["html", "text"],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    preset: "ts-jest",
    setupFilesAfterEnv: ["./jest-setup.ts"],
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["/node_modules/", "jest-setup.ts"],
    transform: {
        "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
    },
    verbose: true,
};
