/* eslint-disable @typescript-eslint/no-var-requires */
// https://docs.cypress.io/guides/tooling/typescript-support.html#Transpiling-TypeScript-test-files
const wp = require('@cypress/webpack-preprocessor');

const webpackOptions = {
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
        ],
    },
};

const options = {
    webpackOptions,
};

module.exports = wp(options);
