const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "utils": path.resolve(__dirname, '../src/utils'),
          "hooks": path.resolve(__dirname, '../src/hooks'),
          "components": path.resolve(__dirname, '../src/components'),
          "theme": path.resolve(__dirname, '../src/theme')
        },
      }
    },
    `gatsby-plugin-styled-components`,
  ],
}