import React from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import ScrollIndicator from "../components/ScrollIndicator";

import "./styles/Homepage.css";

export default function Homepage() {
  return (
    <div className="main-container">
      <Header />
      <Hero />
      <ScrollIndicator />
      <div>More content to test</div>
    </div>
  );
}
