import { defineRecipe, defineSlotRecipe } from "@chakra-ui/react";
import { cardAnatomy } from "@chakra-ui/react/anatomy";

const cardRecipe = defineSlotRecipe({
  className: "chakra-card",
  slots: ["root", "header", "body", "footer", "title", "description"],
  base: {
    title: {
      color: "brand.800",
      fontFamily: "NotoSansSemiCondensed, sans-serif",
      fontWeight: "600",
      textStyle: "none",
      // mt: {
      //   md: 0,
      //   sm: 6,
      // },
    },
  },
  variants: {
    variant: {
      elevated: {
        root: {
          bg: "bg.panel",
          boxShadow: "md",
        },
      },
      outline: {
        root: {
          bg: "bg.panel",
          borderWidth: "1px",
          borderColor: "border",
        },
      },
      subtle: {
        root: {
          bg: "bg.muted",
        },
      },
      product: {
        root: {
          bg: "bg.panel",
          // boxShadow: "md",
        },
        body: {
          py: 2,
          px: 4,
        },
        title: {
          fontFamily: "Poppins, sans-serif",
          fontWeight: "600",
          color: "brand.700",
          px: 0,
          py: 3,
          textStyle: "lg",
        },
        description: {
          fontFamily: "Poppins, sans-serif",
          color: "brand.400",
        },
      },
    },
    size: {
      sm: {
        title: {
          textStyle: "md",
          // fontWeight: 600,
          // fontSize: "16px",
          // px: 4,
          py: 1,
        },
        description: {
          textStyle: "xs",
        },
      },
      md: {
        title: {
          // fontSize: "24px",
          // px: 6,
          // py: 3,
          pb: 3,
        },
      },
      lg: {
        title: {
          // px: 6,
          py: 3,
        },
      },
      // sm: {
      //   root: {
      //     "--card-padding": "spacing.4",
      //   },
      //   title: {
      //     textStyle: "md",
      //   },
      // },
      // md: {
      //   root: {
      //     "--card-padding": "spacing.6",
      //   },
      //   title: {
      //     textStyle: "lg",
      //   },
      // },
      // lg: {
      //   root: {
      //     "--card-padding": "spacing.7",
      //   },
      //   title: {
      //     textStyle: "xl",
      //   },
      // },
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "md",
  },
});

export default cardRecipe;
