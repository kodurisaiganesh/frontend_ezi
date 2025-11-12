import React from "react";
import "../styles/layout.css";

export default function Footer() {
  return (
    <footer className="vf-footer">
      <div className="vf-container footer-inner">
        <div>© {new Date().getFullYear()} V Films — Varnan</div>
        <div className="footer-right">Made with care · Contact: <a href="/contact">Let's Talk</a></div>
      </div>
    </footer>
  );
}
