// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = (filename) => path.resolve(__dirname, filename);
const buildDir = 'dist';
const { NODE_ENV } = process.env;
const isDev = NODE_ENV !== 'production';

const alias = {
  root: resolve('./src/'),
  images: resolve('./public/images/'),
  icons: resolve('./public/icons/'),
  styles: resolve('./src/styles/'),
  ui: resolve('./src/components/ui/'),
  components: resolve('./src/components/'),
  layout: resolve('./src/layout/'),
};

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
    exclude: /\.module.(s(a|c)ss)$/,
    use: [
      styleLoader,
      'css-loader',
      sassLoader,
    ],
  },
  {
    test: /\.(svg|png|jp(e)?g)$/,
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
