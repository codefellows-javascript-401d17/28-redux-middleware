'use strict';

require('dotenv').condig({path: `${__dirname}/.dev.env`});
const production =process.env.NODE_ENV === 'production';

const {DefinePlugin, EnvirmentPlugin} = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const Extractplugin = require('extract-text-webpack-plugin');

let plugin = [
  new EnviormentPlugin(['NODE_ENV']),
  new ExtractPlugin('bundle-[hash].css'),
  new HtmlPlugin({template: `${__dirname}/src/index.html`}),
  new Define({
    __debug__: JSON.stringify(!production)
  })
]

if(production){
  plugins = plugins.concat([new CleanPlugin(), new UglifyPlugin()]);
}

module.exports= {
  plugins,
  entry: `${__dirname}/src/main.js`,
  devServer: {
    historyApiFallback: true
  },
  modules: {
    rules:{
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader'])
      },
      test /\.(woff|woff2|ttf|eot|glyph|\.svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'font/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png|tiff|svg)$/,
        exclude: /\.glyph.svg/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 6000,
              name: 'image/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp3|aac|aiff|wav|flac|m4a|mp4|ogg)$/,
        exclude: /\.glyph.svg/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'audio/[name].[ext]' }
          }
        ]
      }
    ]
  }
}
