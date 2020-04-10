module.exports = {
  siteMetadata: {
    title: `components-extra`,
    description: `React UI molecule components based on styled-components & material-ui.`,
    author: `Alexandre Le Lain <lelain.alexandre@gmail.com>`,
    url: "https://components-extra.netlify.com/",
    keywords: ["components-extra, react, components, molecules, blocks, ui, material design, cookies, navbar, footer"],
    image: "https://components-extra.netlify.com/public/logo.png",
    google: process.env.GOOGLE || '',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-offline`,
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
