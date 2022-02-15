import * as React from "react"
import BGVideo from "../components/BGVideo/BGVideo"
import BGVideoMobile from "../components/BGVideoM/BGVideoM"
import "./styles/index.scss"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Ведущий Алексей Горбунов. +7 985 644 64 89" />
    <div className="bg">
      <BGVideo />
      <BGVideoMobile />
      <div
        className="intro-text"
        data-aos="fade"
        data-aos-delay="500"
        data-aos-duration="1200"
        data-aos-once="true"
      >
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

// const IndexPage = () => (
//   <Layout>
//     <Seo title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <StaticImage
//       src="../images/gatsby-astronaut.png"
//       width={300}
//       quality={95}
//       formats={["auto", "webp", "avif"]}
//       alt="A Gatsby astronaut"
//       style={{ marginBottom: `1.45rem` }}
//     />
//     <p>
//       <Link to="/page-2/">Go to page 2</Link> <br />
//       <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
//       <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
//       <Link to="/using-dsg">Go to "Using DSG"</Link>
//     </p>
//   </Layout>
// )

// export default IndexPage
