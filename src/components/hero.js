import React from "react"

import ViewportDiv from "./ViewportDiv"

import * as styles from "./styles/hero.module.css"

export default function Hero() {
  return (
    <ViewportDiv>
      <div className={styles.container}>
        <h1 className={styles.title}>I'm Tim Lazarus.</h1>
        <h2 className={styles.subtitle}>A software engineer.</h2>
      </div>
    </ViewportDiv>
  )
}
