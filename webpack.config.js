// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = (filename) => path.resolve(__dirname, filename);
const buildDir = 'dist';

const entry = resolve('./src/index.js');

const output = {
  path: resolve(`./${buildDir}`),
  filename: 'bundle.[contenthash:8].js',
};

const rules = [
  {
    test: /\.js[x]?$/i,
    use: 'babel-loader',
    exclude: /\/node_modules\//,
  },
  {
    test: /\.html$/i,
    loader: 'html-loader',
  },
  {
    test: /\.s[ca]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader',
    ],
  },
];

const alias = {
  root: resolve('./src/'),
  ui: resolve('./src/ui/'),
  components: resolve('./src/components/'),
};

const extensions = ['.jsx', '.js', 'json'];

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name][contenthash:8].css',
  }),
  new HtmlWebpackPlugin({
    template: resolve('./src/index.html'),
  }),
];

const devServer = {
  contentBase: resolve(buildDir),
  port: 8080,
};

module.exports = {
  entry,
  output,
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
