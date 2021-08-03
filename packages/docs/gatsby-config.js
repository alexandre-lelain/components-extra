const path = require('path')

module.exports = {
  siteMetadata: {
    title: `components-extra`,
    description: `React UI molecule components based on styled-components & material-ui.`,
    author: `Alexandre Le Lain <lelain.alexandre@gmail.com>`,
    siteUrl: 'https://components-extra.netlify.app/',
    github: 'https://github.com/alexandre-lelain/components-extra',
    url: 'https://components-extra.netlify.app/',
    keywords:
      'components-extra, react, components, molecules, blocks, ui, material design, cookies, navbar, footer',
    image: 'https://components-extra.netlify.app/icons/icon-512x512.png',
    google: process.env.GOOGLE || '',
    githubEditLinkRoot:
      'https://github.com/alexandre-lelain/components-extra/tree/master/packages/docs/src/pages',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
          '@hooks': path.resolve(__dirname, 'src/hooks'),
        },
      },
    },
    {
      resolve: 'gatsby-transformer-react-docgen',
      options: {
        ignore: ['node_modules', 'tests', 'docs'],
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
