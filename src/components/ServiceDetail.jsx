import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/services.css";

const content = {
  "film-production": {
    title: "Film Production",
    items: ["Documentaries", "Corporate Videos", "2D Animation Videos", "3D Animation Videos"],
    image: "/src/assets/images/film-studio.jpg"
  },
  branding: {
    title: "Branding",
    items: ["Branding & Communication", "Market Mapping", "Content Management", "Social Media Management"],
    image: "/src/assets/images/branding.jpg"
  },
  "art-curation": {
    title: "Art Curation",
    items: ["Art Festivals", "Live Performances", "Community Events", "Cultural Storytelling"],
    image: "/src/assets/images/art-curation.jpg"
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const page = content[id] || content["film-production"];

  return (
    <section className="service-detail-section">
      <div className="vf-container">
        <button className="back" onClick={() => navigate(-1)}>← Back</button>

        <div className="service-detail-inner">
          <div className="thumb">
            <img src={page.image} alt={page.title} />
            <div className="thumb-caption">{page.title}</div>
          </div>

          <div className="service-info">
            <h2>{page.title}</h2>
            <p>
              Who says films are just an escape? We see them as a way to live many lives — to feel, to explore, and to tell stories that stay.
              With each project we bring new memories and new reasons to keep creating.
            </p>

            <ul className="bullets">
              {page.items.map(it => <li key={it}>{it}</li>)}
            </ul>

            <a className="explore" href="/contact">Explore Now →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
