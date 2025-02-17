import { defineRecipe } from "@chakra-ui/react";

const headingRecipe = defineRecipe({
  base: {
    color: "brand.800",
    fontFamily: "NotoSansSemiCondensed, sans-serif",
    fontWeight: "600",
    mt: {
      md: 0,
      sm: 6,
    },
  },
  variants: {
    size: {
      sm: {
        fontSize: "8px",
        px: 4,
        py: 2,
      },
      md: {
        fontSize: "24px",
        px: 6,
        py: 3,
      },
      lg: {
        fontSize: "32px",
        px: 6,
        py: 3,
      },
    },
  },
});

export default headingRecipe;
