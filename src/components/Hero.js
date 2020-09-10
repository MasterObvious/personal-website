import React from "react";

import { Flex, Text } from "@chakra-ui/core";

import "./styles/Hero.css";

export default function Hero() {
  return (
    <Flex className="hero-container" justify="flex-start" w="85%">
      <Text
        className="hero-text"
        fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
      >
        I'm Tim Lazarus
      </Text>
    </Flex>
  );
}
