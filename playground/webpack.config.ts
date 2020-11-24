/* eslint-disable @typescript-eslint/no-var-requires */
import * as path from 'path';
import * as webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const __DEV__ = (process.env.NODE_ENV as webpack.Configuration['mode']) || 'development';

const config: webpack.Configuration = {
    mode: __DEV__,
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
        new HtmlWebpackPlugin({ template: path.resolve('./public/index.html') }),
        __DEV__ && new webpack.HotModuleReplacementPlugin(),
        __DEV__ && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            react: path.join(__dirname, '../node_modules/react'),
            'react-dom': path.join(__dirname, '../node_modules/react-dom'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: '@teamsupercell/typings-for-css-modules-loader',
                        options: {
                            formatter: 'prettier',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                            modules: {
                                auto: true,
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: [
                    __DEV__ && {
                        loader: 'babel-loader',
                        options: { plugins: ['react-refresh/babel'] },
                    },
                    'ts-loader',
                ].filter(Boolean),
                exclude: /node_modules/,
            },
            {
                test: /\.(woff2?|svg|ttf|otf|eot)$/,
                loader: 'file-loader',
            },
        ],
    },
    devtool: 'eval-cheap-module-source-map',
    // @ts-ignore
    devServer: {
        compress: true,
        port: 9000,
        hot: true,
    },
};

export default config;
