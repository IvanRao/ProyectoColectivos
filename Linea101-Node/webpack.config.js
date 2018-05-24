var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/client');

var config = {
  entry: {
    main : APP_DIR + '/index.jsx',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  optimization: {
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendors",
                chunks: "all"
            }
        }
    }
},
  devtool: 'inline-source-map',
  module : {
    rules : [
      {
          test: /\.jsx?$/,
          loader: "babel-loader",
          query: {compact: false}
      }
    ]
 }

};

module.exports = config;
