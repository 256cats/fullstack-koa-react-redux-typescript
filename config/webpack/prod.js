// production config
const merge = require('webpack-merge');
const { resolve, join } = require('path');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  entry: './index.tsx',
  output: {
    filename: 'bundle.min.js',
    path: resolve(join(__dirname, '..', '..', 'build', 'public')),
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: []
})
