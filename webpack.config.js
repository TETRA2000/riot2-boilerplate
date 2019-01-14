var webpack = require('webpack');

module.exports = {
  entry: './app/index',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    rules: [
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' }, enforce: "pre" },
      { test: /\.js$|\.tag$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  devServer: {
    contentBase: './public'
  }
};
