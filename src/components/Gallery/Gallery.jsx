import * as React from "react"
import "./Gallery.scss"

const Gallery = ({ images, setViewerState, setCurrentIndex }) => {
  const handleClick = index => {
    setViewerState("visible")
    setCurrentIndex(index)
  }

  return (
    <>
      <div className="gallery">
        {images.allFile.edges.map((edge, index) => (
          <div
            className="gallery__image"
            key={index}
            style={{
              backgroundImage: `url(${edge.node.childrenImageSharp[0].fluid.originalImg})`,
            }}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
    </>
  )
}

export default Gallery
