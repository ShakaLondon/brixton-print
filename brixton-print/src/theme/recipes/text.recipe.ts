import { defineRecipe } from "@chakra-ui/react";

const textRecipe = defineRecipe({
  base: {
    color: "brand.700",
    fontFamily: "var(--font-poppins)",
    fontWeight: "600",
    mt: {
      md: 0,
      sm: 6,
    },
  },
  variants: {
    variant: {
      one: {
        fontFamily: "var(--font-poppins)",
        fontWeight: "500",
        fontSize: "14px",
        color: "brand.600",
        pt: 2,
        pe: 1,
      },
      two: {
        fontFamily: "var(--font-poppins)",
        fontWeight: "450",
        fontSize: "12px",
        color: "brand.600",
        // pb: 1,
        pe: 1,
      },
      three: {
        fontFamily: "var(--font-poppins)",
        fontWeight: "400",
        fontSize: "10px",
        color: "brand.600",
        // px: 2,
        py: 1,
      },
    },
    size: {
      bold: {
        fontWeight: 600,
        color: "brand.700",
      },
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

export default textRecipe;
