module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ["@typescript-eslint"],
    extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "prettier"
    ],
    globals: {
        "JSX": true
    },
    ignorePatterns: [
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.stories.tsx',
        '**/*.stories.mdx',
        '**/*.d.ts',
        '**/*.d.tsx',
        '**/types.ts'
    ],
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        'import/no-extraneous-dependencies': 0,
        'node/no-extraneous-import': 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx", ".ts"] }],
        'react/prop-types': 0,
        "no-unused-vars": 1,
    },
    overrides: [
        {
            // enable the rule specifically for TypeScript files
            "files": ["*.ts", "*.tsx"],
            "rules": {
                '@typescript-eslint/explicit-function-return-type': [
                    1,
                    {
                        allowExpressions: true,
                        allowHigherOrderFunctions: true,
                        allowTypedFunctionExpressions: true,
                    },
                ],
            }
        }
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
};
