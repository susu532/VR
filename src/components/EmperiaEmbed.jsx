import React, { useState } from 'react'

// Replace this with your Emperia experience URL from the Emperia dashboard
const EMPERIA_URL = 'https://community-experience.emperiavr.com/d17046df-16e2-4865-afff-4ae57fee41ed/2ed8379b-d3ba-42d3-aad3-00d3a8e2eb48/index.html'

export default function EmperiaEmbed() {
  const [url] = useState(EMPERIA_URL)

  return (
    <div className="emperia-wrapper">
      <div className="emperia-toolbar">
        <span className="badge">virtual experience</span>
        <a className="open-new" href={url} target="_blank" rel="noreferrer">
          Open in new tab
        </a>
      </div>

      <div className="emperia-frame">
        <iframe
          title="virtual experience"
          src={url}
          frameBorder="0"
          allow="autoplay; fullscreen; vr; xr-spatial-tracking; gyroscope; accelerometer"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
        />
      </div>
    </div>
  )
}
