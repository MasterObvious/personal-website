import React, { useState, useEffect } from "react"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import * as styles from "./styles/screen.module.css"

export default function Screen(props) {
  const [subIndex, setSubIndex] = useState(0)
  const [showBlink, setShowBlink] = useState(true)

  useEffect(() => {
    let timeout = null

    if (subIndex === props.codeString.length) {
      if (props.preview) {
        setShowBlink(true)
      } else {
        timeout = setTimeout(() => {
          setShowBlink(prev => !prev)
        }, 500)
      }
    } else {
      timeout = setTimeout(() => {
        setSubIndex(prev => prev + 1)
      }, 50)
    }

    return () => clearTimeout(timeout)
  }, [props, subIndex, showBlink])

  const previewStyle = props.preview
    ? {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }
    : {}

  return (
    <div className={styles.container}>
      <SyntaxHighlighter
        codeTagProps={{
          style: {
            fontSize: "inherit",
            fontFamily: `Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New"`,
          },
          className: "language-" + props.language,
        }}
        className={styles.highlighter}
        customStyle={{
          margin: 0,
          height: "100%",
          fontSize: props.preview ? "4.5em" : "1em",
          ...previewStyle,
        }}
        language={props.language}
        style={vscDarkPlus}
      >
        {`${props.codeString.substring(0, subIndex)}${showBlink ? "|" : " "}`}
      </SyntaxHighlighter>
    </div>
  )
}
