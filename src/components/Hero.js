import React from "react";

import macbook from "../images/macbook.png";

import "./styles/Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <div className="hero-text-padding">
          <div>I'm Tim Lazarus.</div>
          <div className="hero-subtext">A software engineer.</div>
        </div>
      </div>
      <div className="hero-image-container">
        <img className="hero-image" src={macbook} alt="macbook"></img>
      </div>
    </div>
  );
}
