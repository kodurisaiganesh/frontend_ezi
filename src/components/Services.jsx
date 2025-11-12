import React from "react";
import { Link } from "react-router-dom";
import "../styles/services.css";

import filmProductionImg from "../assets/images/film-production.jpg";
import brandingImg from "../assets/images/branding1.jpg";
import artCurationImg from "../assets/images/art-curation1.jpg";

const services = [
  {
    id: "film-production",
    title: "Film Production",
    desc: "Documentaries, Corporate Videos, 2D/3D Animation Videos",
    image: filmProductionImg
  },
  {
    id: "branding",
    title: "Branding",
    desc: "Brand Strategy, Market Mapping, Content Management, Social Media",
    image: brandingImg
  },
  {
    id: "art-curation",
    title: "Art Curation",
    desc: "Art Festivals, Live Performances, Community Events, Cultural Storytelling",
    image: artCurationImg
  }
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="vf-container services-inner">
        <h2 className="section-title">The Storyboard</h2>
        <p className="section-sub">
          The storyboard reveals the breadth of our craft.
        </p>

        <div className="services-grid">
          {services.map((s) => (
            <article className="service-card" key={s.id}>
              <div className="service-image">
                <img src={s.image} alt={s.title} loading="lazy" />
              </div>

              <div className="service-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to={`/services/${s.id}`} className="explore">
                  Explore Now →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
