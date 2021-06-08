import { styled } from "@styles/stitches"

export const Nav = styled("nav", {
  display: "flex",
  borderTop: "1px solid #e8e8e8",
  borderBottom: "1px solid #e8e8e8",

  "& > *": {
    flex: "1 1 0px",
    textAlign: "center",
    padding: "16px",

    "&:first-child": {
      borderRight: "1px solid #e8e8e8",
    },
  },
})

export const Ul = styled("ul", {
  display: "none",
  listStyleType: "none",
  marginTop: "$2",
  marginBottom: "$2",
  padding: "$2",
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

export const A = styled("a", {
  textTransform: "capitalize",
  cursor: "pointer",
  fontWeight: 700,
  backgroundColor: "$secondaryBackground",
  color: "#666666",

  "&:hover": {
    color: "black",
  },

  variants: {
    selected: {
      true: {
        backgroundColor: "$terciaryBackground",
        color: "black",
      },
    },
  },
})

export const Mobile = styled("div", {
  width: "100vw",
  minHeight: "100vh",
  backgroundColor: "$secondaryBackground",

  "@bp1": {
    display: "none",
  },
})

export const Desktop = styled("div", {
  display: "none",

  "@bp1": {
    display: "block",
  },
})
