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
          content={"https://www.timlazarus.com/" + preview}
        />

        {/* Twitter meta tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@Master_Obvious" />
        <meta property="twitter:creator" content="@Master_Obvious" />
        <meta property="twitter:title" content="Tim Lazarus" />
        <meta
          property="twitter:description"
          content="This is the personal website of Tim Lazarus, a software engineer at Facebook"
        />
        <meta
          property="twitter:image"
          content={"https://www.timlazarus.com/" + preview}
        />
      </Helmet>
      {children}
    </div>
  )
}
