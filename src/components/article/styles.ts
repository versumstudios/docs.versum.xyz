import { styled } from "@styles/stitches"

export const Article = styled("article", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: "100vh",

  section: {
    flexGrow: 1,
  },

  "@bp1": {
    marginLeft: "250px",
    width: "calc(100% - 250px)",
    padding: "0 $2",
  },
})
