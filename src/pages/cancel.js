import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

const CancelPage = ({ data }) => {
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
      <section className="cancel-container">
        <span className="cancel-description">キャンセル規定</span>
        <table>
          <thead>
            <tr>
              <th>条件</th>
              <th>キャンセル料金（総額）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>7~4日前</td>
              <td>宿泊料金の20%</td>
            </tr>
            <tr>
              <td>3~2日前</td>
              <td>宿泊料金の50%</td>
            </tr>
            <tr>
              <td>1日前</td>
              <td>宿泊料金の80%</td>
            </tr>
            <tr>
              <td>当日</td>
              <td>宿泊料金の100%</td>
            </tr>
            <tr>
              <td>無連絡キャンセル</td>
              <td>宿泊料金の100%</td>
            </tr>
          </tbody>
        </table>
        <p>※税込みの金額です。</p>

      </section>
      <Footer />
    </Layout>
  )
}

export default CancelPage
