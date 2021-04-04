import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./styles/macbook.module.css"

export default function Macbook({ children }) {
  return (
    <div className={styles.imageContainer}>
      <StaticImage
        aspectRatio={2300 / 1351}
        loading="eager"
        placeholder="tracedSVG"
        src="../images/macbook.png"
        alt="Macbook Pro"
      />
      <div className={styles.screenOverlay}>{children}</div>
    </div>
  )
}
