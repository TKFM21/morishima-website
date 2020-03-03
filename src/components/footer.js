import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="address">
          <h3>住所</h3>
          <span>〒386-0501</span>
          <span>長野県上田市武石鳥屋146-1</span>
        </div>
        <div className="hours">
          <h3>ご宿泊</h3>
          <span>チェックイン　15:00 - 20:00</span>
          <span>チェックアウト　11:00</span>
        </div>
        <div className="contact">
          <h3>お問合せ</h3>
          <span className="line">
            <a href="https://lin.ee/miMytzL">
              <img
                height="36"
                border="0"
                src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                alt="一棟貸切りの宿 もりしま 長野県上田市 LINE公式アカウント"
              />
            </a>
          </span>
        </div>
      </section>
      <p>
        Copyright &copy; {new Date().getFullYear()}
        {` `}
        <Link to={`/`}>一棟貸しの宿 もりしま</Link>
      </p>
    </footer>
  )
}

export default Footer
