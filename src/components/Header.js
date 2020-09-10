import React from "react";
import { Button, Flex } from "@chakra-ui/core";

export default function Header() {
  return (
    <Flex as="nav" align="center" justify="flex-end" w="100%" padding="6">
      <Button variant="link" mr="6">
        About
      </Button>
      <Button variant="link">Contact</Button>
    </Flex>
  );
}
