const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.(png|gif|jpe?g|svg|ico)$/,
            loader: 'file-loader',
            exclude: /node_modules/,
            options: {name: 'assets/images/[name]-[hash].[ext]'}
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader']
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Prabhaav'
        })
      ]
  };

  module.exports = config;