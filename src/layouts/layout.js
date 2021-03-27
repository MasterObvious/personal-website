import React from "react"

import * as styles from "./styles/layout.module.css"

// Import webfonts
import "@fontsource/ibm-plex-sans/600.css"
import "@fontsource/ibm-plex-sans/400.css"

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}
