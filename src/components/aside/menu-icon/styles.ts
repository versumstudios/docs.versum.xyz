import { styled } from "@styles/stitches"

export const Container = styled("div", {
  position: "relative",
  width: "24px",

  svg: {
    position: "absolute",
    top: "50%",
    left: 0,
    transform: "translateY(-50%)",
    display: "block",
    width: "30px",
    height: "30px",

    line: {
      stroke: "black",
    },
  },
})
