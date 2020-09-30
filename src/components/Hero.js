import React from "react";
import Screen from "./Screen";
import Div100vh from "react-div-100vh";

import macbook from "../images/macbook.png";

import "./styles/Hero.css";

export default function Hero() {
  return (
    <Div100vh className="hero-container">
      <div className="hero-text-container">
        <div className="hero-text-padding">
          <div>I'm Tim Lazarus.</div>
          <div className="hero-subtext">A software engineer.</div>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="hero-image">
          <img width="100%" src={macbook} alt="macbook"></img>
          <div className="screen-overlay">
            <Screen />
          </div>
        </div>
      </div>
    </Div100vh>
  );
}
