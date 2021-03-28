import React from "react"

import macbook from "../images/macbook.png"

import * as styles from "./styles/macbook.module.css"

export default function Macbook({ children }) {
  return (
    <div className={styles.imageContainer}>
      <img src={macbook} alt="Macbook Pro" />
      <div className={styles.screenOverlay}>{children}</div>
    </div>
  )
}
