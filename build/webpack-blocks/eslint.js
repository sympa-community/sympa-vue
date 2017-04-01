module.exports = options => () => ({
  module: {
    loaders: [{
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      exclude: /node_modules/,
      options,
    }],
  },
});
