import React from 'react'
import EmperiaEmbed from './components/EmperiaEmbed'

export default function App() {
  return (
    <div className="app-root">
      <header className="hero">
        <div className="hero-content">
          <h1>Dior — Atelier of Dreams</h1>
          <p>3D virtual experience  </p>
        </div>
      </header>

      <main className="content">
        <section className="embed-section">
          <EmperiaEmbed />
        </section>

        <aside className="info">
          <h2>About this demo</h2>
          <p>
            This is a benign, local demo that embeds an virtual experience using an
            iframe. Replace the `EMPERIA_URL` in `src/components/EmperiaEmbed.jsx`
            with your published virtual experience URL.
          </p>
        </aside>
      </main>

      <footer className="footer">
        <small>Prototype — Dior Atelier of Dreams</small>
      </footer>
    </div>
  )
}
