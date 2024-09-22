const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin'); 

module.exports = {
  entry: './src/index.tsx', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', 
    }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};
