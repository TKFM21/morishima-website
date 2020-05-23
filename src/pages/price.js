import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

const PricePage = ({ data }) => {
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
      <section className="price-container">
        <span className="price-description">宿泊料金(1泊)</span>
        <table>
          <thead>
            <tr>
              <th>ご利用人数</th>
              <th>宿泊料金（総額）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2名様</td>
              <td>10,000円</td>
            </tr>
            <tr>
              <td>3名様</td>
              <td>13,000円</td>
            </tr>
            <tr>
              <td>4名様</td>
              <td>16,000円</td>
            </tr>
            <tr>
              <td>5名様</td>
              <td>19,000円</td>
            </tr>
            <tr>
              <td>6名様</td>
              <td>22,000円</td>
            </tr>
            <tr>
              <td>7名様</td>
              <td>25,000円</td>
            </tr>
          </tbody>
        </table>
        <p>※8名様以上をご希望の場合は、お問合せください。</p>
        <p>※連泊の場合は2泊目以降は20%OFFとなります。</p>
        <p>※BBQコンロをご利用の場合は別途費用が発生します。</p>
        <p>※チェックインは15:00～20:00です。</p>
        <p>※チェックアウトは11:00です。</p>
        <p>※税込みの金額です。</p>
        <Link to={`/cancel/`}>※キャンセル規定</Link>

        <span className="price-description">日帰り料金</span>
        <table>
          <thead>
            <tr>
              <th>ご利用人数</th>
              <th>日帰り料金（総額）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2名様</td>
              <td>3,000円</td>
            </tr>
            <tr>
              <td>3名様</td>
              <td>4,000円</td>
            </tr>
            <tr>
              <td>4名様</td>
              <td>5,000円</td>
            </tr>
            <tr>
              <td>5名様</td>
              <td>6,000円</td>
            </tr>
            <tr>
              <td>6名様</td>
              <td>7,000円</td>
            </tr>
            <tr>
              <td>7名様</td>
              <td>8,000円</td>
            </tr>
          </tbody>
        </table>
        <p>※8名様以上をご希望の場合は、お問合せください。</p>
        <p>※BBQコンロをご利用の場合は別途費用が発生します。</p>
        <p>※ご利用時間は10:00～15:00です。</p>
        <p>※税込みの金額です。</p>

        <span className="price-description">レンタル</span>
        <table>
          <thead>
            <tr>
              <th>アイテム</th>
              <th>レンタル料金</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BBQコンロ</td>
              <td>3,000円</td>
            </tr>
            <tr>
              <td>七輪</td>
              <td>2,000円</td>
            </tr>
            <tr>
              <td>炭（1kg）・着火剤・網・鉄板・うちわ・トング</td>
              <td>1,000円</td>
            </tr>
            <tr>
              <td>炭（1kg）</td>
              <td>500円</td>
            </tr>
          </tbody>
        </table>
        <p>※コンロの持ち込みはできません。</p>
        <p>※屋外で宴会やパーティーなどをする際は周辺住民の方々の迷惑とならないようにお願いします。</p>
        <p>※税込みの金額です。</p>
      </section>
      <Footer />
    </Layout>
  )
}

export default PricePage
