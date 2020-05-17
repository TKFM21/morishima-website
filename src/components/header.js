import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <span><Link to={"/"} className="home-link">{siteTitle}</Link></span>
    <span className="line">
      <a href="https://lin.ee/miMytzL">
        <img
          height="40"
          border="0"
          src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
          alt="一棟貸切りの宿 もりしま 長野県上田市 LINE公式アカウント"
        />
      </a>
    </span>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
