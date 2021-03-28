import React from "react"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import ViewportDiv from "./ViewportDiv"
import Macbook from "./Macbook"

import * as styles from "./styles/hero.module.css"

export default function Hero() {
  const codeString = `fn main() {
  let x = 5;
  let y = x + 6;
  println!("Hello World!");
  let x = 5;
  let y = x + 6;
  println!("Hello World!");
  let x = 5;
  let y = x + 6;
  println!("Hello World!");
  let x = 5;
  let y = x + 6;
  println!("Hello World!");
  let x = 5;
  let y = x + 6;
  println!("Hello World!");
  let x = 5;
  let y = x + 6;
  println!("Hello World!");
  let x = 5;
  let y = x + 6;
  println!("Hello World!");
  let x = 5;
  let y = x + 6;
  println!("Hello World!");
  let x = 5;
  let y = x + 6;
  println!("Hello World!");
}`

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
            {codeString}
          </SyntaxHighlighter>
        </Macbook>
      </div>
    </ViewportDiv>
  )
}
