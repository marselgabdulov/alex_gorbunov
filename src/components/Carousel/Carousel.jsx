import * as React from "react"
import LeftIcon from "../icons/LeftIcon"
import RightIcon from "../icons/RightIcon"
import CrossIcon from "../icons/CrossIcon"
import KeyboardEventHandler from "react-keyboard-event-handler"
import "./Carousel.scss"

const Carousel = ({
  images,
  currentIndex,
  viewerState,
  setViewerState,
  setCurrentIndex,
}) => {
  const handleViewer = () => {
    viewerState === "hidden"
      ? setViewerState("visible")
      : setViewerState("hidden")
  }
  const handlePrev = () => {
    currentIndex === 0
      ? setCurrentIndex(images.allFile.edges.length - 1)
      : setCurrentIndex(prevIndex => prevIndex - 1)
  }
  const handleNext = () => {
    currentIndex === images.allFile.edges.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(prevIndex => prevIndex + 1)
  }
  return (
    <KeyboardEventHandler>
      <div className={`carousel--${viewerState}`}>
        <div className="carousel__bg" onClick={handleViewer}></div>
        <div className="carousel__content">
          <button className="btn carousel__left" onClick={handlePrev}>
            <LeftIcon />
          </button>
          <div
            className="current-image"
            style={{
              backgroundImage: `url(${images.allFile.edges[currentIndex].node.childrenImageSharp[0].fluid.originalImg})`,
            }}
          ></div>
          <button className="btn carousel__right" onClick={handleNext}>
            <RightIcon />
          </button>
        </div>
        <button className="btn carousel__close" onClick={handleViewer}>
          <CrossIcon />
        </button>
      </div>
    </KeyboardEventHandler>
  )
}

export default Carousel
