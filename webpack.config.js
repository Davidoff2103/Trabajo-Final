const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    app: './frontend/app.js',
    app2: './frontend/app2.js'
  },
  mode: 'development',
  output: {
    path: path.join(__dirname, 'backend/public'),
    filename: 'js/[name].js'
  },
  module : {
    rules: [
      {
        test: /\.css/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin( {
      filename: 'index.html',
      template: './frontend/index.html',
      chunks: []
      // minify: {
      //   collapseWhitespace: true,
      //   removeComments: true,
      //   removeRedundantAttributes: true,
      //   removeScriptTypeAttributes: true,
      //   removeStyleLinkTypeAttributes: true,
      //   useShortDoctype: true
      // }
    } ),
    new HtmlWebpackPlugin( {
      filename: 'index2.html',
      template: './frontend/index2.html',
      chunks: ['app']
    } ),
    new HtmlWebpackPlugin( {
      filename: 'index3.html',
      template: './frontend/index3.html',
      chunks: ['app2']
    }),
    new MiniCssExtractPlugin({
      filename: "css/bundle.css"
    })
  ],
  devtool: 'source-map'
};
