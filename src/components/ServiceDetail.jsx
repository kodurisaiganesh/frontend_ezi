import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/services.css";

import filmStudioImg from "../assets/images/film-studio.jpg";
import brandingImg from "../assets/images/branding.jpg";
import artCurationImg from "../assets/images/art-curation.jpg";

const content = {
  "film-production": {
    title: "Film Production",
    items: [
      "Documentaries",
      "Corporate Videos",
      "2D Animation Videos",
      "3D Animation Videos"
    ],
    image: filmStudioImg
  },
  branding: {
    title: "Branding",
    items: [
      "Branding & Communication",
      "Market Mapping",
      "Content Management",
      "Social Media Management"
    ],
    image: brandingImg
  },
  "art-curation": {
    title: "Art Curation",
    items: [
      "Art Festivals",
      "Live Performances",
      "Community Events",
      "Cultural Storytelling"
    ],
    image: artCurationImg
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const page = content[id] || content["film-production"];

  return (
    <section className="service-detail-section">
      <div className="vf-container">
        <button className="back" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="service-detail-inner">
          <div className="thumb">
            <img src={page.image} alt={page.title} loading="lazy" />
            <div className="thumb-caption">{page.title}</div>
          </div>

          <div className="service-info">
            <h2>{page.title}</h2>
            <p>
              Who says films are just an escape? We see them as a way to live
              many lives — to feel, to explore, and to tell stories that stay.
              With each project we bring new memories and new reasons to keep
              creating.
            </p>

            <ul className="bullets">
              {page.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>

            <a className="explore" href="/contact">
              Explore Now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
