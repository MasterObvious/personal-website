import React from "react"
import { Helmet } from "react-helmet"

import * as styles from "./styles/layout.module.css"
import preview from "../images/preview.png"

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
          content="Tim Lazarus, a software engineer at Facebook"
        />
        <title>Tim Lazarus</title>

        {/* Open Graph meta tags */}
        <meta property="og:title" content="Tim Lazarus" />
        <meta property="og:url" content="https://www.timlazarus.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="This is the personal website of Tim Lazarus, a software engineer at Facebook"
        />
        <meta
          property="og:image"
          content={"https://www.timlazarus.com" + preview}
        />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Master_Obvious" />
        <meta name="twitter:creator" content="@Master_Obvious" />
        <meta name="twitter:title" content="Tim Lazarus" />
        <meta
          name="twitter:description"
          content="This is the personal website of Tim Lazarus, a software engineer at Facebook"
        />
        <meta
          name="twitter:image"
          content={"https://www.timlazarus.com" + preview + "?x=0"}
        />
      </Helmet>
      {children}
    </div>
  )
}
