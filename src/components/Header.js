import React from "react";

import HeaderButton from "./HeaderButton.js";

import "./styles/Header.css";

export default function Header() {
  return (
    <nav id="nav-header">
      <HeaderButton>About</HeaderButton>
      <HeaderButton>Contact</HeaderButton>
    </nav>
  );
}
