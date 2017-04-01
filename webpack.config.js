const webpack = require('webpack');
const { addPlugins, createConfig, defineConstants, resolveAliases, env, entryPoint, setOutput, sourceMaps } = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');
const devServer = require('@webpack-blocks/dev-server2');
const postcss = require('@webpack-blocks/postcss');
const vue = require('./build/webpack-blocks/vue');
const eslint = require('./build/webpack-blocks/eslint');

const autoprefixer = require('autoprefixer');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = createConfig([
  entryPoint('./src/index.js'),
  setOutput('./dist/bundle.[hash].js'),
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
  ]),
  env('development', [
    vue(),
    eslint(),
    addPlugins([
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new FriendlyErrorsPlugin(),
    ]),
    devServer(),
    sourceMaps(),
  ]),
  env('production', [
    entryPoint('webpack-dev-server/client'),
    vue({
      loaders: {
        css: ExtractTextPlugin.extract({
          use: 'css-loader!postcss-loader',
          fallback: 'vue-style-loader',
        }),
      },
    }),
    eslint(),
    sourceMaps('source-map'),
    addPlugins([
      new ExtractTextPlugin('css/style.[hash:6].css'),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
        sourceMap: true,
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
    ]),
  ]),
]);
