const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './index.js',
  mode: 'development',
  devtool: 'hidden-source-map',
  output: {
    publicPath: 'http://localhost:3004/',
    clean: true,
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.css', '.scss', '.jpg', 'jpeg', 'png'],
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'sdp_client',
      filename: 'remoteEntry.js',
      exposes: {
        './Page1': './src/Page1.jsx',
        './Page2': './src/Page2.jsx',
        './Page3': './src/Page3.jsx',
      },
      remotes: {
        'lib-app': 'lib_app@http://localhost:3000/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
