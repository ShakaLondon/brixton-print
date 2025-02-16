import { defineRecipe } from "@chakra-ui/react";

const buttonRecipe = defineRecipe({
  // baseStyle: {
  //   fontWeight: "bold",
  //   borderRadius: "md",
  //   bg: "brand.500",
  //   color: "white",
  // },
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
        color: "brand.600",
        fontWeight: "400",
        textUnderlineOffset: "8px",
        bg: "none",
        _hover: {
          textDecoration: "underline",
        },
      },
      active: {
        color: "brand.600",
        fontWeight: "400",
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
      },
    },
    size: {
      sm: {
        fontSize: "12px",
        px: 4,
        py: 2,
      },
      md: {
        fontSize: "14px",
        px: 8,
        py: 3,
      },
    },
  },
});

export default buttonRecipe;
