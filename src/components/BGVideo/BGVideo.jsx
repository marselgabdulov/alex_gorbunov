import * as React from "react"
import VideoMP4 from "../../videos/bg.mp4"
import VideoWEBM from "../../videos/bg.webm"
import "./BGVideo.scss"

function BGVideo() {
  return (
    <div className="background-video">
      <video loop autoPlay muted>
        <source type="video/webm" src={VideoWEBM} />
        <source type="video/mp4" src={VideoMP4} />
      </video>
    </div>
  )
}

export default BGVideo
