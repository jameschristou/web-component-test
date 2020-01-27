const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.css' })
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // only enable hot in development
              hmr: true,
              // if hmr does not work, this is a forceful method.
              reloadAll: true,
            }
          },
          'css-loader',
          'sass-loader'
        ],
      },
    ]
  },
  devServer: {
    contentBase: './src'
  }
};