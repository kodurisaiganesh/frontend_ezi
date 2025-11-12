import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="vf-container about-inner">
        <div className="about-left">
          <h2>A montage of familiar faces and names.</h2>
          <p>
            Some stories come from the biggest names. Others begin with bold, rising voices. We’re fortunate to walk
            alongside both — listening, creating, and building stories that matter.
          </p>

          <div className="stats">
            <div className="stat"><div className="stat-num">85+</div><div className="stat-label">Projects</div></div>
            <div className="stat"><div className="stat-num">50+</div><div className="stat-label">Happy Clients</div></div>
            <div className="stat"><div className="stat-num">10+</div><div className="stat-label">Experts Team</div></div>
          </div>
        </div>

        <div className="about-right">
          <blockquote className="quote">
            Every project is more than just a brief — it’s a new chapter waiting to be written.
          </blockquote>
          <div className="badge-collage">
            {/* placeholder artwork / circle of logos */}
            <div className="badge">TED</div>
            <div className="badge">CocaCola</div>
            <div className="badge">Arion</div>
          </div>
        </div>
      </div>
    </section>
  );
}
