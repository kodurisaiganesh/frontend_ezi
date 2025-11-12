import React from "react";
import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Services from "./components/Services";
import ServiceDetail from "./components/ServiceDetail";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function RoutesTree() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<><About /><Team /></>} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:id" element={<ServiceDetail />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      {/* fallback to home */}
      <Route path="*" element={<Hero />} />
    </Routes>
  );
}
