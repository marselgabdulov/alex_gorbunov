import * as React from "react"
import "./PhotoViewer.scss"

const PhotoViewer = ({ images, viewerState, setViewerState }) => {
  function handleViewer() {
    viewerState === "hidden"
      ? setViewerState("visible")
      : setViewerState("hidden")
  }
  return (
    <div className={`photo-viewer--${viewerState}`}>
      <p onClick={handleViewer}>{viewerState}</p>
    </div>
  )
}

export default PhotoViewer
