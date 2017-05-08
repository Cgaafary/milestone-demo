var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },

  devtool: "source-map",

  resolve: {
    extensions: ["*", ".ts", ".tsx", ".js", ".json"]
  },

  output: {
    path: path.join(__dirname, '/dist'), // `dist` is the destination
    filename: 'bundle.js',
  },

  // devServer: {
  //   contentBase: path.join(__dirname, "dist"),
  //   compress: true,
  //   port: 3000
  // },

  plugins: [
    new HtmlWebpackPlugin({
      filename: './src/index.html'
    })
  ],

  module: {
      rules: [
        // { 
        //     test: /\.tsx?$/, 
        //     exclude: /node_modules/,
        //     use: ['babel-loader','ts-loader']
        // },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
      ]
  },
};