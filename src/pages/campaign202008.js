import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

const Campaign202008 = ({ data }) => {
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
          `貸し別荘`,
        ]}
      />
      <section className="campaign202008container">
        <span className="campaign202008description">地域限定キャンペーン</span>
        <div>
          <p>概要</p>
          <p>
            当宿が長野県の「小さなお宿応援事業」の対象施設となりました。
            <br />
            この事業によって、1人6,000円の宿泊料金のうち3,000円が長野県の補助により割り引かれます。
            <br/>
            適用条件は下記のとおりです。
          </p>
        </div>
        <div>
          <p>適用条件</p>
          <ul>
            <li>
            【長野県にお住いの方】
            </li>
            <li>
              ご利用時に長野県指定の割引適用確認書へ【氏名、性別、年齢、住所、電話番号など】を記入していただける方。
            </li>
          </ul>
        </div>
        <table>
          <thead>
            <tr>
              <th>割引適用のご利用人数</th>
              <th>宿泊料金（総額）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2名様</td>
              <td>6,000円</td>
            </tr>
            <tr>
              <td>3名様</td>
              <td>9,000円</td>
            </tr>
            <tr>
              <td>4名様</td>
              <td>12,000円</td>
            </tr>
            <tr>
              <td>5名様</td>
              <td>15,000円</td>
            </tr>
            <tr>
              <td>6名様</td>
              <td>18,000円</td>
            </tr>
          </tbody>
        </table>
        <p>※7名様以上をご希望の場合は、お問合せください。</p>
        <p>※補助金の上限があるため、上限に達し次第キャンペーン終了となります。【先着順】</p>
        <p>※このキャンペーン適用の場合は連泊割引は適用されません。</p>
        <p>
          <Link to={"/renpaku/"}>※連泊に関してはこちらをご覧ください。</Link>
        </p>
        <p>※BBQコンロをご利用の場合は別途費用が発生します。</p>
        <p>※チェックインは15:00～20:00です。</p>
        <p>※チェックアウトは11:00です。</p>
        <p>
          ※11月～3月の期間は暖房費として上記料金に1,000円を追加させていただきます。
        </p>
        <p>※税込みの金額です。</p>
        <p>※キャンセル料金は割引適用前の料金が適用されますので、ご注意ください。</p>
        <Link to={`/cancel/`}>※キャンセル規定</Link>
        <p></p>
      </section>
      <Footer />
    </Layout>
  )
}

export default Campaign202008
