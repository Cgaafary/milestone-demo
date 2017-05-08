var webpack = require('webpack');

var config = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  entry: {
    app: './index.tsx',
  },

  devtool: "source-map",

  resolve: {
    extensions: ["*", ".ts", ".tsx", ".js", ".json"]
  },

  output: {
    path: __dirname + '/dist', // `dist` is the destination
    filename: 'bundle.js',
  },

  module: {
      rules: [
        { 
          test: /\.tsx?$/, 
          exclude: /node_modules/,
          use: ['babel-loader','ts-loader']
        },
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

module.exports = config;