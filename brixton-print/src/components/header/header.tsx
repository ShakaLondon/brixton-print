import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const Header = () => {
  return (
    <Box px={4} py={3}>
      <Flex align="center" justify="space-between">
        <Heading size="md">
          <Link href="/">Brixton Print</Link>
        </Heading>

        <Flex align="center">
          <Link href="/about">
            <Button variant="plain" color="white" mx={2}>
              About
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="plain" color="white" mx={2}>
              Contact
            </Button>
          </Link>
          <Button colorScheme="teal" ml={4}>
            Get Started
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
