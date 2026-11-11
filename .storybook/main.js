module.exports = {
    stories: ["../src/*.stories.tsx", "../src/*.mdx"],
    addons: ["@storybook/addon-docs"],
    features: {
        experimentalCodeExamples: true,
    },

    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },

    framework: {
        name: "@storybook/react-vite",
        options: {}
    },

    async viteFinal(config) {
        config.resolve = {
            ...config.resolve,
            dedupe: ["react", "react-dom"],
        };
        config.optimizeDeps = {
            ...config.optimizeDeps,
            exclude: [...(config.optimizeDeps?.exclude ?? []), "fictoan-react"],
        };

        return config;
    },
};
