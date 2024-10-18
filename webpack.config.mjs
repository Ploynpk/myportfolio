import { fileURLToPath } from 'url';
import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.ts',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@emotion/react': path.resolve(__dirname, 'node_modules/@emotion/react'),
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 8888,
  },
  devtool: 'eval-source-map',
}
