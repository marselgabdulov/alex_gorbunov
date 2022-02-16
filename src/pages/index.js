import * as React from "react"
import BGVideo from "../components/BGVideo/BGVideo"
import BGVideoMobile from "../components/BGVideoM/BGVideoM"
import "./styles/index.scss"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Ведущий Алексей Горбунов. +7 985 644 64 89" />
    <div className="bg">
      <BGVideo />
      <BGVideoMobile />
      <div className="intro-text">
        <h1 className="title">Ведущий Алексей Горбунов</h1>
        <h2 className="subtitle">Умный московский юмор</h2>
        <a href="tel:+79856446489" className="phone">
          +7 985 644 64 89
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
