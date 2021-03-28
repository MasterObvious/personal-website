import React from "react"

import ViewportDiv from "./ViewportDiv"

import * as styles from "./styles/hero.module.css"
import macbook from "../images/macbook.png"

export default function Hero() {
  return (
    <ViewportDiv>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>I'm Tim Lazarus.</h1>
          <h2 className={styles.subtitle}>A software engineer.</h2>
        </div>
        <div className={styles.imageContainer}>
          <img src={macbook} />
          <div className={styles.screenOverlay}></div>
        </div>
      </div>
    </ViewportDiv>
  )
}
