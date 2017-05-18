const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const devConfig = {
  devtool: 'source-map',
  context: path.resolve(__dirname, './static/static/js'),
  entry: './main.js',

  output: {
    path: path.resolve(__dirname, './static/dist'),
    filename: '[name].[chunkhash:8].js',
    sourceMapFilename: '[name].[chunkhash:8].map',
    chunkFilename: '[id].[chunkhash:8].js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = devConfig;
