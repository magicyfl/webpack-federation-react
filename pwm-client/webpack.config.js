const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('../main-app/config').webpackBaseConfig;

module.exports = webpackMerge.merge(webpackBaseConfig, {
  output: {
    publicPath: 'http://localhost:3003/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'pwm_client',
      filename: 'remoteEntry.js',
      exposes: {
        './Recent': './src/expose/Recent.jsx',
        './Devices': './src/Devices.js',
        './Valut': './src/Valut.js',
      },
    }),
  ]
});
