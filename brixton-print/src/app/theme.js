import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f5f5f5",
      100: "#e1e1e1",
      200: "#cfcfcf",
      300: "#b5b5b5",
      400: "#9b9b9b",
      500: "#818181",
      600: "#676767",
      700: "#4d4d4d",
      800: "#333333",
      900: "#1a1a1a",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "md",
        bg: "brand.500", // Set default button background color
        color: "white", // Set default text color for button
      },
      sizes: {
        sm: {
          fontSize: "12px",
          px: 4,
          py: 2,
        },
        md: {
          fontSize: "14px",
          px: 6,
          py: 3,
        },
      },
      variants: {
        solid: {
          bg: "brand.500", // Set default background for solid variant
          color: "white", // Set text color for solid variant
          _hover: {
            bg: "brand.600", // Set hover color
          },
        },
        outline: {
          borderColor: "brand.500",
          color: "brand.500",
        },
      },
    },
    Text: {
      baseStyle: {
        color: "brand.700", // Set default color for Text components
      },
    },
    Box: {
      baseStyle: {
        bg: "brand.50",
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "brand.50",
        color: "brand.700",
      },
      h1: {
        color: "brand.800",
      },
      h2: {
        color: "brand.600",
      },
      a: {
        color: "brand.500",
        _hover: {
          color: "brand.600",
        },
      },
    },
  },
});

export default theme;
