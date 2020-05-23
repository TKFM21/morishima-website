import React from "react"

class GoogleMap extends React.Component {
  render() {
    const iframe =
      '<iframe title="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1911.9819163787056!2d138.24312926229874!3d36.29878582870422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601dbb18f6ed928b%3A0x8d85841accaab901!2z5LiA5qOf6LK444GX44Gu5a6_44KC44KK44GX44G-!5e0!3m2!1sja!2sjp!4v1583132780959!5m2!1sja!2sjp" width="500" height="500" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
    return (
      <div
        className="google-map"
        dangerouslySetInnerHTML={{ __html: iframe }}
      ></div>
    )
  }
}

export default GoogleMap
