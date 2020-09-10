import React from "react";
import { Flex } from "@chakra-ui/core";
import Header from "../components/Header";

export default function Homepage() {
  return (
    <Flex direction="column" align="center" m="0 auto" maxW="1200px">
      <Header />
    </Flex>
  );
}
