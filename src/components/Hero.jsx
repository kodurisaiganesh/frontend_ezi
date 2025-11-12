import React from "react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="vf-container hero-inner">
        <div className="hero-left">
          <div className="mandala-mark"></div>
          <div className="logo-large">
            <span className="logo-mark">V</span>
            <span className="logo-text">Films</span>
          </div>
        </div>

        <div className="hero-right">
          <h1 className="hero-title">Varnan is where stories find their voice and form</h1>
          <p className="hero-sub">Films · Brands · Art</p>

          <p className="hero-desc">
            Since 2009, we’ve been telling stories — stories of people, their journeys, and the places that shape them.
            Some begin in polished boardrooms, others in humble village squares. But every story starts the same way:
            by listening with intention.
          </p>

          <div className="hero-actions">
            <a className="btn btn-outline" href="/portfolio">Their Stories</a>
            <a className="btn btn-primary" href="/contact">Let’s Talk</a>
          </div>
        </div>
      </div>
    </section>
  );
}
