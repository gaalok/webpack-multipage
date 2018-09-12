module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-preset-env': {
      features: {
        'custom-media-queries': true,
      },
    },
    'postcss-reporter': {},
  },
};
