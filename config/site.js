module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "一棟貸しの宿 もりしま 長野県上田市", // Navigation and Site Title
  titleAlt: "一棟貸しの宿 もりしま 長野県上田市", // Title for JSONLD
  description: "長野県上田市の武石地域で営業しています。一泊一組限定、平屋一棟を貸し切りにして宿泊ができます。食事の提供はできませんが、キッチンや庭のBBQコンロをお使いいただけます。宿泊以外にも会議や教室、勉強会など時間貸しも可能です。お気軽にお問合せください。",
  url: "https://morishima1.com", // Domain of your site. No trailing slash!
  siteUrl: "https://morishima1.com/", // url + pathPrefix
  siteLanguage: "ja", // Language Tag on <html> element
  //logo: "static/logo/logo.png", // Used for SEO
  //banner: "static/logo/banner.png",

  // JSONLD / Manifest
  favicon: "src/images/mount-icon.png",
  shortName: "もりしま", // shortname for manifest. MUST be shorter than 12 characters
  author: "Morishima", // Author for schemaORGJSONLD
  themeColor: "#14302F",
  backgroundColor: "#fbfffc"
}
