const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const { webpackBaseConfig, federationShared } = require('../main-app//config');

module.exports = webpackMerge.merge(webpackBaseConfig, {
  output: {
    publicPath: 'http://localhost:3004/',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'sdp_client',
      filename: 'remote.sdp.js',
      exposes: {
        './Router' :'./src/expose/Router.jsx',
      },
      shared: federationShared
    }),
  ]
});
