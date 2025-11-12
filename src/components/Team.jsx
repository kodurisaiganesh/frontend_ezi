import React from "react";
import "../styles/about.css";

export default function Team() {
  return (
    <section className="team-section">
      <div className="vf-container team-inner">
        <div className="team-left">
          <div className="note-card">
            <p>
              Some craft films. Some build brands. Some curate art. We bring it all together — a collective of storytellers
              driven by one belief: every project deserves to be more than just a message; it should become a masterpiece.
            </p>
          </div>
          <div className="icon-graphic">[illustration]</div>
        </div>

        <div className="team-right">
          <h3>Take a closer look at the stories V bring to life.</h3>
          <a className="btn btn-primary" href="/portfolio">View Portfolio</a>
        </div>
      </div>
    </section>
  );
}
