/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: `長野県上田市にある一棟貸切り宿もりしま。一泊一組限定。キッチンがあります。宿泊以外のご利用にも柔軟に対応できます。庭にコンロがあるのでBBQも可能です。`,
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
          property: `og:url`,
          content: `https://morishima1.com/`,
        },
        {
          property: `og:description`,
          content: `長野県上田市にある一棟貸切り宿もりしま。一泊一組限定。キッチンがあります。宿泊以外のご利用にも柔軟に対応できます。庭にコンロがあるのでBBQも可能です。`,
        },
        {
          property: `og:image`,
          content: `https://morishima.s3-ap-northeast-1.amazonaws.com/B2C94ADF-C8F3-44A4-92C6-7693EA6E4785_1_105_c.jpeg`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `@morishima1_2020`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: `長野県上田市にある一棟貸切り宿もりしま。一泊一組限定。キッチンがあります。宿泊以外のご利用にも柔軟に対応できます。庭にコンロがあるのでBBQも可能です。`,
        },
        {
          name: `google-site-verification`,
          content: `uEDc67CGca4iUBX820jiWmzsJP4kSdFZ8XX05pKmSIk`
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `ja`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
