import { styled } from "@styles/stitches"

export const Article = styled("article", {
  width: "100%",

  "@bp1": {
    width: "calc(100% - 250px)",
    padding: "0 20px",
  },
})
