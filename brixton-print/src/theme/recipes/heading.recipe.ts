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
    variant: {
      one: {
        fontFamily: "NotoSansSemiCondensed, sans-serif",
        fontWeight: "600",
        fontSize: "32px",
        color: "brand.800",
        px: 6,
        py: 3,
      },
      two: {
        fontFamily: "NotoSansSemiCondensed, sans-serif",
        fontWeight: "600",
        fontSize: "24px",
        color: "brand.800",
        px: 6,
        pb: 3,
      },
      three: {
        fontFamily: "NotoSansSemiCondensed, sans-serif",
        fontWeight: "500",
        fontSize: "16px",
        color: "brand.700",
        // px: 2,
        py: 1,
      },
    },
    size: {
      sm: {
        fontSize: "16px",
        px: 4,
        py: 2,
      },
      md: {
        fontSize: "24px",
        px: 6,
        // py: 3,
        pb: 3,
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
