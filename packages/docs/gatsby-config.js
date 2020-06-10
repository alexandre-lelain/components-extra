const path = require('path')

module.exports = {
  siteMetadata: {
    title: `components-extra`,
    description: `React UI molecule components based on styled-components & material-ui.`,
    author: `Alexandre Le Lain <lelain.alexandre@gmail.com>`,
    github: 'https://github.com/alexandre-lelain/components-extra',
    url: 'https://components-extra.netlify.com/',
    keywords: [
      'components-extra, react, components, molecules, blocks, ui, material design, cookies, navbar, footer',
    ],
    image: 'https://components-extra.netlify.com/public/logo.png',
    google: process.env.GOOGLE || '',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lib-components`,
        path: path.resolve(__dirname, '../components-extra/src/components'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              backgroundColor: `transparent`,
              maxWidth: 560,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: path.resolve(`./src/components/Layout.tsx`),
      },
    },
    `gatsby-remark-images`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@icons': path.resolve(__dirname, 'src/icons'),
          '@theme': path.resolve(__dirname, 'src/theme'),
          '@utils': path.resolve(__dirname, 'src/utils'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@components': path.resolve(__dirname, 'src/components'),
        },
      },
    },
    {
      resolve: 'gatsby-transformer-react-docgen',
      options: {
        ignore: ['node_modules', 'tests'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        display: `minimal-ui`,
        name: `components-extra`,
        short_name: `components-extra`,
        start_url: `/`,
        background_color: `#404040`,
        theme_color: `#404040`,
        icon: `./src/images/logo.png`,
      },
    },
  ],
}
