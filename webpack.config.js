const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  // tells devServer WHAT to serve
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  devServer: {
    // tells devServer WHEERE to serve (publicPath)
    //static: path.join(__dirname),
    static: {
      directory: path.join(__dirname),
      publicPath: '/',
    },

    // proxy: {
    //   '/api/leaders': 'http://localhost:3000/api/leaders',
    // },
  },
};
