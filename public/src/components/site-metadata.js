import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

const SiteMetadata = ({ pathname }) => (
  <StaticQuery
    query={graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            siteUrl
            title2
            facebook
	    instagram
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { siteUrl, title2, facebook, instagram },
      },
    }) => (
      <Helmet >
        <html lang="ba" />
        <link rel="canonical" href={`${siteUrl}${pathname}`} />
	<link rel="icon" href={`/favicon.png`} />
        <meta name="docsearch:version" content="2.0" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />

        <meta property="og:url" content={`${siteUrl}${pathname}`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ba" />
        <meta property="og:site_name" content={title2} />
        <meta property="og:image" content={`${siteUrl}/slideshow/0-small.jpg`} />
        <meta property="og:image:width" content="672" />
        <meta property="og:image:height" content="504" />


      </Helmet>
    )}
  />
)

export default SiteMetadata
