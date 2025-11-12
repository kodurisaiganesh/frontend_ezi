import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesTree from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-root">
        <Header />
        <div className="site-content">
          <RoutesTree />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
