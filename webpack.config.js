const path = require('path');

module.exports = [
  {
    mode: process.env.NODE_ENV,
    entry: './client/index.jsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        {
          test: /\.s?css/,
          exclude: /(node_modules)/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    devServer: {
      publicPath: '/build',
      proxy: {
        '/': 'http://localhost:3000',
      },
      hot: true,
    },
  },
];
