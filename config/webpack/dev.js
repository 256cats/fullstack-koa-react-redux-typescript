// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const { resolve, join } = require('path');
const commonConfig = require('./common');
const outputPath = resolve(join(__dirname, '..', '..', 'src', 'public'));
const publicPath = '/';

module.exports = merge(commonConfig, {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    'react-hot-loader/patch', // activate HMR for React
    'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
    './index.tsx' // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    path: outputPath,
    publicPath: publicPath // necessary for HMR to know where to load the hot update chunks
  },
  devServer: {
    hot: true, // enable HMR on the server
    contentBase: outputPath,
    publicPath: publicPath
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  ]
})
