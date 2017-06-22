
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/index',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    pathinfo: true,
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    hot: true,
    inline: true,
    publicPath: '/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
        include: path.resolve(__dirname, 'src/content/styles'),
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({ debug: true }),
    new HtmlWebpackPlugin({ inject: true, template: './public/index.html' }),
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
};

module.exports = config;
