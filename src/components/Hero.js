import React from "react";

import { Flex, Text } from "@chakra-ui/core";

import "./styles/Hero.css";

export default function Hero() {
  return (
    <Flex className="hero-container">
      <Text className="hero-text" fontSize={{ base: "4xl", sm: "6xl" }}>
        I'm Tim Lazarus
      </Text>
    </Flex>
  );
}
