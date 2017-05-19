const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './static/static/js'),
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './static/static/dist'),
  },
  // output: {
  //   filename: '[name].[chunkhash:8].js',
  //   sourceMapFilename: '[name].[chunkhash:8].map',
  //   path: path.resolve(__dirname, './static/static/dist'),
  // },
  devtool: 'eval-source-map',
  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    "jquery": "jQuery"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
        ]
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'development'"
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true,
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "static"),
    compress: true,
    hot: true,
    port: 8080
  }
};
