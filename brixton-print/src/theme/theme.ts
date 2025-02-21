"use client";

import {
  createSystem,
  defineConfig,
  defaultBaseConfig,
  defaultConfig,
  mergeConfigs,
  defineGlobalStyles,
  CardTitle,
} from "@chakra-ui/react";
import globalStyles from "@theme/globals";
import globalCss from "@theme/globals";
import buttonRecipe from "@theme/recipes/button.recipe";
import headingRecipe from "@theme/recipes/heading.recipe";
import linkRecipe from "@theme/recipes/link.recipe";
import textRecipe from "./recipes/text.recipe";
import cardRecipe from "./recipes/card.recipe";

const customConfig = defineConfig({
  cssVarsRoot: ":where(:root, :host)",
  theme: {
    tokens: {
      colors: {
        brand: {
          0: { value: "#FFFFFF" },
          50: { value: "#F4F4F3" },
          100: { value: "#e1e1e1" },
          200: { value: "#cfcfcf" },
          300: { value: "#b5b5b5" },
          400: { value: "#9b9b9b" },
          500: { value: "#818181" },
          600: { value: "#676767" },
          700: { value: "#4d4d4d" },
          800: { value: "#383838" },
          900: { value: "#1a1a1a" },
          1000: { value: "#000000" },
          yellow: { value: "#FFC700" },
          purple: { value: "#BDB2C3" },
        },
      },
    },
    recipes: {
      button: buttonRecipe,
      heading: headingRecipe,
      text: textRecipe,
      link: linkRecipe,
    },
    slotRecipes: { card: cardRecipe },
  },
  globalCss: globalStyles,
});

export default createSystem(defaultConfig, customConfig);
