"use client";

import { border, extendTheme } from "@chakra-ui/react";
import { color } from "framer-motion";
import { Geist, Geist_Mono, Noto_Sans, Poppins } from "next/font/google";

const geist = Geist({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const notoMono = Noto_Sans({
  weight: ["100", "400", "700", "900"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const theme = extendTheme({
  colors: {
    brand: {
      0: "#FFFFFF",
      50: "#F4F4F3",
      100: "#e1e1e1",
      200: "#cfcfcf",
      300: "#b5b5b5",
      400: "#9b9b9b",
      500: "#818181",
      600: "#676767",
      700: "#4d4d4d",
      800: "#383838",
      900: "#1a1a1a",
      1000: "#000000",
      yellow: "#FFC700",
      purple: "#BDB2C3",
    },
  },
  components: {
    Button: {
      // baseStyle: {
      //   fontWeight: "bold",
      //   borderRadius: "md",
      //   bg: "brand.500",
      //   color: "white",
      // },
      sizes: {
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
      variants: {
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
    },
    Heading: {
      baseStyle: {
        color: "brand.800",
        fontFamily: "NotoSansSemiCondensed, sans-serif",
        fontWeight: "500",
      },
      sizes: {
        sm: {
          fontSize: "8px",
          px: 4,
          py: 2,
        },
        md: {
          fontSize: "16px",
          px: 6,
          py: 3,
        },
        lg: {
          fontSize: "26px",
          px: 6,
          py: 3,
        },
      },
    },
    Text: {
      baseStyle: {
        color: "brand.700",
      },
    },
    Link: {
      baseStyle: {
        textDecoration: "none",
        transition: "color 0.2s ease-in-out",
        _hover: {
          color: "blue.800",
          textDecoration: "underline",
        },
      },
    },
  },
  // Box: {
  //   baseStyle: {
  //     bg: "brand.50",
  //   },
  // },
  // fonts: {
  //   heading: notoMono.style.fontFamily,
  //   body: poppins.style.fontFamily,
  // },
  styles: {
    global: {
      body: {
        bg: "brand.50",
        color: "brand.800",
        fontFamily: notoMono.style.fontFamily,
      },
      h1: {
        color: "brand.800",
      },
      h2: {
        color: "brand.600",
      },
    },
  },
});

export default theme;
