const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const plugins = []
process.argv.includes('--analyze') && plugins.push(new BundleAnalyzerPlugin())

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    alias: {
      theme: path.resolve(__dirname, './src/theme'),
      utils: path.resolve(__dirname, './src/utils'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    ...plugins,
  ],
  mode: 'production',
};
