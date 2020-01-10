const path = require('path')

module.exports = {
  resolve: {
    alias: {
      theme: path.resolve(__dirname, '../src/theme'),
      utils: path.resolve(__dirname, '../src/utils'),
      components: path.resolve(__dirname, '../src/components'),
      hooks: path.resolve(__dirname, '../src/hooks'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
}
