import { defineGlobalStyles } from "@chakra-ui/react";

const globalStyles = defineGlobalStyles({
  body: {
    bg: "brand.200",
    color: "brand.800",
    // px: 8,
  },
  form: {
    width: "full",
  },
  main: {
    marginTop: { base: "4rem", sm: "8rem", md: "6rem" },
  },
  h1: {
    color: "brand.800",
  },
  h2: {
    color: "brand.600",
  },
});

export default globalStyles;
