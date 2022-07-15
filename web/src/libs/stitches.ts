import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      blackDark: "#11222a",
      blackMedium: "#192a32",
      blackLight: "#1f3540",
      greyDark: "#6e8a98",
      greyMedium: "#aabcc6",
      blue: "#30c5bf",
      yellow: "#f3b136",
      red: "#f35836",
      white: "#fff",
    },
    radii: {
      md: "8px",
    },
    shadows: {
      buttonIdle: "0px 3px 0px 0px",
      buttonActive: "none",
    },
  },
});

export const globalStyles = globalCss({
  "@import": [
    "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,500;1,600&display=swap",
  ],
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: {
    fontFamily: "Poppins, sans-serif",
    color: "$white",
    backgroundColor: "$blackMedium",
    margin: "0 auto",
    maxWidth: "700px",
    fontSize: "16px",
  },
  h1: { fontSize: "2.4rem" },
});
