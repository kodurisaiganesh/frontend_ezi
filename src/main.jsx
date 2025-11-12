import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./styles/layout.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/services.css";
import "./styles/contact.css";
import "./styles/responsive.css";

createRoot(document.getElementById("root")).render(<App />);
