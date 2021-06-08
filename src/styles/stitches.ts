import { createCss } from "@stitches/react"

export const {
  theme,
  styled,
  getCssString,
  css,
  keyframes,
  global: createGlobalStyles,
} = createCss({
  theme: {
    colors: {
      primaryBackground: "#ffffff",
      secondaryBackground: "#fafafa",
      terciaryBackground: "#f6f6f6",
      borderColor: "#e8e8e8",
      primaryFill: "#000000",
      secondaryFill: "#666666",
    },
    space: {
      1: "10px",
      2: "20px",
      3: "60px",
    },
    fontSizes: {
      1: "16px",
    },
    fonts: {
      DMSans: "DM Sans, apple-system, sans-serif",
      monospace: "menlo, monospace",
    },
  },
  media: {
    bp1: "(min-width: 640px)",
  },
})
