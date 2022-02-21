import * as React from "react"
import LeftIcon from "../icons/LeftIcon"
import RightIcon from "../icons/RightIcon"
import CrossIcon from "../icons/CrossIcon"
import "./Carousel.scss"

const Carousel = ({
  images,
  currentIndex,
  viewerState,
  setViewerState,
  setCurrentIndex,
}) => {
  const handleUserKeyPress = e => {
    if (e.keyCode == 32 || e.keyCode == 39) {
      handleNext()
    }
    if (e.keyCode == 37) {
      handlePrev()
    }
    if (e.keyCode == 27) {
      handleCarousel()
    }
  }

  React.useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress)
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress)
    }
  }, [handleUserKeyPress])

  const handleCarousel = () => {
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
    <div className={`carousel--${viewerState}`} onKeyDown={handleUserKeyPress}>
      <div className="carousel__bg" onClick={handleCarousel}></div>
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
      <button className="btn carousel__close" onClick={handleCarousel}>
        <CrossIcon />
      </button>
    </div>
  )
}

export default Carousel
