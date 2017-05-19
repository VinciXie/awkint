const path = require('path');
const webpack = require('webpack');

const devConfig = {
  context: path.resolve(__dirname, './static/static/js'),
  entry: './main.js',
  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    "jquery": "jQuery"
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './static/static/dist'),
  },
  devtool: 'source-map',

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
    ],
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
