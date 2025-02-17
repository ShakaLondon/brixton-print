import NextLink from "next/link";
import NavLink from "@/components/navLink/navLink";
import LinkButton from "@/components/linkButton/linkButton";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Container
      px={8}
      mx={0}
      height={{ base: "6rem", sm: "unset" }}
      alignContent="center"
      pos={{ md: "fixed", base: "relative" }}
      minWidth="100%"
    >
      <Grid
        alignItems="center"
        templateColumns={{
          base: "1fr",
          md: "1fr auto 1fr",
        }}
        templateRows={{ base: "1fr 1fr", md: "1fr" }}
        height={{ md: "6rem", base: "2rem" }}
        width="100%"
        maxWidth={{ md: "80rem" }}
        justifySelf={{ md: "center" }}
      >
        <GridItem
          alignContent="center"
          order={{ base: 2, md: 1 }}
          justifySelf={{ md: "left", base: "center" }}
        >
          <NavLink href="/products" text="Products" />
          <NavLink href="/about" text="About" />
          <NavLink href="/contact" text="Contact" />
        </GridItem>

        <GridItem alignContent="center" order={{ base: 1, md: 2 }}>
          <Heading size="lg" justifySelf="center">
            <Link as={NextLink} href="/">
              Brixton Print
            </Link>
          </Heading>
        </GridItem>

        <GridItem
          alignContent="center"
          justifySelf="right"
          order={{ base: 3, md: 3 }}
          display={{ base: "none", md: "block" }}
        >
          <LinkButton href="/products" text="Order Now" variant="ghost" />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Header;
