// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const resolve = (filename) => path.resolve(__dirname, filename);
const buildDir = 'dist';
const { NODE_ENV } = process.env;
const isDev = NODE_ENV !== 'production';

const alias = {
  root: resolve('./client/'),
  images: resolve('./public/images/'),
  icons: resolve('./public/icons/'),
  router: resolve('./client/router/'),
  styles: resolve('./client/styles/'),
  ui: resolve('./client/ui/'),
  layout: resolve('./client/layout/'),
  api: resolve('./client/api/'),
  models: resolve('./client/models/'),
};

const entry = {
  app: resolve('./client/index.js'),
};

const output = {
  path: resolve(`./${buildDir}`),
  filename: isDev ? 'bundle.js' : 'bundle.[contenthash:8].js',
};

const styleLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;

const sassLoader = {
  loader: 'sass-loader',
  options: {
    additionalData: '@import "~styles/settings";',
    sourceMap: isDev,
  },
};

const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: isDev,
  },
};

const fileLoader = {
  loader: 'file-loader',
  options: {
    name: '[path][name].[ext]?v=[contenthash]',
  },
};

const rules = [
  {
    test: /\.js[x]?$/i,
    use: 'babel-loader',
    exclude: [/node_modules/],
  },
  {
    test: /\.html$/i,
    loader: 'html-loader',
  },
  {
    test: /\.module\.s(a|c)ss$/i,
    use: [
      styleLoader,
      cssLoader,
      sassLoader,
    ],
  },
  {
    test: /\.s[ca]ss$/i,
    exclude: /\.module.(s(a|c)ss)$/i,
    use: [
      styleLoader,
      'css-loader',
      sassLoader,
    ],
  },
  {
    test: /\.(svg|png|jp(e)?g)$/i,
    exclude: [alias.icons],
    use: [
      fileLoader,
    ],
  },
  {
    test: /\.svg$/,
    include: [alias.icons],
    use: [
      {
        loader: 'svg-sprite-loader',
        options: {
          symbolId: (filePath) => path.basename(filePath),
        },
      },
      'svgo-loader',
    ],
  },
];

const extensions = ['.jsx', '.js', '.json', '.scss'];

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name][contenthash:8].css',
  }),
  new HtmlWebpackPlugin({
    template: resolve('./client/index.html'),
  }),
  new SimpleProgressWebpackPlugin({
    format: 'minimal',
  }),
];

const devServer = {
  contentBase: resolve(buildDir),
  port: 8080,
};

const optimization = {
  minimize: !isDev,
  minimizer: [
    new TerserWebpackPlugin({
      parallel: true,
      extractComments: true,
    }),
  ],
  splitChunks: {
    chunks: 'all',
    minSize: 100000,
    maxSize: 250000,
    cacheGroups: {
      vendors: {
        test: /\/node_modules\//,
        priority: -10,
      },
    },
  },
};

if (!isDev) {
  plugins.push(new CleanWebpackPlugin());
}

module.exports = {
  mode: NODE_ENV,
  devtool: isDev && 'inline-source-map',
  stats: 'minimal',
  entry,
  output,
  optimization,
  module: {
    rules,
  },
  resolve: {
    alias,
    extensions,
  },
  plugins,
  devServer,
};
