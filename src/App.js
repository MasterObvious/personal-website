import React from "react";

import { CSSReset, ThemeProvider } from "@chakra-ui/core";

import Homepage from "./Layouts/Homepage";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
