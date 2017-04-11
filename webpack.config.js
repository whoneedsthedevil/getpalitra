'use strict';

const NODE_ENV = process.env.NODE_ENV;
const path = require('path');
const webpack = require('webpack');
const webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: "./assets/js/main.js"
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './output')
  },

  plugins: [
    new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    }),
    new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
    }),
    new ExtractTextPlugin('bundle.css')
  ],

  resolve: {
    modules: ['node_modules'],
    extensions: ['*', '.js']
  },
  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['-loader'],
    extensions: ['*', '.js']
  },
  module: {
      loaders: [
       { 
        test: /\.js$/, 
        loader: "babel-loader",
        exclude: path.resolve(__dirname, 'node_modules/')
       },
       { 
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style",
          use: "css!sass"
        })
       },
       {
            test: /\.(png|jpg|gif|woff2?|ttf|eot|svg|otf)$/,
            loader: 'file-loader'
        }
     ]
  },
  devtool: NODE_ENV == 'development' ? 'source-map' : false
};


if (NODE_ENV == 'production') {
    module.exports.plugins.push(
      new webpackUglifyJsPlugin({
        cacheFolder: path.resolve(__dirname, './assets/'),
        debug: true,
        minimize: true,
        sourceMap: false,
        output: {
          comments: false
        },
        compress: {
          warnings: true,
          drop_console: true,
          unsafe: true
        }
      })
    );
}


