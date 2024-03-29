const path = require('path');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const packageJson = fs.readFileSync(path.join(__dirname, '../../package.json'), 'utf8');
const libraryName = JSON.parse(packageJson).name;

module.exports = {
    mode: 'production',
    target: 'node',
    entry: [
        path.join(__dirname, '../../src/index.ts')
    ],
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    optimization: {
        minimize: false
    },
    output: {
        filename: 'index.js',
        publicPath: '/',
        path: path.resolve(__dirname, '../../dist'),
        library: libraryName,
        libraryTarget: 'commonjs2'
    },
    externals: [nodeExternals()],
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([{ from: 'package.json', to: 'package.json' }]),
        new CopyWebpackPlugin([{ from: 'README.md', to: 'README.md' }])
    ]
};