import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Instagram from "../components/instagram"
import GoogleMap from "../components/googleMap"
import Footer from "../components/footer"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="一棟貸切りの宿 もりしま  長野県上田市"
        keywords={[
          `長野`,
          `上田`,
          `武石`,
          `宿`,
          `BBQ`,
          `バーベキュー`,
          `BBQ`,
          `貸切り`,
          `もりしま`,
        ]}
      />
      <section className="hero">
        <Img
          fluid={data.top.childImageSharp.fluid}
          className="hero-image"
          alt="一棟貸切りの宿 もりしま 長野県上田市"
        />
      </section>
      <section className="container">
        <h1 className="title">一棟貸し宿もりしま長野県上田市</h1>
        <span className="description">
          長野県上田市武石
          <br />
          一泊一組限定
          <br />
          平屋一棟貸切りの宿
        </span>
        <div className="gallery-grid">
          <Img
            fluid={data.bbq.childImageSharp.fluid}
            className="gallery-img1"
            alt="一棟貸切りの宿 もりしま 長野県上田市BBQ"
          />
          <Img
            fluid={data.exterior.childImageSharp.fluid}
            className="gallery-img2"
            alt="一棟貸切りの宿 もりしま 長野県上田市 外観"
          />
          <Img
            fluid={data.living.childImageSharp.fluid}
            className="gallery-img3"
            alt="一棟貸切りの宿 もりしま 長野県上田市 リビング"
          />
        </div>
        <div className="about-grid">
          <h2>快適なご滞在をサポート</h2>
          <p>
            家具・家電など一式が揃っていますので、ご自由にお使いいただけます。
            <br></br>
            宿泊だけでなく、お打合せや教室などの時間単位でのご利用も可能です。
            <br></br>
            柔軟に対応いたしますので、お気軽にお問合せください！！
          </p>
        </div>
        <Link to={"/price/"} className="price-link">ご利用料金はこちらをご覧ください。</Link>
        <Link to={"/rule/"} className="price-link">宿泊約款と利用規則</Link>
      </section>
      <div className="parallax"></div>
      <section className="container">
        <Instagram />
      </section>
      <GoogleMap />
      <Footer />
    </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    top: file(relativePath: { eq: "top-morishima.jpg" }) {
      ...fluidImage
    }
    living: file(relativePath: { eq: "living.jpg" }) {
      ...fluidImage
    }
    bbq: file(relativePath: { eq: "bbq.jpg" }) {
      ...fluidImage
    }
    exterior: file(relativePath: { eq: "exterior.jpg" }) {
      ...fluidImage
    }
  }
`

export default IndexPage
