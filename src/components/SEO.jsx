/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const {
    site: { siteMetadata: meta }
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            language
          }
        }
      }
    `
  )

  return (
    <Helmet>
      <html lang={meta.language} />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />

      <link rel="home" href={meta.siteUrl} />
      <link rel="canonical" href={meta.siteUrl} />

      {/* Open graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.siteUrl} />
      <meta property="og:image" content="/card.png" />
      <meta property="og:image:secure_url" content="/card.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={meta.title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:creator" content={meta.author} />
      <meta name="twitter:url" content={meta.siteUrl} />
    </Helmet>
  )
}
