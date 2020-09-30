import React from "react";

import Header from "../components/Header.js";
import Hero from "../components/Hero.js";

import "./styles/Homepage.css";

export default function Homepage() {
  return (
    <div className="main-container">
      <Header />
      <Hero />
    </div>
  );
}
