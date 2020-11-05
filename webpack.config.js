// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = (filename) => path.resolve(__dirname, filename);
const buildDir = 'dist';
const { NODE_ENV } = process.env;
const isDev = NODE_ENV !== 'production';

const entry = resolve('./src/index.js');

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

const rules = [
  {
    test: /\.js[x]?$/i,
    use: 'babel-loader',
    exclude: [/node_modules/],
  },
  {
    test: /\.html$/i,
    loader: 'html-loader',
    options: {
      attributes: {
        list: [
          {
            tag: 'img',
            attribute: 'src',
            type: 'src',
          },
        ],
      },
    },
  },
  {
    test: /\.module\.s(a|c)ss$/i,
    use: [
      styleLoader,
      {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: isDev,
        },
      },
      sassLoader,
    ],
  },
  {
    test: /\.s[ca]ss$/i,
    exclude: /\.module.(s(a|c)ss)$/,
    use: [
      styleLoader,
      'css-loader',
      sassLoader,
    ],
  },
  {
    test: /\.(svg|png|jp(e)?g)$/,
    use: [
      'file-loader',
    ],
  },
];

const alias = {
  root: resolve('./src/'),
  images: resolve('./public/images/'),
  styles: resolve('./src/styles/'),
  ui: resolve('./src/ui/'),
  components: resolve('./src/components/'),
  layout: resolve('./src/layout/'),
};

const extensions = ['.jsx', '.js', '.json', '.scss'];

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
  mode: NODE_ENV,
  entry,
  output,
  module: {
    rules,
  },
  devtool: isDev && 'inline-source-map',
  resolve: {
    alias,
    extensions,
  },
  plugins,
  devServer,
};
