const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './static/static/js'),
  entry: ['./jquery.scrollTo.min.js','./jquery.localScroll.min.js','./unslider-min.js','./index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './static/dist'),

  },
  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    "jquery": "jQuery"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ],
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
