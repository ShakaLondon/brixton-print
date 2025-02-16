import { defineRecipe } from "@chakra-ui/react";

const linkRecipe = defineRecipe({
  base: {
    textDecoration: "none",
    transition: "color 0.2s ease-in-out",
    "&:hover": {
      color: "blue.800",
      textDecoration: "underline",
      textUnderlineOffset: "0.5rem",
      fontWeight: 700,
    },
  },
  variants: {
    variant: {
      active: {
        textDecoration: "underline",
        textUnderlineOffset: "0.5rem",
        fontWeight: 700,
      },
    },
  },
});

export default linkRecipe;
