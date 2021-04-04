import React from "react"
import Macbook from "../components/Macbook"
import Screen from "../components/Screen"

import * as styles from "./styles/homepage.module.css"

export default function Homepage() {
  const codeString = `<TimLazarus />`
  return (
    <div className={styles.container}>
      <Macbook>
        <Screen preview={true} codeString={codeString} language={"jsx"} />
      </Macbook>
    </div>
  )
}
