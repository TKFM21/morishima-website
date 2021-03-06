import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

const RulePage = ({ data }) => {
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
      <section className="rule-container">
        <span className="rule-description">宿泊約款</span>
        <div className="rule-wrap">
          <h3 className="rule-subtitle">適用範囲</h3>
          <dl>
            <dt>第1条 第1項</dt>
            <dd>当宿が宿泊客との間で締結する宿泊契約及びこれに関連する契約は、この約款の定めるところによるものとし、この約款に定めのない事項については、法令又は一般に確立された慣習によるものとします。</dd>
            <dt>第1条 第2項</dt>
            <dd>当宿が、法令及び慣習に反しない範囲で特約に応じたときは、前項の規定にかかわらず、その特約は優先するものとします。</dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">宿泊契約のお申し込み</h3>
          <dl>
            <dt>第2条 第1項</dt>
            <dd>当宿に宿泊契約のお申し込みをなさる方は、次の事項を当宿にお申し出いただきます。
              <br/>
              (1) 宿泊者名
              <br/>
              (2) 宿泊日
              <br/>
              (3) 住所・連絡先（電話番号）
              <br/>
              (4) その他当宿が必要と認める事項
            </dd>
            <dt>第2条 第2項</dt>
            <dd>宿泊客が、宿泊中に前項(2)の宿泊日を超えて宿泊の継続を申し入れた場合、当宿は、その申し出がなされた時点で新たな宿泊契約の申し込みがあったものとして処理します。</dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">予約</h3>
          <dl>
            <dt>第3条 第1項</dt>
            <dd>当宿は、様々な通信手段による宿泊契約の予約を受け付けます。この場合、予約の時点では契約は成立しておらず、当社からの予約の承諾の通知で成立となります。</dd>
            <dt>第3条 第2項</dt>
            <dd>宿泊契約の予約をお申し込みをなさる方は、次の事項を当宿にご連絡いただきます。
              <br/>
              (1) 宿泊者名
              <br/>
              (2) 宿泊日及び到着予定時刻
              <br/>
              (3) 申し込み者名及びその連絡先
              <br/>
              (4) その他当宿が必要と認める事項
            </dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">料金のお支払い</h3>
          <dl>
            <dt>第4条</dt>
            <dd>宿泊料金や利用料金のお支払いはチェックアウト時にお支払いいただきます。</dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">宿泊契約の成立等</h3>
          <dl>
            <dt>第5条 第1項</dt>
            <dd>宿泊契約は、当宿が第2条の宿泊契約の申し込みを承諾したときをもって、成立するものとします。なお、宿泊契約の成立の順位は、第3条に定める宿泊契約の予約の受付順位によるものとします。</dd>
            <dt>第5条 第2項</dt>
            <dd>宿泊契約が成立した場合、その後の宿泊日の変更には応じかねます。なお、宿泊客の都合により宿泊日を変更する場合には、第8条に定める宿泊契約の解除に則り、一度宿泊契約を解除したうえで、新たに宿泊予約のお申し込みをしていただきます。</dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">申込金の支払いを要することとする特約</h3>
          <dl>
            <dt>第6条</dt>
            <dd>第4条の規定にかかわらず、当宿は、申込金の支払いを要することとする特約を追加する場合があります。</dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">宿泊契約締結の拒否</h3>
          <dl>
            <dt>第7条</dt>
            <dd>当宿は、次に掲げる場合において、宿泊契約の締結に応じないことがあります。
              <br/>
              (1) 宿泊のお申し込みが、この約款によらないとき。
              <br/>
              (2) 満室（員）により客室の余裕がないとき。
              <br/>
              (3) 宿泊しようとする者が、宿泊に関し、法令の規定、公の秩序若しくは善良の風俗に反する行為をするおそれがあると認められるとき。
              <br/>
              (4) 宿泊しようとする者が、当宿に暴言暴力をふるう、当宿従業員を長時間拘束する、または当宿従業員の業務の妨げとなる行為をする等、当宿内の平穏な秩序を乱すおそれがあると認められるとき。
              <br/>
              (5) 宿泊しようとする者に次の事由に該当するものがいるとき。
              <br/>
              <span className="rule-child">a. 「暴力団員による不当な行為の防止等に関する法律」（平成３年法律第７７号）による指定暴力団及び指定暴力団員等又はその関係者、その他反社会的勢力（以下「暴力団等」という。）</span>
              <span className="rule-child">b. 暴力団等が事業活動を支配する法人その他の団体又はその構成員</span>
              <span className="rule-child">c. 暴力団等に該当するものが役員となっている法人又はその構成員</span>
              <br/>
              (6) 宿泊しようとする者が、感染症であると明らかに認められるとき。
              <br/>
              (7) 宿泊に関し暴力的要求行為が行われ、または以下のような合理的な範囲を超える負担を求められたとき。
              <br/>
              <span className="rule-child">a. 当宿で提供していないサービスの提供</span>
              <span className="rule-child">b. 法令や公序良俗に反するサービスの提供</span>
              <span className="rule-child">c. 正当な理由のない値引き要求</span>
              <span className="rule-child">d. 契約に含まれない項目等の提供</span>
              <br/>
              (8) 天災、施設の故障、その他やむを得ない事由により宿泊させることができないとき。
              <br/>
              (9) 宿泊しようとする者が、泥酔等で、近隣住民等に著しく迷惑を及ぼすおそれがあると認められたとき。あるいは宿泊客が近隣住民等に著しく迷惑を及ぼす言動をしたとき。
              <br/>
              (10) 宿泊の申し込みをした者が、転売等の自己の商業目的を秘して申し込みをしたとき。
            </dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">宿泊客の契約解除権</h3>
          <dl>
            <dt>第8条 第1項</dt>
            <dd>利用客は、当宿に申し出て、宿泊契約を解除することができます。</dd>
            <dt>第8条 第2項</dt>
            <dd>当宿は、利用客が契約の全部又は一部を解除した場合は、キャンセル規定により、取消料を申し受けます。</dd>
            <dt>第8条 第3項</dt>
            <dd>当宿は、宿泊客が連絡をしないで宿泊日当日の20時（あらかじめ到着予定時刻が明示されている場合は、その時刻を2時間経過した時刻）になっても当宿に到着しないときは、その宿泊契約は宿泊客により解除されたものとみなし処理することができます。</dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">当宿の契約解除権</h3>
          <dl>
            <dt>第9条 第1項</dt>
            <dd>当宿は、次に掲げる場合において、宿泊契約を解除することがあります。
              <br/>
              (1) 宿泊客が宿泊に関し、法令の規定、公の秩序若しくは善良の風俗に反するおそれがあると認められるとき。又は同行為をしたと認められるとき。
              <br/>
              (2) 宿泊客が、当宿従業員へ暴言暴力をふるう、当宿従業員を長時間拘束する、または当宿従業員の業務の妨げとなる行為をする等、当宿内の平穏な秩序を乱すおそれがあると認められるとき。
              <br/>
              (3) 宿泊約款及びこれに関連する契約の申込みをなさる方又は当宿を利用される方に次の事由に該当するものがいるとき。
              <br/>
              <span className="rule-child">a. 暴力団等</span>
              <span className="rule-child">b. 暴力団等が事業活動を支配する法人その他の団体又はその構成員</span>
              <span className="rule-child">c. 暴力団等に該当するものが役員となっている法人又はその構成員</span>
              <br/>
              (4) 宿泊しようとする者が、感染症であると明らかに認められるとき。
              <br/>
              (5) 宿泊に関し暴力的要求行為が行われ、または以下のような合理的な範囲を超える負担を求められたとき。
              <br/>
              <span className="rule-child">a. 当宿で提供していないサービスの提供</span>
              <span className="rule-child">b. 法令や公序良俗に反するサービスの提供</span>
              <span className="rule-child">c. 正当な理由のない契約後の値引き要求</span>
              <span className="rule-child">d. 契約に含まれない項目等の提供</span>
              <br/>
              (6) 天災等不可抗力に起因する事由により宿泊させることができないとき。
              <br/>
              (7) 宿泊しようとする者が、泥酔等で、近隣住民等に著しく迷惑を及ぼすおそれがあると認められたとき。あるいは宿泊客が近隣住民等に著しく迷惑を及ぼす言動をしたとき。
              <br/>
              (8) 決められた場所以外での喫煙、消防用設備等に対するいたずら、その他当宿が定める利用規則の禁止事項に従わないとき。
              <br/>
              (9) 宿泊契約成立後に第7条(10)に定める事由が判明したとき。
            </dd>
            <dt>第9条 第2項</dt>
            <dd>当宿が前項の規定に基づいて宿泊契約を解除したときは、宿泊客が未だ提供を受けていない宿泊サービス等の料金はいただきません。</dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">宿泊の登録</h3>
          <dl>
            <dt>第10条 第1項</dt>
            <dd>宿泊客には、宿泊日当日、当宿のレセプションにおいて、次の事項を登録していただきます。
              <br/>
              (1) 宿泊客の氏名、生年月日、性別、住所、職業及び前後泊がある場合は前後泊地
              <br/>
              (2) 外国人にあっては、国籍、旅券番号、入国地及び入国年月日
              <br/>
              (3) 日本国内に住所を有しない外国人にあっては、前号の定めに加え、旅券の写し
              <br/>
              (4) 出発日及び出発予定時刻
              <br/>
              (5) 同伴者の氏名
              <br/>
              (6) その他当宿が必要と認める事項
            </dd>
            <dt>第10条 第2項</dt>
            <dd>宿泊客が第14条の料金の支払いを、通貨に代わり得る方法により行おうとするときは、あらかじめ、前項の登録時にそれらを呈示していただきます。</dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">客室の使用時間</h3>
          <dl>
            <dt>第11条 第1項</dt>
            <dd>宿泊客が当宿の客室を使用できる時間は、15時から翌日11時までとします。ただし、連続して宿泊する場合においては、到着日及び出発日を除き、終日使用することができます。なお、客室を使用できる15時以降においても、客室の整備等により、やむを得ずお待ちいただくことがあります。</dd>
            <dt>第11条 第2項</dt>
            <dd>当宿は、第1項の規定にかかわらず、同項に定める時間外の客室の使用に応じることがあります。この場合には次に掲げる追加料金を申し受けます。
              <br/>
              (1) ご到着日の9時より前は、客室料金の100%
              <br/>
              (2) ご到着日の9時より正午までは、客室料金の50%
              <br/>
              (3) ご到着日の正午から15時までは、客室料金の30%
              <br/>
              (4) ご出発日の15時までは、客室料金の30%
              <br/>
              (5) ご出発日の18時までは、客室料金の50%
              <br/>
              (6) ご出発日の18時以降は、客室料金の100%
            </dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">利用規則の遵守</h3>
          <dl>
            <dt>第12条</dt>
            <dd>宿泊客・利用客は当宿内においては、「宿泊約款」に定める「利用規則」に従っていただきます。</dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">施設の案内</h3>
          <dl>
            <dt>第13条 第1項</dt>
            <dd>当宿の主な施設等の営業内容は、各所の表示等でご案内します。</dd>
            <dt>第13条 第2項</dt>
            <dd>施設等の営業内容は、必要やむを得ない場合、予告なく変更することがあります。</dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">料金の支払い</h3>
          <dl>
            <dt>第14条 第1項</dt>
            <dd>宿泊客が支払うべき宿泊料金等は、料金表に掲げるところによります。</dd>
            <dt>第14条 第2項</dt>
            <dd>前項の宿泊料金等の支払いは、通貨又は当宿が認めた方法等これに代わり得る方法により、宿泊客の出発の際又は当宿が請求した時、レセプションにおいて行っていただきます。</dd>
            <dt>第14条 第3項</dt>
            <dd>当宿が宿泊客に客室を提供し、使用が可能になったのち、宿泊客が任意に宿泊しなかった場合においても、宿泊料金は申し受けます。</dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">当宿の責任</h3>
          <dl>
            <dt>第15条</dt>
            <dd>当宿は、宿泊契約及びこれに関する契約の履行に当たり、又はそれらの不履行により宿泊客に損害を与えた時は、その損害を賠償します。ただし、それが当宿の責めに帰すべき事由によるものでないときは、この限りではありません。</dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">契約した宿泊サービスの提供が出来ないときの取り扱い</h3>
          <dl>
            <dt>第16条 第1項</dt>
            <dd>当宿で、宿泊客に契約した客室を提供できないときは、宿泊客の了解を得て、できる限り同一の条件による他の宿泊施設を斡旋するものとします。</dd>
            <dt>第16条 第2項</dt>
            <dd>当宿は、前項の規定にかかわらず他の宿泊施設の斡旋ができないときは、宿泊料金相当額の補償料を宿泊客に支払い、その補償料は損害補償額に充当します。ただし、客室が提供できないことについて、当宿の責めに帰すべき事由がないときは補償料を支払いません。</dd>
            <dt>第16条 第3項</dt>
            <dd>宿泊客が宿泊契約の内容と異なる宿泊サービスが提供されたと認識したときは、当宿に速やかにその旨を申し出、当宿はできる限り契約内容通りのサービスを提供できるよう対応します。</dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">寄託物等の取り扱い</h3>
          <dl>
            <dt>第17条 第1項</dt>
            <dd>宿泊客がレセプションにお預けになった物品又は現金もしくは貴重品について、滅失、毀損等の損害が生じたときは、それが不可抗力である場合を除き、当宿は、その損害を賠償します。ただし、現金及び貴重品については、当宿がその種類及び価額の明告を求めた場合で、宿泊客がそれを行わなかったときは、当宿は15万円を限度としてその損害を賠償します。</dd>
            <dt>第17条 第2項</dt>
            <dd>宿泊客が、当宿内にお持ち込みになった物品又は現金もしくは貴重品であってレセプションにお預けにならなかったものについて、当宿の故意又は過失により滅失、毀損等の損害が生じたときは、当宿は、その損害を賠償します。ただし、宿泊客から、あらかじめ種類及び価額の明告のなかったものについては、当宿に故意又は重大な過失がある場合を除き、15万円を限度として当宿はその損害を賠償します。</dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">宿泊客の手荷物又は携帯品の保管</h3>
          <dl>
            <dt>第18条 第1項</dt>
            <dd>宿泊客の手荷物が、宿泊に先だって当宿に到着した場合は、その到着前に当宿が了解したときに限って責任をもって保管し、宿泊客がレセプションにおいてチェックインする際にお渡しします。</dd>
            <dt>第18条 第2項</dt>
            <dd>前項の場合における宿泊客の手荷物又は携帯品の保管についての当宿の責任は、前条第1項の規定に準じるものとします。</dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">駐車の責任</h3>
          <dl>
            <dt>第19条</dt>
            <dd>宿泊客が当宿の駐車場をご利用になる場合、車両のキーの寄託の如何にかかわらず、当宿は場所をお貸しするものであって、車両の管理責任まで負うものではありません。ただし、駐車場の管理にあたり、当宿の故意又は過失によって損害を与えたときは、その賠償の責めに応じます。</dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">宿泊客の責任</h3>
          <dl>
            <dt>第20条</dt>
            <dd>宿泊客の故意又は過失により当宿が損害を被ったときは、当該宿泊客は当宿に対し、その損害を賠償していただきます。</dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">管轄裁判所と準拠法</h3>
          <dl>
            <dt>第21条</dt>
            <dd>当宿は、次に掲げる場合において、宿泊以外のサービス利用契約に応じないことがあります。
              <br/>
              (1) 当該サービスの契約の申込みをなさる方又は当宿を利用される方に次の事由に該当するものがいるとき。
              <br/>
              <span className="rule-child">a. 第7条(5)にて定める暴力団等に該当するもの</span>
              <span className="rule-child">b. 法令又は公序良俗に反する行為をする恐れがあると判断されるもの</span>
              <br/>
              (2) 当宿の近隣住民に著しい迷惑を及ぼす言動をしたとき。
              <br/>
              (3) 当宿もしくは当宿の従業員に対し、暴力、脅迫、恐喝、威圧的な不当要求を行い、あるいは、合理的範囲を超える負担を要求したとき、又かつて同様な行為を行ったと認められるとき。
              <br/>
              (4) 当宿の利用規則に違反したとき。（違反する恐れがあると、当宿側が判断した場合を含む）
              <br/>
              (5) 当宿利用にあたり、その利用を容認できないと当宿が判断したとき。
            </dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">宿泊客の責任</h3>
          <dl>
            <dt>第22条</dt>
            <dd>当宿と宿泊客との間の宿泊等の利用契約に関する紛争は、日本法を準拠法とし、地方裁判所または簡易裁判所を専属的な第一審の合意管轄裁判所とします。</dd>
          </dl>
        </div>

        <div className="rule-wrap">
          <h3 className="rule-subtitle">宿泊約款の変更</h3>
          <dl>
            <dt>第23条 第1項</dt>
            <dd>当宿は以下の場合に、当社の裁量により、宿泊約款を変更することができます。
              <br/>
              (1) 宿泊約款の変更が、宿泊客の一般の利益に適合するとき。
              <br/>
              (2) 宿泊約款の変更が、宿泊契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性、変更の内容その他の変更に係る事情に照らして合理的なものであるとき。
            </dd>
            <dt>第23条 第2項</dt>
            <dd>当宿は前項の宿泊約款の変更にあたり、このページに効力発生日を掲示します。
            </dd>
            <dt>第23条 第3項</dt>
            <dd>変更後の宿泊約款の効力発生日以降に宿泊客が宿泊契約の予約をしたときは、宿泊客は、宿泊約款の変更に同意したものとみなします。
            </dd>
          </dl>
        </div>

        <span className="rule-description">利用規則</span>

        <div className="rule-wrap">
          <dl>
            <dt>
              <p>
              当宿では、お客様に安全で快適なご滞在をお楽しみいただくために、宿泊約款第12条に基づき、次の通り利用規則を定めておりますので、ご協力くださいますようお願い申し上げます。
              <br/>
              この利用規則をお守りいただけない場合は、宿泊約款第9条により、宿泊又はホテル内の諸施設のご利用をお断りすることがあります。またこの利用規則を守れないことによって生じた事故については、当宿は責任を負いかねますので、ご了承くださいますようお願い申し上げます。
              </p>
            </dt>
            <dt>1</dt>
            <dd>下記の物品は、お持ちこみにならないでください。
              <br/>
              <span className="rule-child">a. 動物、鳥類、ペットの類（アシスタンスドッグ〈盲導犬、聴導犬、介助犬等の身体障害者補助犬〉は除きます）</span>
              <span className="rule-child">b. 悪臭又は騒音を発するもの</span>
              <span className="rule-child">c. 火薬、揮発油その他発火、引火性のもの</span>
              <span className="rule-child">d. 法により所持を許可されていない銃砲、刀剣、覚醒剤の類</span>
            </dd>
            <dt>2</dt>
            <dd>未成年者のみの宿泊は特に親権者の許可がない限りお断り申し上げます。
            </dd>
            <dt>3</dt>
            <dd>賭博や風紀を乱すような行為、周りの方々に迷惑のかかるような行為はなさらないでください。
            </dd>
            <dt>4</dt>
            <dd>高声や放歌、またテレビやラジオの音量を大きくするなどで、周りの方々に迷惑のかかるような行為はなさらないでください。
            </dd>
            <dt>5</dt>
            <dd>宿内外の諸施設や備品を他の場所へ移動したり、加工したりしないでください。汚損、破損、紛失については実費を申し受けます。
            </dd>
            <dt>6</dt>
            <dd>客室内や敷地内で許可なく営業上の目的で写真やビデオ・ＤＶＤ等あらゆる機器による撮影及び録音はなさらないでください。また、私的に撮影及び録音されたものであっても、許可なく（ⅰ）営業上の目的でインターネット上に掲載する行為等、 （ⅱ）各種SNSを使用したライブ配信行為等はなさらないでください。
            </dd>
            <dt>7</dt>
            <dd>ご滞在中に客室から出られる時は施錠をご確認ください。ご在室中やご就寝時には、ドアの掛け金をお掛けください。不審者の来訪には不用意に開扉なさらないようにご注意ください。
            </dd>
            <dt>8</dt>
            <dd>お客様の安全上の観点から、長時間に渡ってお客様と連絡が取れていない場合には、従業員が客室への呼び出しを行います。また、応答がない場合や緊急時など、当宿が必要と判断した場合は、やむを得ず客室に入室を行いますのでご了承ください。
            </dd>
            <dt>9</dt>
            <dd>宿泊約款第10条により登録された宿泊客（同伴者を含む）以外のご来訪客を宿泊させることはお断り申し上げます。
            </dd>
            <dt>10</dt>
            <dd>安全のため、客室からお出掛けの際は、お持込みになった電気・電子機器の電源をオフにし、プラグは電源コンセントからお抜きください。
            </dd>
            <dt>11</dt>
            <dd>屋内は禁煙となっております。その他火災の原因となるような行為はなさらないでください。なお、屋内で喫煙された場合は、寝具・カーテン・壁紙等のクリーニング費用その他補修等にかかる実費を申し受けます。
            </dd>
            <dt>12</dt>
            <dd>万一に備え、客室入口の避難経路図及び各階の非常口をご確認ください。
            </dd>
            <dt>13</dt>
            <dd>ご滞在中に現金、貴重品を保管する場合、宿の鍵は確実に施錠していただくようお願い申し上げます。施錠なさらず万一宿内で紛失、盗難事故等が発生した場合、当宿では一切の責任を負いかねます。
            </dd>
            <dt>14</dt>
            <dd>お忘れ物は発見した日から一定期間当宿にて保管し、その後は遺失物法に基づいてお取扱いさせていただきます。なお、お忘れ物の発送にかかる費用につきましては、お客様のご負担とさせていただきます。また、お忘れ物の保管に関する当宿の責任は、宿泊約款第17条第2項の規定に準じるものとします。
            </dd>
            <dt>15</dt>
            <dd>ご滞在中、レセプションから精算の依頼がございましたら、その都度レセプションでのご精算をお願い申し上げます。
            </dd>
            <dt>16</dt>
            <dd>お買物代、切符代、タクシー代、郵便切手代、お荷物送料などの立て替えはお断りさせていただきます。
            </dd>
            <dt>17</dt>
            <dd>小切手及び外貨によるお支払い並びに両替には応じかねますのでご了承ください。
            </dd>
            <dt>18</dt>
            <dd>宿泊約款第7条第1項(5)に定める暴力団等及び公序良俗に反する恐れのある場合には、当宿のご利用をお断り申し上げます。（予約成立後、あるいは利用中にその事実が判明した場合には、その時点でご利用をお断り申し上げます。）
            </dd>
          </dl>
        </div>

      </section>
      <Footer />
    </Layout>
  )
}

export default RulePage
