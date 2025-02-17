import { defineRecipe } from "@chakra-ui/react";

const linkRecipe = defineRecipe({
  base: {
    textDecoration: "none",
  },
  variants: {
    variant: {
      // active: {
      //   textDecoration: "underline",
      //   textUnderlineOffset: "0.5rem",
      //   fontWeight: 700,
      // },
    },
  },
});

export default linkRecipe;
