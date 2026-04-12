import React from "react"
import "./RTVideo.scss"

export default function RTVideo({ src }) {
  const iframeSrc = `https://rutube.ru/play/embed/${src}/`
  return (
    <div className="video-wrapper">
      <iframe
        width="100%"
        height="100%"
        src={iframeSrc}
        frameBorder="0"
        allow="clipboard-write"
        webkitAllowFullScreen
        mozallowfullscreen
        allowFullScreen
      ></iframe>
    </div>
  )
}
