var path = require("path")

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(ttf|svg|jpg|jpeg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 9000
  }
}