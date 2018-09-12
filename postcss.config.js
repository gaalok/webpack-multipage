// https://www.w3cplus.com/css/vw-for-layout.html

module.exports = {
  plugins: {
    autoprefixer: {}, // add vendor prefixes to CSS
    'postcss-import': {}, // transform @import rules by inlining content
    'postcss-nested': {}, // unwrap nested rules like how Sass does it.
    'postcss-preset-env': { // Convert modern CSS into something browsers understand
      features: {
        'custom-media-queries': true,
      },
    },
    'postcss-reporter': {}, // Log PostCSS messages in the console

    // 'postcss-px-to-viewport': { // generates viewport units (vw, vh, vmin, vmax) from pixel units
    //   viewportWidth: 750,
    //   viewportHeight: 1334,
    //   unitPrecision: 5,
    //   viewportUnit: 'vw',
    //   selectorBlackList: [],
    //   minPixelValue: 1,
    //   mediaQuery: false,
    // },
    // 'postcss-aspect-ratio-mini': {}, // fix an element's dimensions to an aspect ratio
    // 'postcss-write-svg': {}, // write SVGs directly in CSS
  },
};
