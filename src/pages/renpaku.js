import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

const RenpakuPage = ({ data }) => {
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
      <section className="renpaku-container">
        <span className="renpaku-description">連泊のご案内</span>
        <div className="renpaku-wrap">
          <h3 className="renpaku-subtitle">連泊がオススメ</h3>
          <dl>
            <dd>到着日と出発日以外の日は丸一日専有できます！</dd>
          </dl>
        </div>

        {/* <div className="renpaku-wrap">
          <h3 className="renpaku-subtitle">宿泊料金（連泊）</h3>
          <dl>
            <dd>2泊目以降の宿泊料金は1泊目料金の20%OFFとなります。
              <br/>
              ただし、GW（5/2～5/6）・夏休み（8月）・年末年始（12/30～1/3）の期間は連泊割引の適用外となります。
            </dd>
          </dl>
        </div> */}

        <div className="renpaku-wrap">
          <h3 className="renpaku-subtitle">清掃（連泊）</h3>
          <dl>
            <dd>客室リネンの交換はせず、寝具などもそのままとさせていただきます。
              <br/>
              火の元、水回りの確認、ごみの回収は毎日行います。
              <br/>
              状況によっては清掃いたします。
            </dd>
          </dl>
        </div>

        <div className="renpaku-wrap">
          <h3 className="renpaku-subtitle">アメニティ</h3>
          <dl>
            <dd>タオルの追加が必要な場合はご依頼ください。</dd>
          </dl>
        </div>

      </section>
      <Footer />
    </Layout>
  )
}

export default RenpakuPage
