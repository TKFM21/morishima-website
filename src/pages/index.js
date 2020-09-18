import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
// import Instagram from "../components/instagram"
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
            柔軟に対応いたしますので、お気軽に
            <a href="https://forms.gle/G7YkGwHAQPzbdhrr8">お問合せ</a>ください！
          </p>
        </div>
        {/* <div className="campaign">
          2020年8月7日～2021年1月末（予定）：上田市民向けキャンペーン
          <a href="https://forms.gle/qmzHUFJ2D12WNhANA">詳細</a>
        </div> */}
        <hr />
        <Link to={"/campaign202008/"} className="price-link">
          宿泊料金半額！！地域限定キャンペーン
        </Link>
        <div className="campaign202008">
          <p>ご利用者様が下記の場合に適用できるキャンペーンです。</p>
          <p>
            【東京都、神奈川県、大阪府以外にお住いの方】
          </p>
        </div>
        <hr />
        <Link to={"/price/"} className="price-link">
          ご利用料金はこちらをご覧ください。
        </Link>
        <Link to={"/room/"} className="price-link">
          お部屋と設備のご案内
        </Link>
        <Link to={"/rule/"} className="price-link">
          宿泊約款と利用規則
        </Link>
        <p className="reservation">
          ご予約は<a href="https://forms.gle/tmqWVA1WjK4MMMvf9">こちら</a>から
        </p>
      </section>
      <div className="parallax"></div>
      {/* <section className="container">
        <Instagram />
      </section> */}
      <GoogleMap />
      <section className="youtube-access">
        <div className="youtube-wrap">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WvJGikkdsG4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <section className="index-tweet-container">
        <blockquote className="twitter-tweet" data-theme="dark">
          <p lang="ja" dir="ltr">
            長野県上田市の武石地域で営業している宿です。
            <br></br>
            一泊一組限定、平屋一棟を貸切にできます。食事の提供はできませんが、自由に使えるキッチンがあります。庭にはBBQコンロもあります😀
            <br></br>
            宿泊以外にも時間貸しなどにも柔軟に対応できますので、お気軽にお問い合わせください。
            <a href="https://twitter.com/hashtag/%E9%95%B7%E9%87%8E?src=hash&amp;ref_src=twsrc%5Etfw">
              #長野
            </a>
            <a href="https://twitter.com/hashtag/%E4%B8%8A%E7%94%B0?src=hash&amp;ref_src=twsrc%5Etfw">
              #上田
            </a>
            <a href="https://twitter.com/hashtag/%E6%AD%A6%E7%9F%B3?src=hash&amp;ref_src=twsrc%5Etfw">
              #武石
            </a>
            <a href="https://twitter.com/hashtag/%E5%AE%BF?src=hash&amp;ref_src=twsrc%5Etfw">
              #宿
            </a>
          </p>
          &mdash; 一棟貸し宿もりしま@長野県上田市 (@morishima1_2020)
          <a href="https://twitter.com/morishima1_2020/status/1231130744669401089?ref_src=twsrc%5Etfw">
            February 22, 2020
          </a>
        </blockquote>
      </section>
      <section className="index-tweet-timeline">
        <a
          className="twitter-timeline"
          data-lang="ja"
          data-width="500"
          data-height="500"
          data-theme="dark"
          href="https://twitter.com/morishima1_2020?ref_src=twsrc%5Etfw"
        >
          Tweets by morishima1_2020
        </a>
      </section>
      <section className="google-my-map">
        <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1EDB079Oyf1-cS8wDJGKgpLFG7kbWBWQe"></iframe>
      </section>
      <section className="google-my-map">
        <h3>ディスカバー信州観光クーポン利用可能店舗マップ</h3>
        <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1h5Hb77Vp6rJaqWJfyVemL51Ze89st_HA"></iframe>
      </section>
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
