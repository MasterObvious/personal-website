import React from "react";

import { Flex, Text, Heading } from "@chakra-ui/core";

import "./styles/Hero.css";

export default function Hero() {
  return (
    <Flex
      className="hero-container"
      justify="flex-start"
      w="85%"
      flexDirection="column"
    >
      <Heading as="h1" className="hero-text" size="2xl">
        I'm Tim Lazarus.
      </Heading>
      <Text
        as="h2"
        className="hero-subtext"
        fontSize={{ base: "2xl", sm: "3xl" }}
      >
        A software engineer.
      </Text>
    </Flex>
  );
}
