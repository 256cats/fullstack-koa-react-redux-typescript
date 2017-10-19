// shared config (dev and prod)
const { resolve, join } = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const NODE_ENV_DEV = process.env.NODE_ENV === 'development';

const tsLoaderUse = [{
  loader: 'awesome-typescript-loader',
  options: {
    configFileName: 'tsconfig.json',
    useCache: NODE_ENV_DEV
  }
}];

if (NODE_ENV_DEV) {
  tsLoaderUse.unshift({
    loader: 'react-hot-loader/webpack'
  });
}

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // https://github.com/Microsoft/TypeScript/issues/11677
    mainFields: ['main']
  },
  target: 'web',
  context: resolve(join(__dirname, '..', '..', 'src', 'client')),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: tsLoaderUse
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('postcss-smart-import'),
                require('autoprefixer'),
              ]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ]
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    new StyleLintPlugin()
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  performance: {
    hints: false,
  },
  stats: {
    colors: true,
    errorDetails: true,
    modules: true,
    reasons: true
  }
}
