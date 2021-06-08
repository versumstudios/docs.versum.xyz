import { styled } from "@styles/stitches"

export const Aside = styled("aside", {
  width: "100%",
  backgroundColor: "$secondaryBackground",
  borderBottom: "1px solid $borderColor",

  "@bp1": {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    width: "250px",
    borderBottom: "unset",
    borderRight: "1px solid $borderColor",
    overflowY: "auto",
  },
})

export const Main = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "$2",
  fontSize: "10px",

  kbd: {
    backgroundColor: "$borderColor",
    padding: "4px 6px",
    borderRadius: "4px",
  },

  nav: {
    display: "flex",
    alignItems: "center",

    "& > *": {
      marginLeft: "$1",
    },

    button: {
      position: "relative",
      backgroundColor: "transparent",
      border: "none",

      "@bp1": {
        display: "none",
      },
    },
  },
})
