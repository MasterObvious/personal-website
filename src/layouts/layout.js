import React from "react"
import { Helmet } from "react-helmet"

import * as styles from "./styles/layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <meta
          name="description"
          content="The personal website for Tim Lazarus"
        />
        <title>Tim Lazarus</title>
      </Helmet>
      {children}
    </div>
  )
}
