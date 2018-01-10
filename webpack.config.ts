const path = require('path');
import webpack, { NewUseRule } from 'webpack';
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
    use: ['style-loader', 'css-loader'],
    exclude: /node_modules/
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
    rules: rules
  },
  plugins
};

export default config;
