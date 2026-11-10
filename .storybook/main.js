module.exports = {
    stories: ["../src/*.stories.tsx", "../src/*.mdx"],
    addons: ["@storybook/addon-docs"],

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
    }
};
