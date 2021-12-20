import * as React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
//* CSS
import 'normalize.css'
import '../utils/scss/main.scss'
//* Local Imports
import Footer from 'components/global/footer'
import Nav from 'components/global/nav'
import GlobalStyles from 'utils/GlobalStyles'
import theme from 'utils/Theme'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from 'components/functional/seo'

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

const icon = 'favicon.png'

const Layout = ({ children, title, description }) => {
  const { allSite } = useStaticQuery(graphql`
    query SiteQuery {
      allSite {
        nodes {
          siteMetadata {
            title
            siteUrl
            siteName
            description
            author
          }
        }
      }
    }
  `)
  const settings = allSite.nodes[0].siteMetadata
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: `${settings.title}`,
    description: `${settings.description}`,
    url: `${settings.siteUrl}`,
    logo: `${settings.siteUrl}/${icon}`,
  }
  return (
    <ThemeProvider theme={theme}>
      <SEO schemaMarkup={schema} title={title} description={description} />
      <>
        <GlobalStyles />
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout
