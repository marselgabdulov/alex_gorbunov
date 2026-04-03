import React from "react"
import ReactPlayer from "react-player"
import RightIcon from "../icons/RightIcon"
import CrossIcon from "../icons/CrossIcon"
import "./Video.scss"

class Video extends React.Component {
  state = {
    visible: false,
    playing: false,
    muted: false,
  }

  render() {
    return (
      <div className="video-cover">
        <div
          className="cover__wrapper"
          style={{ backgroundImage: `url(${this.props.cover.src})` }}
        ></div>
        <div
          className="cover__button"
          onClick={() => {
            this.setState({ visible: true, playing: true, muted: false })
          }}
        >
          <RightIcon />
        </div>
        <div className="video-name">{this.props.name}</div>
        <div
          className={
            this.state.visible ? "video__full--visible" : "video-full--hidden"
          }
          style={{ top: `${this.props.top}vh` }}
        >
          <div
            className="close-full"
            onClick={() => {
              this.setState({ visible: false, playing: false, muted: true })
            }}
          >
            <CrossIcon />
          </div>
          <div className="full__wrapper">
            <ReactPlayer
              url={this.props.url}
              width="100%"
              height="100%"
              playing={this.state.playing}
              muted={this.state.muted}
              controls={true}
              volume={0.2}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Video
