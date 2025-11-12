import React from "react";
import "../styles/services.css";

export default function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="vf-container portfolio-inner">
        <h2>The Highlight Reel</h2>
        <p>Watch the magic we've captured.</p>

        <div className="video-frame">
          <div className="film-border">
            <iframe
              title="highlight reel"
              src="https://www.youtube.com/embed/GB68bXQOhhQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
