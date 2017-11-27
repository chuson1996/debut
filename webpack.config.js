const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, './js'), 'node_modules'],
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ] : []
};
