import { defineRecipe } from "@chakra-ui/react";

const headingRecipe = defineRecipe({
  base: {
    color: "brand.800",
    fontFamily: "NotoSansSemiCondensed, sans-serif",
    fontWeight: "500",
  },
  variants: {
    size: {
      sm: {
        fontSize: "8px",
        paddingInline: 4,
        paddingBlock: 2,
      },
      md: {
        fontSize: "16px",
        paddingInline: 6,
        paddingBlock: 3,
      },
      lg: {
        fontSize: "26px",
        paddingInline: 6,
        paddingBlock: 3,
      },
    },
  },
});

export default headingRecipe;
