"use client";
import { Box, Flex, Heading, Button, Grid, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import NavLink from "@/components/navLink/navLink";
import LinkButton from "@/components/linkButton/linkButton";

const Header = () => {
  return (
    <Box bg="brand.50" px={8} py={3}>
      <Grid alignItems="center" templateColumns="1fr 2fr 1fr">
        <Flex align="center">
          <NavLink href="/products" text="Products" />
          <NavLink href="/about" text="About" />
          <NavLink href="/contact" text="Contact" />
        </Flex>

        <Heading size="lg" justifySelf="center">
          <Link as={NextLink} href="/">
            Brixton Print
          </Link>
        </Heading>

        <Flex align="center" justifySelf="right">
          <LinkButton href="/products" text="Order Now" variant="ghost" />
        </Flex>
      </Grid>
    </Box>
  );
};

export default Header;
