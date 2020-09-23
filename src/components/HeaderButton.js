import React from "react";

import "./styles/HeaderButton.css";

export default function HeaderButton(props) {
  return (
    <a className="headerButton" href="/">
      {props.children}
    </a>
  );
}
