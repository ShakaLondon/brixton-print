import { defineGlobalStyles } from "@chakra-ui/react";
import { notoMono } from "./fonts";

const globalStyles = defineGlobalStyles({
  body: {
    background: "brand.50",
    color: "brand.800",
    fontFamily: notoMono.style.fontFamily,
  },
  h1: {
    color: "brand.800",
  },
  h2: {
    color: "brand.600",
  },
});

export default globalStyles;
