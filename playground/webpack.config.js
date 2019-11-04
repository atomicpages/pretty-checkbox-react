/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({ template: path.resolve('./public/index.html') }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                            reloadAll: true,
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        compress: true,
        hot: true,
        open: true,
        historyApiFallback: true, // curious? https://tylermcginnis.com/react-router-cannot-get-url-refresh/
        port: 9000,
    },
};
