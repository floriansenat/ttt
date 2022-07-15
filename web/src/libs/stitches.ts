import { createStitches } from "@stitches/react";
import { rem } from "@/utils/rem";

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
    space: {
      1: rem(4),
      2: rem(8),
      3: rem(12),
      4: rem(16),
      5: rem(20),
      6: rem(24),
      7: rem(28),
      8: rem(32),
      9: rem(36),
      10: rem(40),
      11: rem(44),
      12: rem(48),
      13: rem(52),
      14: rem(56),
      15: rem(60),
      16: rem(64),
      17: rem(68),
      18: rem(72),
      19: rem(76),
      20: rem(80),
      auto: "auto",
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
    padding: "36px 0",
  },
  h1: { fontSize: "2.4rem" },
});
