import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO: JSX.Element = ({ description, lang = 'en', meta = [], title }: SEOProps) => {
  const { site: { siteMetadata } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            google
          }
        }
      }
    `,
  )

  const metaDescription = description || siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: siteMetadata.image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:image`,
          content: siteMetadata.image,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:label1`,
          content: 'Powered by',
        },
        {
          name: `twitter:label2`,
          content: 'Category',
        },
        {
          name: `twitter:data1`,
          content: `Material-ui, styled-components`,
        },
        {
          name: `twitter:data2`,
          content: 'React blocks',
        },
        {
          name: `google-site-verification`,
          content: siteMetadata.google,
        },
      ].concat(meta)}
    >
      <link
        rel="stylesheet preconnect"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        media="print"
        // @ts-ignore
        onLoad="this.media='all'"
      />
    </Helmet>
  )
}

interface SEOProps {
  description?: string
  lang?: string
  meta?: array
  title: string
}

export default SEO
