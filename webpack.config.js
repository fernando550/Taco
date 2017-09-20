const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  //entry: './index.js',
  entry: './canvas/0index.js',
  
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  
  plugins: [
    new HtmlPlugin({
      title: 'Project Taco',
      // template: './index.html'
      template: './canvas/index.html'
    }),
    
    // new ExtractTextPlugin("bundle.css")
  ],
  
  module: {
    rules: [
      { test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
    //   { 
    //     test: /\.css$/,
    //     use: ExtractTextPlugin.extract({
    //       fallback: "style-loader", 
    //       use: "css-loader"
    //     })
    //   }
    ]
  }
  
};