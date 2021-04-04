import React, { useState, useEffect } from "react"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import * as styles from "./styles/screen.module.css"

export default function Screen() {
  const codeString = `fn main() {
    println!("Hello there!");
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
  }, [codeString, subIndex, showBlink])

  return (
    <SyntaxHighlighter
      className={styles.highlighter}
      customStyle={{ margin: 0, height: "100%" }}
      language="rust"
      style={vscDarkPlus}
    >
      {`${codeString.substring(0, subIndex)}${showBlink ? "|" : " "}`}
    </SyntaxHighlighter>
  )
}
