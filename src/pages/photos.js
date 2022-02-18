import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Gallery from "../components/Gallery/Gallery"
import Seo from "../components/seo"
import "./styles/photos.scss"
import Carousel from "../components/Carousel/Carousel"

const PhotosPage = ({ data }) => {
  const [viewerState, setViewerState] = React.useState("hidden")
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    console.log(data.allFile)
  }, [])

  return (
    <Layout>
      <Seo title="Мои фото | Ведущий Алексей Горбунов. +7 985 644 64 89" />
      <div className="photos">
        <h1>Мои фото:</h1>
        <Gallery
          images={data}
          setViewerState={setViewerState}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Carousel
          images={data}
          viewerState={viewerState}
          setViewerState={setViewerState}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allFile(
      filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: { eq: "photo-gallery" }
      }
    ) {
      edges {
        node {
          base
          childrenImageSharp {
            fluid(maxWidth: 2400) {
              srcWebp
              originalImg
              originalName
            }
          }
        }
      }
    }
  }
`

export default PhotosPage
