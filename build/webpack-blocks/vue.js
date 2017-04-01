module.exports = (options) => {
  const setter = context => ({
    resolve: {
      extensions: ['.vue'],
    },
    module: {
      loaders: [{
        test: context.fileType('application/x-vue-component'),
        loader: 'vue-loader',
        options,
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
