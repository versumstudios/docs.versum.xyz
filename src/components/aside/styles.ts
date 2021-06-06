import { styled } from "@styles/stitches"

export const Aside = styled("aside", {
  position: "sticky",
  top: "0",
  width: "100%",
  backgroundColor: "#fafafa",
  borderBottom: "1px solid rgba(0, 0, 0, 0.05)",

  "@bp1": {
    position: "unset",
    top: "unset",
    width: "250px",
    height: "100vh",
    overflow: "hidden",
    borderBottom: "unset",
    borderRight: "1px solid rgba(0, 0, 0, 0.05)",
  },
})

export const Main = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px",
  fontSize: "10px",

  kbd: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
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

export const Nav = styled("nav", {
  display: "flex",
  borderTop: "1px solid rgba(0, 0, 0, 0.05)",
  borderBottom: "1px solid rgba(0, 0, 0, 0.05)",

  "& > *": {
    flex: "1 1 0px",
    textAlign: "center",
    padding: "16px",

    "&:first-child": {
      borderRight: "1px solid rgba(0, 0, 0, 0.05)",
    },
  },
})

export const A = styled("a", {
  textTransform: "capitalize",
  cursor: "pointer",
  fontWeight: 700,
  backgroundColor: "#f4f4f4",
  color: "#666666",

  "&:hover": {
    backgroundColor: "transparent",
    color: "black",
  },

  variants: {
    selected: {
      true: {
        backgroundColor: "transparent",
        color: "black",
      },
    },
  },
})

export const Ul = styled("ul", {
  display: "none",
  listStyleType: "none",
  padding: "20px",
  fontWeight: 500,
  textTransform: "capitalize",

  li: {
    marginBottom: "10px",
  },

  variants: {
    selected: {
      true: {
        display: "block",
      },
    },
  },
})
