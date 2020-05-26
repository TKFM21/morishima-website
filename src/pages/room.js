import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

const RoomPage = ({ data }) => {
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
      <section className="room-container">
        <span className="room-description">お部屋/設備/アメニティのご案内</span>
        <div className="room-wrap">
          <h3 className="room-subtitle">リビング・ダイニング・キッチン</h3>
          <dl>
            <dt>リビング</dt>
            <dd>
              ・エアコン<br/>・扇風機<br/>・ソファー<br/>・こたつ<br/>・電子蚊取り器<br/>・Wi-Fi<br/>・TV(DVDデッキでDVDのみ再生可能)<br/>
            </dd>
            <dt>ダイニング</dt>
            <dd>
              ・ダイニングテーブル（4脚）<br/>・戸棚（各種皿やグラスなど）
            </dd>
            <dt>キッチン</dt>
            <dd>
              ・冷蔵庫<br/>・電子レンジ<br/>・オーブントースター<br/>・電気ケトル<br/>・ミキサー<br/>・基本的な調理器具など（鍋、フライパン、ざる、包丁、すり鉢など）<br/>・基本調味料（塩、砂糖、醤油、みそ、酢、油、コショー、七味など）<br/>・珈琲、緑茶、紅茶など
            </dd>
          </dl>
        </div>

        <div className="room-wrap">
          <h3 className="room-subtitle">洗面所・トイレ・バスルーム</h3>
          <dl>
            <dd>・ユニットバス<br/>・バスタオル<br/>・フェイスタオル<br/>・ボディーソープ<br/>・シャンプー<br/>・コンディショナー<br/>・ヘアドライヤー<br/>・歯ブラシ<br/>・歯磨き粉<br/>・綿棒<br/>・洗濯機<br/>・ウォシュレットトイレ
            </dd>
          </dl>
        </div>

        <div className="room-wrap">
          <h3 className="room-subtitle">フローリングのお部屋（8畳）</h3>
          <dl>
            <dd>
              ・和布団（シングル）：3組
              <br/>
              ・ソファー（3人掛け）
              <br/>
              ・テーブルランプ
              <br/>
              ・押し入れ
            </dd>
          </dl>
        </div>

        <div className="room-wrap">
          <h3 className="room-subtitle">フローリングのお部屋（7畳）</h3>
          <dl>
          <dd>
              ・本棚（小説、コミック、陶芸、写真、釣り、絵本などのジャンル）
              <br/>
              ・トランプ、オセロ、こまなど
              <br/>
              ・ラジカセ
            </dd>
          </dl>
        </div>

        <div className="room-wrap">
          <h3 className="room-subtitle">和室　床の間付き8畳</h3>
          <dl>
          <dd>
              ・座卓
              <br/>
              ・茶箪笥（煎茶道具一式など）
              <br/>
              ・和布団（シングル）：3組
              <br/>
              ・布団乾燥機
              <br/>
              ・テーブルランプ
              <br/>
              ・アイロン
              <br/>
              ・血圧計
              <br/>
              ・救急箱
              <br/>
              ・押し入れ
            </dd>
          </dl>
        </div>

        <div className="room-wrap">
          <h3 className="room-subtitle">屋外</h3>
          <dl>
          <dd>
              ・BBQコンロ
              <br/>
              ・ハンモック
              <br/>
              ・水道、流し
              <br/>
              ・レンガ敷きテラス
              <br/>
              ・テーブル、椅子、ベンチ
              <br/>
              ・ブルーベリー狩り用のブルーベリー：約20本（収穫可能）
              <br/>
              ・駐車場1：2~3台
              <br/>
              ・駐車場2：2~3台
            </dd>
          </dl>
        </div>

        <div className="room-wrap">
          <h3 className="room-subtitle">その他</h3>
          <dl>
          <dd>
              ・火災報知器、消火器、誘導灯（上保第79-7号）
              <br/>
              ・Wi-Fi
              <br/>
              ・電子蚊取り器
              <br/>
              ・湯たんぽ、石油ストーブ、ファンヒーター（ご依頼ください）
            </dd>
          </dl>
        </div>

      </section>
      <Footer />
    </Layout>
  )
}

export default RoomPage
