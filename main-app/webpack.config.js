const { ModuleFederationPlugin } = require('webpack').container;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./config').webpackBaseConfig;
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = webpackMerge.merge(webpackBaseConfig, {
  output: {
    publicPath: 'http://localhost:3002/'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'main_app',
      remotes: { // 作为主机使用那些远端
        'pwm-client': 'pwm_client@http://localhost:3003/remote.pwm.js',
        'sdp-client': 'sdp_client@http://localhost:3004/remote.sdp.js',
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
    new CopyPlugin({
      patterns: [
        { from: "plugins", to: path.join(process.cwd(), './dist')  },
      ],
    }),
  ]
});

