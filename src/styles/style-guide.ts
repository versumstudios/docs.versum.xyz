export const StyleGuide = {
  html: {
    padding: 0,
    margin: 0,
    width: "100%",
    height: "100%",
  },

  body: {
    backgroundColor: "$primaryBackground",
    color: "$primaryFill",
    fontFamily: "$DMSans",
    fontSize: "16px",
  },

  "*": {
    boxSizing: "border-box",
    "-moz-osx-font-smoothing": "grayscale",
    "-webkit-font-smoothing": "antialiased",
  },

  h1: { fontSize: "3.815rem", fontWeight: 700 },

  h2: { fontSize: "3.052rem" },

  h3: { fontSize: "2.441rem" },

  h4: { fontSize: "1.953rem" },

  h5: { fontSize: "1.563rem" },

  h6: { fontSize: "1.250rem" },

  blockquotes: {},

  p: { fontSize: "1rem" },

  a: { color: "black" },

  "h1,h2,h3,h4,h5,h6,p": {
    marginBottom: "20px",
  },

  hr: {
    border: "none",
    width: "100%",
    height: "1px",
    background: "rgba(180, 180, 180, 0.2)",
    marginTop: "60px",
    marginBottom: "60px",
  },

  pre: {
    padding: "20px",
    borderRadius: "6px",
    backgroundColor: "rgba(0,0,0,0.04)",
  },
}
