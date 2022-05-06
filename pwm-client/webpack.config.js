const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('../main-app/config').webpackBaseConfig;
const deps = require('./package.json').dependencies

module.exports = webpackMerge.merge(webpackBaseConfig, {
  output: {
    publicPath: 'http://localhost:3003/',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'pwm_client',
      filename: 'remote.pwm.js',
      exposes: {
        './Router' :'./src/expose/Router.jsx',
      },
       shared: [
        {
          ...deps,
          react: {
            eager: true,
            // singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            eager: true,
            // singleton: true,
            requiredVersion: deps['react-dom'],
          },
        },
      ],
    }),
  ]
});
