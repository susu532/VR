import React, { useState } from 'react'

// Replace this with your Emperia experience URL from the Emperia dashboard
const EMPERIA_URL = 'https://experience.emperiavr.com/43a7a3df-694a-4288-bd52-45aaac28b975/public/24fbba32-bb60-49b8-bb41-db4516d456ef/index.html'

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
