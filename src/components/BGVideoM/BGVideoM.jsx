import * as React from "react"
import MobileVideoMP4 from "../../videos/bgm.mp4"
import MobileVideoWEBM from "../../videos/bgm.webm"
import "./BGVideoM.scss"

const BGVideoMobile = () => (
  <div className="background-video-mobile">
    <video loop autoPlay muted>
      <source type="video/webm" src={MobileVideoWEBM} />
      <source type="video/mp4" src={MobileVideoMP4} />
    </video>
  </div>
)

export default BGVideoMobile
