import webpack, { NewUseRule } from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as Clean from 'clean-webpack-plugin';

const rules: NewUseRule[] = [
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    enforce: 'pre',
    use: 'typed-css-modules-loader'
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
    include: /react-ui/
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
    ],
    exclude: /react-ui/
  },
  {
    test: /\.(png|jpg|svg|woff|woff2|eot)$/,
    use: 'file-loader'
  }
];

const plugins = [
  new HtmlWebpackPlugin({
    filename: './index.html',
    template: path.join(__dirname, 'src/public/index.html'),
    inject: 'body'
  }),
  new Clean(['dist/app'])
];

const config: webpack.Configuration = {
  context: path.join(__dirname, 'src'),
  entry: {
    main: './index.tsx'
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist', 'app'),
    filename: 'assets/[name].[hash].js',
    chunkFilename: 'assets/[id].js'
  },
  devtool: 'eval',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules
  },
  plugins
};

export default config;
