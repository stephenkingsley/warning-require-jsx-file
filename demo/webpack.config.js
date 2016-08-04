var path = require('path');
var webpack = require('webpack');
var checkJSXFile = require('check-jsx-file');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new checkJSXFile(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      {
        test: /\.s[c|a]ss$/,
        loader: 'style!css?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]!sass'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
}
