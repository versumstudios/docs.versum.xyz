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
      primaryFill: "#000000",
    },
    space: {
      1: "10px",
      2: "20px",
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
