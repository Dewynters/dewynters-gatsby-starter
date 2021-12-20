import PropTypes from 'prop-types'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'

export default function SEO({
  title,
  description,
  twitter,
  img,
  schemaMarkup,
}) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)
  const settings = site.siteMetadata
  return (
    <Helmet>
      <html lang="en" />
      <title>{settings.title || title}</title>
      <meta name="description" content={settings.description || description} />
      <link rel="icon" href="./src/images/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta property="og:url" content={`${settings.siteUrl}${pathname}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content="./static/open-graph.png" /> */}
      <meta name="twitter:card" content="summary_large_image" /> 
      <meta property="twitter:domain" content={`${settings.siteUrl}`} />
      <meta property="twitter:url" content={`${settings.siteUrl}${pathname}`} />
      <meta name="twitter:creator" content={settings.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content="./static/open-graph.png" /> */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  )
}
