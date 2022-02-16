import * as React from "react"
import "./Gallery.scss"

const Gallery = ({ images, setViewerState }) => {
  return (
    <>
      <div className="gallery">
        {images.allFile.edges.map(edge => (
          <div
            className="gallery__image"
            key={edge.node.childrenImageSharp[0].fluid.originalName}
            style={{
              backgroundImage: `url(${edge.node.childrenImageSharp[0].fluid.originalImg})`,
            }}
            onClick={() => setViewerState("visible")}
          ></div>
        ))}
      </div>
    </>
  )
}

export default Gallery
