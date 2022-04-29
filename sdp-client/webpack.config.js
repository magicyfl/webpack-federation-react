const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('../main-app/config').webpackBaseConfig;

module.exports = webpackMerge.merge(webpackBaseConfig, {
  output: {
    publicPath: 'http://localhost:3004/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'sdp_client',
      filename: 'remoteEntry.js',
      exposes: {
        './Applications': './src/Applications.jsx',
        './Starred': './src/expose/Starred.jsx',
        './Items': './src/Items.jsx',
      },
    }),
  ]
});
