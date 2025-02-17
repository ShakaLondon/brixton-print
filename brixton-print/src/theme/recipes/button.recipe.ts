import { defineRecipe } from "@chakra-ui/react";

const buttonRecipe = defineRecipe({
  base: {
    pe: {
      base: 4,
      sm: 0,
    },
    ps: {
      base: 0,
      sm: 4,
    },
  },
  variants: {
    variant: {
      solid: {
        bg: "brand.500",
        color: "white",
        _hover: {
          bg: "brand.600",
        },
      },
      outline: {
        borderColor: "brand.500",
        color: "brand.500",
      },
      link: {
        pe: {
          base: 8,
          md: 6,
          sm: 4,
          xs: 4,
        },
        ps: {
          base: 0,
          md: 0,
          sm: 4,
          xs: 4,
        },
        color: "brand.600",
        fontWeight: 400,
        textUnderlineOffset: "8px",
        bg: "none",
        _hover: {
          textDecoration: "underline",
          fontWeight: 600,
        },
      },
      active: {
        pe: {
          base: 8,
          md: 6,
          sm: 4,
          xs: 4,
        },
        ps: {
          base: 0,
          md: 0,
          sm: 4,
          xs: 4,
        },
        color: "brand.600",
        fontWeight: "600",
        textUnderlineOffset: "8px",
        bg: "none",
        textDecoration: "underline",
      },
      ghost: {
        bg: "brand.800",
        color: "brand.0",
        _hover: {
          bg: "brand.0",
          color: "brand.600",
        },
        pe: {
          md: 4,
        },
        ps: {
          md: 4,
        },
      },
    },
    size: {
      sm: {
        fontSize: "12px",
      },
      md: {
        fontSize: "14px",
      },
    },
  },
});

export default buttonRecipe;
