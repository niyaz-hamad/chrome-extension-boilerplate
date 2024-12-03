import path from 'path';
import { fileURLToPath } from 'url';

import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getHtmlPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new HtmlPlugin({
        title: 'Chrome Extension',
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  );
}

export default {
  entry: {
    popup: path.resolve(__dirname, 'src/pages/popup/main.tsx'),
    options: path.resolve(__dirname, 'src/pages/options/main.tsx'),
    serviceWorker: path.resolve(__dirname, 'src/service_workers/main.ts'),
    contentScript: path.resolve(__dirname, 'src/content_scripts/main.ts'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: '',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    ...getHtmlPlugins(['popup', 'options']),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
