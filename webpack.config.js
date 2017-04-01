const webpack = require('webpack');
const { addPlugins, createConfig, defineConstants, resolveAliases, env, entryPoint, setOutput, sourceMaps } = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');
const devServer = require('@webpack-blocks/dev-server2');
const postcss = require('@webpack-blocks/postcss');
const autoprefixer = require('autoprefixer');
const path = require('path');

const BabiliPlugin = require('babili-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* Define a vue config block. This might go in another module in the future */
const vue = () => {
  const setter = context => ({
    resolve: {
      extensions: ['.vue'],
    },
    module: {
      loaders: [{
        test: context.fileType('application/x-vue-component'),
        loaders: ['vue-loader'],
      }],
    },
  });

  function pre(context) {
    const registeredTypes = context.fileType.all();
    if (!('application/x-vue-component' in registeredTypes)) {
      context.fileType.add('application/x-vue-component', /\.vue$/);
    }
  }

  return Object.assign(setter, { pre });
};

module.exports = createConfig([
  entryPoint('./src/index.js'),
  setOutput('./dist/bundle.js'),
  vue(),
  resolveAliases({ '@': path.resolve('./src') }),
  babel(),
  postcss([
    autoprefixer({ browsers: ['> 1%', 'last 2 versions'] }),
  ]),
  defineConstants({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  }),
  addPlugins([
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ]),
  env('development', [
    addPlugins([
      new webpack.HotModuleReplacementPlugin(),
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
      new BabiliPlugin(),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
    ]),
  ]),
]);
