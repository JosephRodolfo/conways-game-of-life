const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


 module.exports = {
   mode: 'development',
   entry: {
     index: './src/index.js',
    //  print: './src/print.js',
   },
   devtool: 'inline-source-map',

  devServer: {

    static: './dist',

  },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Development',
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
     publicPath: "/conways-game-of-life/",
   },

  optimization: {

    runtimeChunk: 'single',

  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
 };