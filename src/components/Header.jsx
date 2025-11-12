import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/layout.css";

export default function Header() {
  return (
    <header className="vf-header">
      <div className="vf-container header-inner">
        <Link to="/" className="logo">
          <span className="logo-mark">V</span> <span className="logo-text">Films</span>
        </Link>

        <nav className="main-nav">
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Their Stories</NavLink>
          <NavLink to="/about">Our Story</NavLink>
          <NavLink to="/contact" className="cta">Let's Talk</NavLink>
        </nav>
      </div>
    </header>
  );
}
