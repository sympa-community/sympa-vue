const webpack = require('webpack');
const { addPlugins, createConfig, defineConstants, resolveAliases, env, entryPoint, setOutput, sourceMaps } = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');
const devServer = require('@webpack-blocks/dev-server2');
const postcss = require('@webpack-blocks/postcss');
const extractText = require('@webpack-blocks/extract-text2');
const vue = require('./build/webpack-blocks/vue');

const autoprefixer = require('autoprefixer');
const path = require('path');

const BabiliPlugin = require('babili-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = createConfig([
  entryPoint('./src/index.js'),
  setOutput('./dist/bundle.[hash].js'),
  vue(),
  resolveAliases({ '@': path.resolve('./src') }),
  babel(),
  postcss([
    autoprefixer({ browsers: ['> 1%', 'last 2 versions'] }),
  ]),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV || 'development',
  }),
  addPlugins([
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new ExtractTextPlugin('css/style.[hash].css'),
  ]),
  env('development', [
    addPlugins([
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new FriendlyErrorsPlugin(),
    ]),
    devServer(),
    sourceMaps(),
  ]),
  env('production', [
    sourceMaps('source-map'),
    addPlugins([
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
    ]),
  ]),
]);
