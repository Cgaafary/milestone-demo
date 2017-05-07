var webpack = require('webpack');

var config = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  entry: {
    app: './index.tsx',
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  output: {
    path: __dirname + '/dist', // `dist` is the destination
    filename: 'bundle.js',
  },

  module: {
      rules: [
        { 
          test: /\.tsx$/, 
          use: ['babel-loader','awesome-typescript-loader']
        },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
      ]
  },
  externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};

module.exports = config;