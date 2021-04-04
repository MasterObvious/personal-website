import React, { useEffect } from "react"

import * as styles from "./styles/viewport_div.module.css"

export default function ViewportDiv({ children }) {
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)

    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    })
  })

  return <div className={styles.container}>{children}</div>
}
