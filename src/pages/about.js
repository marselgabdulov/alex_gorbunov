import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import Seo from "../components/seo"
import "./styles/about.scss"

function AboutPage({ data }) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const images = [
    data.firstImage.childImageSharp.fluid.src,
    data.secondImage.childImageSharp.fluid.src,
    data.thirdImage.childImageSharp.fluid.src,
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      currentIndex === images.length - 1
        ? setCurrentIndex(0)
        : setCurrentIndex(prevIndex => prevIndex + 1)
    }, 7000)

    return () => clearInterval(interval)
  }, [currentIndex, images.length])

  return (
    <Layout>
      <Seo title="Обо мне. Ведущий Алексей Горбунов. +7 985 644 64 89" />
      <TransitionGroup className="background">
        <CSSTransition
          appear={true}
          key={currentIndex}
          timeout={2000}
          classNames="fade"
        >
          <div
            className="background__image"
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
            }}
          ></div>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  )
}

export default AboutPage

export const aboutPageImage = graphql`
  fragment aboutPageImage on File {
    childImageSharp {
      fluid(maxWidth: 2400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    firstImage: file(relativePath: { eq: "about/agent1.jpg" }) {
      ...aboutPageImage
    }
    secondImage: file(relativePath: { eq: "about/agent2.jpg" }) {
      ...aboutPageImage
    }
    thirdImage: file(relativePath: { eq: "about/agent3.jpg" }) {
      ...aboutPageImage
    }
  }
`
