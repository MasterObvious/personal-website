import React, { useState, useEffect } from "react"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import ViewportDiv from "./ViewportDiv"
import Macbook from "./Macbook"

import * as styles from "./styles/hero.module.css"

export default function Hero() {
  const codeString = `fn main() {
  println!("Welcome!");
}`

  const [subIndex, setSubIndex] = useState(0)
  const [showBlink, setShowBlink] = useState(true)

  useEffect(() => {
    let timeout = null

    if (subIndex === codeString.length) {
      timeout = setTimeout(() => {
        setShowBlink(prev => !prev)
      }, 500)
    } else {
      timeout = setTimeout(() => {
        setSubIndex(prev => prev + 1)
      }, 50)
    }

    return () => clearTimeout(timeout)
  }, [subIndex, showBlink])

  return (
    <ViewportDiv>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>I'm Tim Lazarus.</h1>
          <h2 className={styles.subtitle}>A software engineer.</h2>
        </div>
        <Macbook>
          <SyntaxHighlighter
            className={styles.codeContainer}
            customStyle={{ margin: 0, height: "100%" }}
            language="rust"
            style={vscDarkPlus}
          >
            {`${codeString.substring(0, subIndex)}${showBlink ? "|" : " "}`}
          </SyntaxHighlighter>
        </Macbook>
      </div>
    </ViewportDiv>
  )
}
