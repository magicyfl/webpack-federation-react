const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports.webpackBaseConfig ={
    entry: './index.js',
    mode: 'development',
    devtool: 'hidden-source-map',
    output: {
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
    optimization: {
      splitChunks: {
        chunks: 'async',
        minSize: 20000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test(module) {
              return /[\\/]node_modules[\\/]/.test(module.resource);
                
            },
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    // externals: {
    //   'react': 'React',
    //   'react-dom': 'ReactDOM',
    // },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ]
  };