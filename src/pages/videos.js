import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Video from "../components/Video/Video"
import "./styles/videos.scss"

function VideosPage({ data }) {
  useEffect(() => {
    console.log(data)
  }, [])
  return (
    <Layout>
      <Seo title="Видео | Ведущий Алексей Горбунов. +7 985 644 64 89" />
      <div className="videos-page">
        <h1>Мои видео:</h1>
        <Video
          cover={data.coverImage.childImageSharp.fluid}
          name="Демо"
          top={0}
          url="https://www.youtube.com/watch?v=33gGO3nu4Yk&t=2s"
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    coverImage: file(relativePath: { eq: "cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default VideosPage
