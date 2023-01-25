const { BundleDeclarationsWebpackPlugin } = require('bundle-declarations-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  target: 'web',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    library: 'PasswordStrometer',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  externals: {
    react: 'React',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleDeclarationsWebpackPlugin(),
  ],
}
