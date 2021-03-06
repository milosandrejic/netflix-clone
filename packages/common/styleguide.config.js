/* eslint-disable global-require */
/* eslint-disable no-undef */
const path = require("path");
const webpack = require("webpack");

const webpackFn = require("./webpack.config.js");

const originalWebpackConfig = webpackFn({}, {mode: "development"});

module.exports = {
    pagePerSection: true,
    sections: [
        {
            name: "Widgets",
            content: "lib/widgets/Readme.md",
            components: "lib/widgets/**/*.jsx",
            exampleMode: "expand",
            usageMode: "expand"
        },
        {
            name: "Components",
            content: "lib/components/Readme.md",
            components: "lib/components/***/*.jsx",
            exampleMode: "expand",
            usageMode: "expand"
        }
    ],
    template: {
        head: {
            links: [
                {
                    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
                    rel: "stylesheet"
                }
            ]
        }
    },
    styleguideComponents: {
        Wrapper: path.join(__dirname, "styleguidist/wrapper.js")
    },
    webpackConfig: {
        ...originalWebpackConfig,
        externals: [],
        plugins: [
            new webpack.ProvidePlugin({
                process: "process/browser"
            })
        ]
    }
};
