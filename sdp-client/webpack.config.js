const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('../main-app/config').webpackBaseConfig;
const deps = require('./package.json').dependencies;

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
      filename: 'remoteSdp.js',
      exposes: {
        './Starred': './src/expose/Starred.jsx',
        './Applications': './src/pages/Applications.jsx',
        './Items': './src/pages/Items.jsx',
      },
      shared: [
        {
          ...deps,
          react: {
            // eager: true,
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            // eager: true,
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
        },
      ],
    }),
  ]
});
