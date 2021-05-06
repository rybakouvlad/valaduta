/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const watchMode = argv.liveReload || false;
  const modeEnv = argv.mode || 'development';
  const isProd = modeEnv === 'production';
  const config = webpackConfig(modeEnv);

  const optimizations = {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimizer: [],
  };

  if (isProd) {
    // optimizations.minimizer.push(new UglifyJsPlugin())
  }

  return {
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 4220,
      watchContentBase: true,
      progress: true,
      hot: true,
      open: true,
      historyApiFallback: true,
    },
    resolve: config.resolve,
    module: {
      rules: [
        config.modules.js,
        config.modules.sass,
        config.modules.img,
        config.modules.css,
        config.modules.font,
        config.modules.svg,
        config.modules.audio,
      ],
    },
    plugins: [
      new ESLintPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/Html/Browser.html',
      }),
      new CopyPlugin({
        patterns: [
          {
            from: './src/assets/beers',
            to: './assets/beers',
          },
        ],
      }),
    ],
    entry: {
      main: './src/Client.tsx',
    },
    output: {
      filename: watchMode ? 'assets/[name].[hash].js' : 'assets/[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    performance: {
      hints: false,
    },
    optimization: optimizations,
    stats: {
      children: false,
    },
  };
};
