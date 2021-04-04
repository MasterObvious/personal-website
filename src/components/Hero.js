import React from "react"

import ViewportDiv from "./ViewportDiv"
import Macbook from "./Macbook"
import Screen from "./Screen"

import * as styles from "./styles/hero.module.css"

export default function Hero() {
  return (
    <ViewportDiv>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>I'm Tim Lazarus.</h1>
          <h2 className={styles.subtitle}>A software engineer.</h2>
        </div>
        <Macbook>
          <Screen />
        </Macbook>
      </div>
    </ViewportDiv>
  )
}
